/**
 * 共通のUI（JSON入力エリア、各種ボタン、結果表示エリア）を生成します。
 * @param {string} containerId - UIを描画するコンテナ要素のID
 * @param {object[]} buttonConfigs - ボタンの設定配列
 * @param {string} buttonConfigs[].text - ボタンのテキスト
 * @param {function} buttonConfigs[].onClick - ボタンのクリックイベント
 * @param {string} [buttonConfigs[].className] - ボタンに適用するクラス名 (例: 'button-secondary')
 * @param {object} [options] - UI生成のオプション
 * @param {boolean} [options.showJsonTitle=true] - 'JSONデータ'のタイトルを表示するかどうか
 */
function createCommonUI(containerId, buttonConfigs, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Element with id "${containerId}" not found.`);
        return;
    }

    let buttonsHTML = '';
    buttonConfigs.forEach((config, index) => {
        const funcName = `__common_ui_btn_click_${containerId}_${index}__`;
        window[funcName] = config.onClick;
        const className = config.className ? ` class="${config.className}"` : '';
        buttonsHTML += `<button onclick="${funcName}()"${className}>${config.text}</button>\n`;
    });

    // オプションに基づいてJSONタイトルの表示を決定
    const showJsonTitle = options.showJsonTitle !== false;
    const jsonTitleHTML = showJsonTitle ? '<h2>JSONデータ</h2>' : '';

    container.innerHTML = `
        ${jsonTitleHTML}
        <textarea id="jsonData" rows="10" cols="50"></textarea>
        <div class="button-group">
            ${buttonsHTML}
        </div>
        <div id="result"></div>
    `;
}

/**
 * ハンバーガーメニューのセットアップを行います。
 */
function setupHamburgerMenu() {
    // ハンバーガーメニューの制御
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const siteHeader = document.querySelector('.site-header');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', (event) => {
            event.stopPropagation(); // bodyのクリックイベントに伝播させない
            const isActive = mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', String(isActive));

            // If closing the main menu, also close any active sub-menu
            // サブメニューは廃止されたため、このロジックは削除されます。
        });

        // メニュー外をクリックしたら閉じる
        document.body.addEventListener('click', (event) => {
            // メニューが開いていて、クリックがメニュー内でもヘッダー内でもない場合
            if (mainNav.classList.contains('active') && !mainNav.contains(event.target) && !siteHeader.contains(event.target)) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

}
/**
 * アコーディオンメニューのセットアップを行います。
 */
function setupAccordionMenu() {
    // この関数は二段階スライドメニューでは不要になりましたが、
    // 他で使っている可能性を考慮して空のまま残しておきます。
}

// DOMの読み込みが完了したら、共通のセットアップを実行
document.addEventListener('DOMContentLoaded', () => {
    setupHamburgerMenu();
    setupAccordionMenu();
});