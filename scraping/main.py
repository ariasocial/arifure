import logging
import sys
import time
import traceback
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# ロガーの基本設定
logging.basicConfig(stream=sys.stdout, level=logging.INFO, format='%(asctime)s [%(levelname)s] %(message)s')

# 変更点1: ターゲットURLをトップページに固定
TARGET_URL = "https://w.atwiki.jp/arifure/pages/1.html"

def setup_driver():
    """GitHub Actionsの仮想環境でSeleniumを動かすための設定"""
    chrome_options = Options()
    options = [
        "--headless",
        "--disable-gpu",
        "--window-size=1920,1200",
        "--no-sandbox",
        "--disable-dev-shm-usage",
        "--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    ]
    for option in options:
        chrome_options.add_argument(option)
    
    driver = webdriver.Chrome(options=chrome_options)
    driver.set_page_load_timeout(30) # ページの読み込みは30秒まで待つ
    return driver

def run_test_script():
    """テスト用のメイン処理を実行する関数"""
    logging.info("--- Test Script Started on GitHub Actions ---")
    driver = None
    try:
        driver = setup_driver()

        success_count = 0
        fail_count = 0
        
        # 変更点2: 同じURLに10回アクセスするループ
        for i in range(10):
            logging.info(f"-> Attempt {i + 1}/10: Visiting {TARGET_URL}...")
            try:
                driver.get(TARGET_URL)
                time.sleep(5) # JavaScriptの実行を5秒待つ
                logging.info(f"  -> Successfully visited.")
                success_count += 1
            except Exception:
                logging.error(f"  -> Failed to visit on attempt {i + 1}:\n{traceback.format_exc()}")
                fail_count += 1
        
        logging.info(f"--- Test finished. Success: {success_count}, Fail: {fail_count} ---")

    except Exception:
        logging.error(f"An unexpected error occurred during setup:\n{traceback.format_exc()}")
    finally:
        if driver:
            driver.quit()
            logging.info("--- Selenium driver quit. Script finished. ---")

# このスクリプトが直接実行されたときにrun_test_script()を呼び出す
if __name__ == "__main__":
    run_test_script()
