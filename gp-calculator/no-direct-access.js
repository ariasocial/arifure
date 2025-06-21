if (window.top === window.self) {
    // 例1: 直接アクセスされた場合、専用のエラーページにリダイレクト
    // ここにリダイレクトしたいURLを記述してください
    window.location.href = "https://ariasocial.github.io/arifure/gp-calculator/no-direct-access.html";
    // 例2: コンテンツを完全に非表示にする（リダイレクトしない場合）
    // document.documentElement.style.display = 'none';
}
