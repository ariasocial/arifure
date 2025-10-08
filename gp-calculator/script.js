document.addEventListener('DOMContentLoaded', () => {
    // DOM要素の取得
    const hammerInputs = [
        document.getElementById('initialWoodenHammer'),
        document.getElementById('initialIronHammer'),
        document.getElementById('initialCopperHammer'),
        document.getElementById('initialSilverHammer'),
        document.getElementById('initialGoldHammer')
    ];
    const addIronHammerToggle = document.getElementById('addIronHammerToggle');
    const finalTotalPointsSpan = document.getElementById('finalTotalPoints');
    const gainedHammerSpans = [
        document.getElementById('gainedWooden'),
        document.getElementById('gainedIron'),
        document.getElementById('gainedCopper'),
        document.getElementById('gainedSilver'),
        document.getElementById('gainedGold')
    ];
    const calculateBtn = document.getElementById('calculateFinalBtn');
    const resetBtn = document.getElementById('resetBtn');

    // リセット処理
    function resetAll() {
        // 入力フィールドを0に
        hammerInputs.forEach(input => {
            input.value = '';
        });

        // 表示を更新するために計算を再実行
        if (typeof performCalculation === 'function') {
            performCalculation();
        }
    }

    // イベントリスナーの設定
    // 計算ボタン（gp-calculator.js内の関数を呼び出す）
    calculateBtn.addEventListener('click', performCalculation);

    // リセットボタン
    resetBtn.addEventListener('click', resetAll);
});