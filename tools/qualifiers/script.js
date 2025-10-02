function extractUsers() {
    const jsonInput = document.getElementById('jsonData').value;
    const guild1Container = document.getElementById('guild1-container');
    const guild2Container = document.getElementById('guild2-container');
    guild1Container.innerHTML = '';
    guild2Container.innerHTML = '';

    try {
        const data = JSON.parse(jsonInput);
        if (!data || !data.d || !Array.isArray(data.d) || data.d.length === 0) {
            guild1Container.innerHTML = '<p style="color: red;">無効なJSON形式です。`d`配列が見つからないか、空です。</p>';
            return;
        }

        // setDynamicMinWidth(data); // 動的な幅計算を削除

        const roleMap = {
            1: { name: 'リーダー', class: 'role-leader' },
            2: { name: 'エリート', class: 'role-elite' },
            3: { name: 'アーミー', class: 'role-army' }
        };

        // 2つのギルドを処理
        data.d.slice(0, 2).forEach((group, index) => {
            // データを表示するコンテナを可視化
            if (index === 0) guild1Container.style.display = 'block';
            if (index === 1) guild2Container.style.display = 'block';

            const container = (index === 0) ? guild1Container : guild2Container;
            processGuild(group, container, roleMap);
        });

        if (guild1Container.children.length === 0 && guild2Container.children.length === 0) {
            guild1Container.innerHTML = '<p>指定された条件に一致するユーザーは見つかりませんでした。</p>';
        }

    } catch (e) {
        guild1Container.innerHTML = `<p style="color: red;">JSONデータの解析に失敗しました。形式が正しいか確認してください。<br>エラー: ${e.message}</p>`;
    }
}

/* 動的な幅計算の関数を削除
function setDynamicMinWidth(data) {
    let longestUid = '';
    data.d.forEach(group => {
        if (group.shenfen_idx) {
            group.shenfen_idx.forEach(sfUser => {
                if (sfUser.uid.toString().length > longestUid.length) {
                    longestUid = sfUser.uid.toString();
                }
            });
        }
    });

    if (longestUid) {
        // 一時的な要素を作成してテキストの幅を計測
        const tempSpan = document.createElement('span');
        tempSpan.style.fontSize = '0.875rem'; // .user-uid のフォントサイズ
        tempSpan.style.fontFamily = 'sans-serif';
        tempSpan.style.visibility = 'hidden';
        tempSpan.style.position = 'absolute';
        tempSpan.textContent = `UID: ${longestUid}`;
        document.body.appendChild(tempSpan);
        const textWidth = tempSpan.offsetWidth;
        document.body.removeChild(tempSpan);

        // パディングなどを考慮して最小幅を計算 (user-itemのpadding 10px*2 + guild-containerのpadding 15px*2 + α)
        const minWidth = textWidth + 20 + 30 + 40; // 40pxは余裕分

        // 計算した最小幅をコンテナに適用
        const guild1Container = document.getElementById('guild1-container');
        const guild2Container = document.getElementById('guild2-container');
        guild1Container.style.minWidth = `${minWidth}px`;
        guild2Container.style.minWidth = `${minWidth}px`;
    }
}*/

function processGuild(group, container, roleMap) {
    if (!group || !group.headinfo || !group.shenfen_idx || !group.baominguser) {
        container.innerHTML = '<p>ギルドデータが見つかりません。</p>';
        return;
    }

    const groupName = group.headinfo.ghname;
    const serverName = group.headinfo.ext_server_name;
    const groupTitle = document.createElement('h2');

    let displayServerName = '';
    if (serverName) {
        // "S5" のような形式を "s5" のように小文字に変換
        displayServerName = 's' + serverName.replace(/[^0-9]/g, '');
    }
    groupTitle.textContent = serverName ? `${groupName}${displayServerName}` : groupName;
    container.appendChild(groupTitle);

    const userList = document.createElement('ul');
    userList.className = 'user-list';

    // ユーザーを役割ごとにグループ化
    const usersByRole = { 1: [], 2: [], 3: [] };
    group.shenfen_idx.forEach(sfUser => {
        if (usersByRole[sfUser.duty] && group.baominguser[sfUser.uid]) {
            usersByRole[sfUser.duty].push({
                name: group.baominguser[sfUser.uid].headdata.name,
                uid: sfUser.uid
            });
        }
    });

    // 役割の順序を定義
    const roleOrder = [1, 2, 3];

    roleOrder.forEach(duty => {
        const role = roleMap[duty];
        const members = usersByRole[duty];
        const roleHtml = `<span class="user-role ${role.class}">${role.name}</span>`;

        if (members.length > 0) {
            // メンバーがいる場合、リスト表示
            members.forEach(member => {
                const userItem = document.createElement('li');
                userItem.className = 'user-item';
                userItem.innerHTML = `${roleHtml}<span class="user-name">${member.name}</span><br><span class="user-uid">UID: ${member.uid}</span>`;
                userList.appendChild(userItem);
            });
        } else {
            // メンバーがいない場合、「未登録」と表示
            const userItem = document.createElement('li');
            userItem.className = 'user-item unregistered';
            userItem.innerHTML = `${roleHtml}<span class="user-name">未登録</span><br><span class="user-uid">UID: </span>`;
            userList.appendChild(userItem);
        }
    });

    container.appendChild(userList);
}

function clearInput() {
    document.getElementById('jsonData').value = '';
    const resultDiv = document.getElementById('result');
    // 結果表示エリアを初期状態に戻す
    resultDiv.innerHTML = `
        <div id="guild1-container" class="guild-container"></div>
        <div id="guild2-container" class="guild-container"></div>
    `;
}