const puppeteer = require('puppeteer');
const axios = require('axios');
const xml2js = require('xml2js');

// --- 設定 ---
const WIKI_ID = 'arifure';
const SITEMAP_URL = `https://w.atwiki.jp/${WIKI_ID}/sitemaps.xml`;
const BASE_URL = `https://w.atwiki.jp/${WIKI_ID}/`;
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15'; // ブラウザ偽装
// ------------

/**
 * 起動前にランダムな秒数待機する（Cronの固定実行時間を隠蔽）
 */
async function initialRandomDelay() {
    // 0秒から最大15分（900秒）の間のランダムな遅延を設ける
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

        // トップページを必ず含める (sitemaps.xmlにない場合があるため)
        if (!urls.includes(BASE_URL)) {
            urls.unshift(BASE_URL);
        }

        console.log(`Found ${urls.length} URLs in the sitemap.`);
        return urls;

    } catch (error) {
        console.error('Error fetching or parsing sitemap:', error.message);
        return [];
    }
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
            executablePath: 'chromium',
            // OCI/Docker環境でヘッドレスChromiumをrootで実行するための必須フラグ
            args: [
                '--no-sandbox', 
                '--disable-setuid-sandbox',
                // IPローテーションプロキシを使用する場合、ここに `--proxy-server=...` を追加
            ]
        });

        const page = await browser.newPage();
        
        // --- User-Agentの設定 ---
        await page.setUserAgent(USER_AGENT);
        // --- User-Agentの設定完了 ---

        // --- 転送量削減のためのリソースブロック ---
        await page.setRequestInterception(true);
        page.on('request', (request) => {
            const resourceType = request.resourceType();
            // カウンターに必要なHTML, CSS, Script以外をブロック
            if (
                resourceType === 'image' ||
                resourceType === 'media' ||
                resourceType === 'font' ||
                resourceType === 'manifest' ||
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

        console.log(`Starting access for ${urls.length} URLs...`);
        for (const url of urls) {
            console.log(`Accessing: ${url}`);
            try {
                // DOMContentLoadedまで待機し、高速化と不必要な遅延ロードリソースの抑制を図る
                await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
                console.log(`Successfully accessed: ${url}`);
                
                // ページ間のランダム遅延 (IPブロック回避)
                const pageDelaySeconds = 5 + Math.random() * 15; // 5秒から20秒の間のランダムな遅延
                console.log(`  Waiting for ${pageDelaySeconds.toFixed(1)} seconds.`);
                await new Promise(resolve => setTimeout(resolve, pageDelaySeconds * 1000));

            } catch (pageError) {
                console.error(`Error accessing ${url}: ${pageError.message}`);
                // エラーが発生しても処理を継続
            }
        }

        console.log('All URLs accessed. Operation finished.');

    } catch (browserError) {
        console.error('Fatal error during browser operation:', browserError.message);
    } finally {
        if (browser) {
            await browser.close();
            console.log('Browser closed.');
        }
    }
}

/**
 * メイン関数
 */
async function main() {
    console.log('Starting counter boost process.');
    await initialRandomDelay(); // 起動時にランダム遅延
    
    const urls = await getUrlsFromSitemap();
    await accessUrls(urls);
}

main();