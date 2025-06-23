document.addEventListener('DOMContentLoaded', () => {
    const characterListElement = document.getElementById('character-list');
    const overlayElement = document.getElementById('overlay');
    const overlayContentElement = document.getElementById('overlay-content');
    const closeButton = document.getElementById('close-button');

    // 1. キャラクターリストを読み込んで表示
    fetch('data/characters.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(characters => {
            characters.forEach(character => {
                const card = document.createElement('div');
                card.className = 'character-card';
                card.dataset.id = character.id; // data-id属性にIDを設定
                card.innerHTML = `
                    <img src="${character.thumbnail}" alt="${character.name}">
                    <p>${character.name}</p>
                `;
                characterListElement.appendChild(card);
            });
        })
        .catch(error => {
            console.error('キャラクターリストの読み込みに失敗しました:', error);
            characterListElement.innerHTML = '<p>キャラクターリストを読み込めませんでした。</p>';
        });

    // 2. キャラクターカードのクリックイベント（イベントデリゲーション）
    characterListElement.addEventListener('click', (event) => {
        const card = event.target.closest('.character-card');
        if (card) {
            const characterId = card.dataset.id;
            showCharacterDetails(characterId);
        }
    });

    // 3. 詳細情報を読み込んでオーバーレイ表示
    async function showCharacterDetails(id) {
        overlayContentElement.innerHTML = '<p>読み込み中...</p>';
        overlayElement.classList.remove('hidden');

        try {
            const response = await fetch(`data/${id}.json`);
            if (!response.ok) {
                throw new Error('キャラクターデータの読み込みに失敗しました。');
            }
            const data = await response.json();

            // 詳細情報のHTMLを生成
            overlayContentElement.innerHTML = `
                <div class="detail-info">
                    <img src="${data.image}" alt="${data.name}" class="detail-image">
                    <h2>${data.name}</h2>
                    ${data.rarity ? `<p><strong>レアリティ:</strong> ${data.rarity}</p>` : ''}
                    ${data.attribute ? `<p><strong>キャラ属性:</strong> ${data.attribute}</p>` : ''}
                    ${data.type ? `<p><strong>キャラタイプ:</strong> ${data.type}</p>` : ''}
                    ${data.description ? `<p>${data.description}</p>` : ''}
                    
                    <h3>スキル情報</h3>
                    ${data.mainSkill ? `
                        <h4>メインスキル</h4>
                        <p><strong>【基礎】</strong> ${data.mainSkill.base}</p>
                        <p><strong>【覚醒】</strong> ${data.mainSkill.awakened}</p>
                    ` : ''}
                    ${data.passiveSkill1 ? `
                        <h4>パッシブスキルⅠ</h4>
                        <p><strong>【基礎】</strong> ${data.passiveSkill1.base}</p>
                        <p><strong>【覚醒】</strong> ${data.passiveSkill1.awakened}</p>
                    ` : ''}
                    ${data.passiveSkill2 ? `
                        <h4>パッシブスキルⅡ</h4>
                        <p><strong>【基礎】</strong> ${data.passiveSkill2.base}</p>
                        <p><strong>【覚醒】</strong> ${data.passiveSkill2.awakened}</p>
                    ` : ''}
                    ${data.passiveSkill3 ? `
                        <h4>パッシブスキルⅢ</h4>
                        <p><strong>【基礎】</strong> ${data.passiveSkill3.base}</p>
                        <p><strong>【覚醒】</strong> ${data.passiveSkill3.awakened}</p>
                    ` : ''}
                </div>
            `;
        } catch (error) {
            console.error(error);
            overlayContentElement.innerHTML = `<p>${error.message}</p>`;
        }
    }

    // 4. オーバーレイを閉じる
    function closeOverlay() {
        overlayElement.classList.add('hidden');
        // 中身を空にして、次回表示時に前の情報が残らないようにする
        overlayContentElement.innerHTML = '';
    }

    closeButton.addEventListener('click', closeOverlay);
    // オーバーレイの背景クリックでも閉じる
    overlayElement.addEventListener('click', (event) => {
        if (event.target === overlayElement) {
            closeOverlay();
        }
    });
    // Escキーで閉じる
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !overlayElement.classList.contains('hidden')) {
            closeOverlay();
        }
    });
});