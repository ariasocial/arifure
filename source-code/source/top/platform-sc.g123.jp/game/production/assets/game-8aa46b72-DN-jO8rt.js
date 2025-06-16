const e = {
    account: {
        title: "アカウント",
        management: "アカウント管理",
        recovery: {
            title: "アカウント復旧",
            title_short: "復旧",
            description: "お支払いしたことがある方はアカウント復旧できます。"
        },
        login: {
            title_short: "アカウント切替",
            title: "アカウント切り替え",
            success: "ログイン成功",
            complete: "ログイン完了",
            success_and_return: "ログイン完了、お帰りなさい ",
            linked_description: "既にSNS連携したG123アカウントで遊びたい方は下記からアカウントを切り替えてください。",
            unlinked_description: "既にG123アカウントをお持ちの方は下記からログインできます。"
        },
        links: {
            title_short: "SNS連携",
            title: "SNS連携",
            link: "連携",
            unlink: "連携解除",
            linked: "連携済み",
            success: "連携成功",
            unlink_confirm: "{{provider}} との連携を解除してもよろしいですか？",
            unlink_success: "連携解除成功",
            unlink_failed: "連携解除失敗",
            complete: "SNS連携完了",
            linked_description: "アカウントをより安全にするために、SNS連携を行いましょう。",
            unlinked_description: "SNS連携でG123アカウントを作ることができます。"
        },
        sdk: {
            passkey: {
                not_supported: "このブラウザではPasskeyがサポートされていません。",
                not_platform_authenticator: "このデバイスでは生体認証またはセキュリティキーが利用できません。",
                user_rejected_or_timeout: "認証がキャンセルされたかタイムアウトしました。",
                invalid_state: "認証器の状態が無効なため認証に失敗しました。",
                operation_not_supported: "お使いのデバイスではこの認証操作がサポートされていません。",
                security_error: "セキュリティ制限により認証に失敗しました。ドメイン設定をご確認ください。",
                operation_aborted: "認証が中断されました。",
                constraint_error: "認証情報のパラメータが無効なため認証に失敗しました。",
                data_error: "認証情報のデータ形式が無効なため認証に失敗しました。",
                unknown_error: "未知の認証エラーが発生しました。",
                network_error: "ネットワークの問題により認証に失敗しました。接続をご確認ください。"
            },
            authentication_success: "認証成功",
            error: "エラーが発生しました。{{code}}",
            canceled: "キャンセルしました",
            login: {
                not_linked: "ログイン失敗、このSNSアカウントは登録されていません。",
                bad_credential: "ログインに失敗しました。(BAD_CREDENTIAL)"
            },
            links: {
                account_used: "このSNSアカウントは既に登録されています。",
                create_link_sns_already_linked: "{{providerName}}連携成功",
                already_link_others: "この{{providerName}}アカウントは、既に別のG123IDで利用されています",
                bad_credential: "連携に失敗しました。(BAD_CREDENTIAL)"
            },
            imlink: {
                validate_token_not_found: "このリンクは無効です。新しい連携リンクを受け取るには、公式アカウントに再度メッセージを送信してください。"
            }
        },
        blocked: {
            title: "アカウントがロックされました",
            content: "SNS連携をしてロックを解除してください。"
        }
    }
}
  , t = {
    common: e
};
export {e as common, t as default};
