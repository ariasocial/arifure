function extractUsers() {
    const jsonInput = document.getElementById('jsonData').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    try {
        const data = JSON.parse(jsonInput);
        if (!data || !data.d || !Array.isArray(data.d)) {
            resultDiv.innerHTML = '<p style="color: red;">無効なJSON形式です。`d`配列が見つかりません。</p>';
            return;
        }

        data.d.forEach(group => {
            if (group.shenfen_idx && group.baominguser) {
                const groupName = group.headinfo.ghname;
                const groupTitle = document.createElement('h2');
                groupTitle.textContent = `${groupName} のユーザー 👥`;
                resultDiv.appendChild(groupTitle);

                const userList = document.createElement('ul');
                userList.className = 'user-list';

                group.shenfen_idx.forEach(sfUser => {
                    const uid = sfUser.uid;
                    if (group.baominguser[uid]) {
                        const userName = group.baominguser[uid].headdata.name;
                        const userItem = document.createElement('li');
                        userItem.className = 'user-item';
                        userItem.innerHTML = `<span class="user-name">${userName}</span><br><span class="user-uid">${uid}</span>`;
                        userList.appendChild(userItem);
                    }
                });
                resultDiv.appendChild(userList);
            }
        });

        if (resultDiv.children.length === 0) {
            resultDiv.innerHTML = '<p>指定された条件に一致するユーザーは見つかりませんでした。</p>';
        }

    } catch (e) {
        resultDiv.innerHTML = '<p style="color: red;">JSONデータの解析に失敗しました。形式が正しいか確認してください。</p>';
    }
}

function clearInput() {
    document.getElementById('jsonData').value = '';
}