const e = {
    meta: {
        ctw: "CTW株式会社",
        description: "スマホ・PCから会員登録不要・ダウンロードなしで今すぐできる無料のゲームサービス。ここでしか遊べない高クオリティの人気アニメを題材としたブラウザゲーム・オンラインゲームが勢揃い"
    },
    actions: {
        copy: {
            title: "コピー",
            success: "クリップボードにコピーしました"
        },
        yes: "はい",
        no: "いいえ",
        close: "閉じる",
        reload: "リロード",
        cancel: "キャンセル",
        add_to_desktop: {
            trigger_title: "{{app}}をホームに追加！",
            trigger_desc: "{{app}}をホーム画面に追加すると、ワンタップでゲームを開けます。",
            trigger_button: "追加",
            panel_title: "ホーム画面に追加",
            panel_go_right_now: "こちらから",
            panel_add: "追加",
            pwa_unsupported: "このブラウザはホーム画面に追加できません。"
        },
        share: "シェア",
        pre_register: {
            title: "事前登録",
            done: "予約済",
            success: "事前登録完了",
            failed: "事前登録失敗",
            cancel_success: "事前登録キャンセル完了",
            cancel_failed: "事前登録キャンセル失敗"
        }
    },
    refund_process_bar: {
        title: "__time__以内にアイテムを選択して、「全額返金」で支払い",
        button_title: "ゲーム内のアイテムを選択",
        coupon_payment_1: "クレジットカード",
        coupon_payment_2: "限定"
    },
    partial_refund_process_bar: {
        title: "__time__以内にアイテムを選択して、「__N__%返金」で支払い",
        coupon_text_1: "参加対象：10分以内に特定の支払い方法で決済した金額の__N__％が返金されます（一回のみ）",
        coupon_text_2: "返金時間：G123より24時間以内に決済会社へ返金申請",
        coupon_text_3: "主催者：G123",
        coupon_payment_1: "クレジットカード",
        coupon_payment_2: "限定"
    },
    tips: {
        guest: "ゲスト",
        unread: "未読",
        caution: "ご注意",
        offline: "インターネットに接続できません。 ネットワークを確認するか、しばらくたってからお試しください。"
    },
    recommends: {
        title: "ゲーム",
        game_one: "ゲーム",
        game_other: "ゲーム",
        upcoming_games: "事前登録中",
        hot_games: "おすすめゲーム"
    },
    account: {
        title: "アカウント",
        management: "アカウント管理",
        recovery: {
            title: "アカウント復旧",
            title_short: "復旧",
            description: "お支払いしたことがある方はアカウント復旧できます。",
            tip_title: "アカウントを復旧"
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
            already_success: "{{snsName}}連携成功",
            unlink_confirm: "{{provider}} との連携を解除してもよろしいですか？",
            unlink_success: "連携解除成功",
            unlink_failed: "連携解除失敗",
            complete: "SNS連携完了",
            linked_description: "アカウントをより安全にするために、SNS連携を行いましょう。",
            unlinked_description: "SNS連携でG123アカウントを作ることができます。"
        },
        sdk: {
            authentication_success: "認証成功",
            error: "エラーが発生しました。{{code}}",
            canceled: "キャンセルしました",
            login: {
                not_linked: "ログイン失敗、このSNSアカウントは登録されていません。"
            },
            links: {
                account_used: "このSNSアカウントは既に登録されています。",
                create_link_sns_already_linked: "このアカウントはすでにゲームのIM公式アカウントに追加されています。",
                already_link_others: "別のG123アカウントと既に連携されています。"
            }
        },
        blocked: {
            title: "アカウントがロックされました",
            content: "SNS連携をしてロックを解除してください。"
        },
        korean_r18_confirm: {
            title: "年齢認証",
            content: "あなたは18歳以上ですか？",
            description: "※韓国語版のご提供に際しては、同国のゲームレーティング機関の評価を尊重しており、本作におきましては、未成年の方のご利用を固くお断りしております。"
        }
    },
    service: {
        title_short: "お問合せ",
        title: "お問い合わせ"
    },
    settings: {
        title: "設定",
        free_install: {
            title: "無料でインストール"
        }
    },
    terms: {
        title: "利用規約",
        link: "https://g123.jp/terms",
        tokusyo: {
            title: "特定商取引法の表記"
        },
        settlement: {
            title: "資金決済法"
        },
        privacy_policy: {
            title: "個人情報保護"
        },
        copyright: {
            title: "著作物ガイドライン",
            link: "https://g123.jp/copyright"
        }
    },
    profile: {
        title_short: "プロフ",
        title: "プロフィール"
    },
    privacy: {
        cookie_blocked: "システムがブラウザのcookieの使用制限を検知しました。",
        cookie_blocked_label: "ご注意: cookieの使用制限",
        cookie_blocked_desc: "この状態ではゲームデータの保存ができず、更新しても現在のアカウントを取得できない可能性があります。ブラウザの設定でCookieを有効にしてください。"
    },
    im_connect: {
        title: "連携",
        chat_tip: "{{imTypeName}}連携後カスタマーサポート受信可能",
        toast_bind_title: "{{imTypeName}} のアカウントが正常に連携されました",
        toast_desc: "通知設定はカスタマーサポートのチャットウィンドウで切り替えできます",
        toast_button_text: "通知設定",
        popup_title: "アカウントの連携",
        popup_desc: "普段ご利用のSNSアカウントを連携して、いつでもお問い合わせいただけます。"
    }
}
  , t = {
    max_capacity_reached: `定員に達したため終了いたしました。
既に開始している方は、ログインしてください。`,
    not_eligible: "先行プレイキャンペーン対象外のアカウントです。再度ログインしてください。"
}
  , o = {
    welcome_back: "お帰りなさい, {{userId}}",
    account_recovered: "{{userId}}が復旧しました"
}
  , i = {
    check: "新バージョン公開",
    refresh: "今すぐ移動"
}
  , c = {}
  , _ = {}
  , n = {
    callback: {
        login_complete: "ログイン成功",
        link_complete: "連携成功",
        auth_complete: "認証完了",
        login_error: "ログインエラー",
        link_error: "連携エラー",
        auth_error: "認証エラー",
        complete_description: "元のゲーム画面に戻って確認してください",
        error_description: "元のゲーム画面に戻って、再度やり直してください"
    }
}
  , s = {
    go: "G123へ移動",
    description: "PC専用。スマホでは利用できません。"
}
  , l = {
    common: e,
    cbt: t,
    account_recovery: o,
    version_update_tip: i,
    desktop: c,
    mobile: _,
    oauth: n,
    not_supported_tip: s
};
export {o as account_recovery, t as cbt, e as common, l as default, c as desktop, _ as mobile, s as not_supported_tip, n as oauth, i as version_update_tip};
