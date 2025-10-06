#!/bin/bash

# cronサービスをバックグラウンドで開始
cron

# ログをリアルタイムで表示し続ける（これによりコンテナが終了しない）
# 初回起動時にログファイルがないとエラーになるため、作成しておく
touch /var/log/cron.log
tail -f /var/log/cron.log
