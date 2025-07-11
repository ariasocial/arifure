document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guildApplicationForm');
    const messageBox = document.getElementById('messageBox');
    const submitButtonText = document.getElementById('submitButtonText');
    const loadingSpinner = document.getElementById('loadingSpinner');

    // ここにデプロイしたGoogle Apps ScriptのウェブアプリURLを設定してください。
    // 重要: これはDiscordのウェブフックURLではありません！
    const GAS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzAPMOG0F0RvjSmniJ3F8Fvf2VubyfoXh1b2FtAb1NFCmxNKB_UXN8GpXbZoMI3oBPo/exec'; // <-- 提供されたGASウェブアプリのURLを貼り付けました

    // すべての必須入力フィールドを取得
    const requiredInputs = form.querySelectorAll('input[required]');

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // フォームのデフォルト送信を防止

        // ローディング表示とボタンの無効化
        submitButtonText.textContent = '送信中...';
        loadingSpinner.classList.remove('hidden');
        form.querySelector('button[type="submit"]').disabled = true;
        messageBox.classList.add('hidden'); // 以前のメッセージを非表示にする

        let hasEmptyFields = false;
        requiredInputs.forEach(input => {
            if (input.value.trim() === '') {
                input.classList.add('error'); // ここで空のフィールドに 'error' クラスを追加
                hasEmptyFields = true;
            } else {
                input.classList.remove('error'); // 空でなければ 'error' クラスを削除
            }
        });

        if (hasEmptyFields) {
            showMessage('すべてのフィールドを入力してください。', 'error');
            resetFormState();
            return; // 空のフィールドがある場合は送信を停止
        }

        const discordUsername = document.getElementById('discordUsername').value;
        const gameUsername = document.getElementById('gameUsername').value;
        const serverNumber = document.getElementById('serverNumber').value;
        const guildName = document.getElementById('guildName').value;
        const confirmationImage = document.getElementById('confirmationImage').value;

        // GASに送信するペイロードを構築 (Discordウェブフックのembeds形式)
        const payload = {
            embeds: [
                {
                    title: "ギルド参加申請",
                    description: "新しいギルド参加申請が届きました。",
                    color: 5814783, // Discordのデフォルトカラー (青紫色)
                    fields: [
                        {
                            name: "Discordユーザー名",
                            value: discordUsername,
                            inline: true
                        },
                        {
                            name: "ゲーム内ユーザー名",
                            value: gameUsername,
                            inline: true
                        },
                        {
                            name: "サーバー番号",
                            value: serverNumber,
                            inline: true
                        },
                        {
                            name: "ギルド名",
                            value: guildName,
                            inline: true
                        }
                    ],
                    image: {
                        url: confirmationImage // 確認画像のURL
                    },
                    timestamp: new Date().toISOString(), // 現在の時刻
                    footer: {
                        text: "ギルド申請システム"
                    }
                }
            ]
        };

        try {
            // GASウェブアプリにリクエストを送信
            const response = await fetch(GAS_WEB_APP_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json(); // GASからのJSONレスポンスを解析

            if (result.success) {
                showMessage('申請が正常に送信されました！', 'success');
                form.reset(); // フォームをリセット
            } else {
                console.error('GASからのエラー:', result.message);
                showMessage(`申請の送信に失敗しました。エラー: ${result.message}`, 'error');
            }
        } catch (error) {
            console.error('ネットワークまたはGASへのリクエストエラー:', error);
            showMessage('ネットワークエラーが発生しました。インターネット接続を確認してください。', 'error');
        } finally {
            resetFormState();
        }
    });

    // メッセージを表示するヘルパー関数
    function showMessage(message, type) {
        messageBox.textContent = message;
        messageBox.className = `message-box ${type}`;
        messageBox.classList.remove('hidden');
    }

    // フォームの状態をリセットするヘルパー関数
    function resetFormState() {
        submitButtonText.textContent = '申請を送信';
        loadingSpinner.classList.add('hidden');
        form.querySelector('button[type="submit"]').disabled = false;
    }
});
