let quizzes = []; // クイズデータを格納する配列

// JSONファイルを読み込む関数
async function loadQuizzes() {
    try {
        const response = await fetch('quiz.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        quizzes = await response.json();
        console.log('クイズデータがロードされました:', quizzes);
    } catch (error) {
        console.error('クイズデータのロードに失敗しました:', error);
        const resultsDiv = document.getElementById('searchResults');
        resultsDiv.innerHTML = '<p class="no-results">クイズデータの読み込みに失敗しました。ファイルが正しい場所にあるか確認してください。</p>';
    }
}

// 検索を実行する関数
function searchQuizzes() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase(); // 小文字に変換して検索
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = ''; // 以前の検索結果をクリア

    if (searchTerm.length < 2) { // 2文字以上で検索を開始する（任意）
        resultsDiv.innerHTML = '<p class="no-results">2文字以上入力してください。</p>';
        return;
    }

    const filteredQuizzes = quizzes.filter(quiz => {
        // 問題文と検索ワードが部分一致するかチェック
        return quiz.question.toLowerCase().includes(searchTerm);
    });

    if (filteredQuizzes.length > 0) {
        filteredQuizzes.forEach(quiz => {
            const quizItem = document.createElement('div');
            quizItem.className = 'quiz-item';
            
            const questionP = document.createElement('p');
            questionP.className = 'question';
            questionP.textContent = `Q: ${quiz.question}`;
            
            const answerP = document.createElement('p');
            answerP.className = 'answer';
            // 回答が'y'なら'〇', 'n'なら'✖'と表示
            answerP.textContent = `A: ${quiz.answer === 'y' ? '〇' : '✖'}`;
            
            quizItem.appendChild(questionP);
            quizItem.appendChild(answerP);
            resultsDiv.appendChild(quizItem);
        });
    } else {
        resultsDiv.innerHTML = '<p class="no-results">検索条件に一致するクイズは見つかりませんでした。</p>';
    }
}

// ページロード時にクイズデータを読み込む
loadQuizzes();