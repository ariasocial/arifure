# ベースとなるPythonイメージ
FROM python:3.11-slim

# 必要なツールとGoogle Chromeをインストール
RUN apt-get update && apt-get install -y \\
    curl \\
    gnupg \\
    wget \\
    cron \\
    # --- Google Chromeのインストール ---
    && wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - \\
    && echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list \\
    && apt-get update \\
    && apt-get install -y google-chrome-stable \\
    # --- 後片付け ---
    && rm -rf /var/lib/apt/lists/*

# アプリケーションのコードをコピー
WORKDIR /app
COPY requirements.txt .
COPY main.py .

# Pythonの依存ライブラリをインストール
RUN pip install --no-cache-dir -r requirements.txt

# cronのスケジュールファイルと実行スクリプトをコピー
COPY crontab.txt /etc/cron.d/access-booster-cron
COPY entrypoint.sh /app/entrypoint.sh

# 権限を設定
RUN chmod 0644 /etc/cron.d/access-booster-cron
RUN chmod +x /app/entrypoint.sh

# コンテナ起動時に実行するコマンド
CMD ["/app/entrypoint.sh"]
