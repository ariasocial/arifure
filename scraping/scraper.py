# scraper.py
import requests
from bs4 import BeautifulSoup
import xml.etree.ElementTree as ET 
from datetime import datetime

# --- 設定 ---
SITEMAP_URL = "https://w.atwiki.jp/arifure/sitemaps.xml" 
NAMESPACE = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'} 

def get_urls_from_sitemap(sitemap_url):
    """サイトマップXMLを解析し、含まれる全URLのリストを返します。"""
    try:
        response = requests.get(sitemap_url, timeout=20)
        response.raise_for_status()
        root = ET.fromstring(response.content)
        urls = [loc.text for url in root.findall('s:url', NAMESPACE) 
                for loc in url.findall('s:loc', NAMESPACE)]
        print(f"✅ サイトマップから {len(urls)} 件のURLを取得しました。")
        return urls
    except Exception as e:
        print(f"❌ サイトマップ解析中にエラーが発生しました: {e}")
        return []

def scrape_single_page(url):
    """単一のURLからデータを取得し、必要な情報を抽出します。"""
    try:
        response = requests.get(url, timeout=15)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        content_area = soup.find(id="wikibody")
        title_tag = soup.find('h2', class_='page-name')
        title = title_tag.text if title_tag else soup.title.string
        excerpt = "本文が見つかりません"
        if content_area:
             paragraphs = content_area.find_all('p', recursive=False)
             excerpt = paragraphs[0].text[:100] + "..." if paragraphs else "本文が見つかりません"
        
        print(f"  - 成功: {title}")
        
        # 取得データを辞書で返す
        return {"title": title, "url": url, "excerpt": excerpt, "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
    except Exception as e:
        print(f"  - 失敗: {url} - {e}")
        return None

def run_scraper_with_sitemap():
    print(f"--- スクレッピング開始 ({datetime.now().strftime('%Y-%m-%d %H:%M:%S')}) ---")
    target_urls = get_urls_from_sitemap(SITEMAP_URL)
    
    if not target_urls:
        print("処理を中断します。")
        return

    all_results = []
    
    for url in target_urls:
        result = scrape_single_page(url)
        if result:
            all_results.append(result)
            
    print("\n========================================")
    print(f"【処理結果】 成功件数: {len(all_results)} / 対象件数: {len(target_urls)}")
    
    # ⚠️ 注意: ログに残すだけでなく、永続化が必要な場合はここに保存処理（JSON/CSV出力、S3/GCSアップロードなど）を追加します。

if __name__ == "__main__":
    run_scraper_with_sitemap()
