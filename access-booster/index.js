const puppeteer = require('puppeteer');
const axios = require('axios');
const xml2js = require('xml2js');

// --- 最終設定 ---
const WIKI_ID = 'arifure';
const SITEMAP_URL = `https://w.atwiki.jp/${WIKI_ID}/sitemaps.xml`;
const BASE_URL = `https://w.atwiki.jp/${WIKI_ID}/`;
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version=16.6 Safari/605.1.15'; 

// ★★★ 本番用アクセスパターン設定 ★★★
// 固定ページIDをカンマ区切りで設定 (例: トップページは「1」、サイトマップは「2」など)
const FIXED_PAGE_IDS_STRING = '1, 17, 49'; 
const RANDOM_ACCESS_PERCENTAGE = 30; // 固定ページ以外のページからランダムにアクセスする割合 (30%に設定)
const PAGE_DELAY_SECONDS = 0.4;     // 安定した最速の待機時間 (0.4秒に固定)
// ------------------------------------------


/**
 * [UTILITY] 配列をシャッフルする (Fisher-Yates)
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * 起動前の遅延 (Cronの固定実行時間を隠蔽)
 */
async function initialRandomDelay() {
    // 0秒から最大15分（900秒）の間のランダムな遅延を設ける (Cronのランダム化と併用)
    const delaySeconds = Math.floor(Math.random() * 900); 
    console.log(`Initial random delay: ${delaySeconds} seconds.`);
    await new Promise(resolve => setTimeout(resolve, delaySeconds * 1000));
}

/**
 * サイトマップからURLのリストを取得する
 */
async function getUrlsFromSitemap() {
    try {
        const response = await axios.get(SITEMAP_URL);
        const xml = response.data;
        const parser = new xml2js.Parser();
        const result = await parser.parseStringPromise(xml);
        
        const urls = result.urlset?.url?.map(urlEntry => urlEntry.loc[0]) || [];
        return urls;

    } catch (error) {
        console.error('Error fetching or parsing sitemap:', error.message);
        return [];
    }
}

/**
 * [CORE LOGIC] アクセス対象の最終リストを生成する
 */
function generateAccessList(allSitemapUrls) {
    // 1. 設定された固定IDを数値のSetに変換
    const fixedPageIds = new Set(FIXED_PAGE_IDS_STRING.split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id)));

    const fixedUrls = [];
    let randomCandidates = [];

    // 2. URLを巡回し、固定ページとランダム候補に分ける
    for (const url of allSitemapUrls) {
        // トップページはID 1として特別扱い。それ以外はURLからIDを抽出
        const isRoot = url === BASE_URL;
        const idMatch = url.match(/\/pages\/(\d+)\.html/);
        const pageId = isRoot ? 1 : (idMatch ? parseInt(idMatch[1]) : null); 

        if (pageId !== null && fixedPageIds.has(pageId)) {
            fixedUrls.push(url);
        } else {
            randomCandidates.push(url);
        }
    }

    // 3. ランダムにアクセスするページの数を計算
    const selectionCount = Math.floor(randomCandidates.length * (RANDOM_ACCESS_PERCENTAGE / 100));

    // 4. 候補リストをシャッフルし、必要な数だけ選択
    const selectedRandomUrls = shuffleArray(randomCandidates).slice(0, selectionCount);

    // 5. 固定ページとランダム選択ページを結合し、全体をシャッフル
    let finalAccessList = shuffleArray([...new Set([...fixedUrls, ...selectedRandomUrls])]);

    console.log(`Access Strategy: Fixed Pages=${fixedUrls.length}, Selected Random=${selectionCount}`);
    console.log(`Total Pages to Access per Cycle: ${finalAccessList.length}`);
    
    return finalAccessList;
}


/**
 * ヘッドレスブラウザで各URLにアクセスする
 */
async function accessUrls(urls) {
    if (urls.length === 0) return;

    let browser;
    try {
        console.log('Launching browser...');
        browser = await puppeteer.launch({
            // OCIのDocker環境で動作する最小限のargs
            args: [
                '--no-sandbox', 
                '--disable-setuid-sandbox',
                '--ignore-certificate-errors'
            ]
        });

        const page = await browser.newPage();
        await page.setUserAgent(USER_AGENT);

        // --- 転送量削減のためのリソースブロック ---
        await page.setRequestInterception(true);
        page.on('request', (request) => {
            const resourceType = request.resourceType();
            if (
                resourceType === 'image' ||
                resourceType === 'media' ||
                resourceType === 'font' ||
                request.url().includes('google-analytics') ||
                request.url().includes('ads') ||
                request.url().includes('flux-cdn') 
            ) {
                request.abort();
            } else {
                request.continue();
            }
        });
        // --- リソースブロック設定完了 ---

        console.log(`Starting access for ${urls.length} selected URLs...`);
        
        // アクセスリストのURLを巡回
        for (const url of urls) {
            const accessStart = Date.now();
            console.log(`Accessing: ${url}`);
            try {
                await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
                const timeTaken = (Date.now() - accessStart) / 1000;
                console.log(`  SUCCESS! [Load Time: ${timeTaken.toFixed(2)}s]`);
                
                // ★固定待機時間 0.4秒 (安定した最速値)★
                console.log(`  Waiting for ${PAGE_DELAY_SECONDS} second.`);
                await new Promise(resolve => setTimeout(resolve, PAGE_DELAY_SECONDS * 1000));

            } catch (pageError) {
                console.error(`Error accessing ${url}: ${pageError.message}`);
            }
        }

        console.log('Access run finished.');

    } catch (browserError) {
        console.error('Fatal error during browser operation:', browserError.message);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}


/**
 * メイン関数
 */
async function main() {
    console.log('Starting FINAL OCI ACCESS BOOSTER.');
    await initialRandomDelay(); 
    
    const allUrls = await getUrlsFromSitemap();
    
    // アクセスリストの生成
    const finalAccessList = generateAccessList(allUrls);
    
    // アクセス処理を実行
    await accessUrls(finalAccessList);
}

main();