# ベースイメージとしてNode.jsの軽量版を使用
FROM node:20-slim

# Puppeteerに必要なChromiumの依存関係をインストール
# --no-install-recommends でイメージサイズを削減
RUN apt-get update && apt-get install -y \
    chromium \
    libnss3 libasound2 libatk-bridge2.0-0 libcups2 libdrm2 libgbm1 libxcomposite1 \
    libxdamage1 libxrandr2 libxtst6 fonts-noto-cjk \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# 作業ディレクトリの設定
WORKDIR /usr/src/app

# アプリケーションの依存関係をコピーしてインストール
COPY package*.json ./
RUN npm install

# スクリプトファイルをコピー
COPY . .

# 実行コマンドの定義
# メインの実行ファイルを index.js に変更
CMD ["node", "index.js"]