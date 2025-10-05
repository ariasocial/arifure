import requests
import xml.etree.ElementTree as ET
import logging
import sys
import time
import traceback
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# ロガーの基本設定
logging.basicConfig(stream=sys.stdout, level=logging.INFO, format='%(asctime)s [%(levelname)s] %(message)s')

# サイトマップのURL
SITEMAP_URL = "https://w.atwiki.jp/arifure/sitemaps.xml"

def setup_driver():
    """GitHub Actionsの仮想環境でSeleniumを動かすための設定"""
    chrome_options = Options()
    options = [
        "--headless",
        "--disable-gpu",
        "--window-size=1920,1200",
        "--no-sandbox", # Linuxコンテナ環境で必須
        "--disable-dev-shm-usage", # メモリ不足対策
        "--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    ]
    for option in options:
        chrome_options.add_argument(option)
    
    driver = webdriver.Chrome(options=chrome_options)
    return driver

def run_script():
    """メインの処理を実行する関数"""
    logging.info("--- Selenium Script Started on GitHub Actions ---")
    driver = None
    try:
        logging.info(f"Fetching sitemap from {SITEMAP_URL}...")
        sitemap_res = requests.get(SITEMAP_URL, timeout=30)
        sitemap_res.raise_for_status()
        root = ET.fromstring(sitemap_res.content)
        namespace = {'sitemap': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
        urls = [elem.text for elem in root.findall('sitemap:url/sitemap:loc', namespace)]
        logging.info(f"Found {len(urls)} URLs. Starting browser access.")

        driver = setup_driver()

        success_count = 0
        fail_count = 0
        for url in urls:
            try:
                logging.info(f"-> Visiting {url}...")
                driver.get(url)
                time.sleep(3) # JavaScriptの実行を待つ
                logging.info(f"  -> Successfully visited.")
                success_count += 1
            except Exception:
                logging.error(f"  -> Failed to visit {url}:\n{traceback.format_exc()}")
                fail_count += 1
        
        logging.info(f"--- All pages processed. Success: {success_count}, Fail: {fail_count} ---")

    except Exception:
        logging.error(f"An unexpected error occurred in handler:\n{traceback.format_exc()}")
    finally:
        if driver:
            driver.quit()
            logging.info("--- Selenium driver quit. Script finished. ---")

# このスクリプトが直接実行されたときにrun_script()を呼び出す
if __name__ == "__main__":
    run_script()
