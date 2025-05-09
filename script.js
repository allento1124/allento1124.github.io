const questions = [
    {
        year: 113,
        category: "普考",
        subject: "行政學",
        questionNumber: 1,
        question: "政府部門為了避免決策或資源分配時過度偏袒特定的族群或團體，應從人口或地域等多元面向來考慮行政機關的人力結構，以求充分反映各個階層的利益或意見。下列那一個概念與此一主張最為相近？",
        options: ["審議式民主", "代表性官僚", "代議式民主", "行政中立化"],
        answer: "代表性官僚"
    },
    {
        year: 113,
        category: "普考",
        subject: "行政學",
        questionNumber: 2,
        question: "針對公共行政中所追求的效率，下列何者錯誤？",
        options: ["效率是公共行政領域中最早被強調的價值", "效率指的是產出與投入的比例", "效率指的是投入資源所產生的影響", "政府對效率的注重，最早是建立在科學管理的基礎上"],
        answer: "效率指的是投入資源所產生的影響"
    },
    {
        year: 113,
        category: "普考",
        subject: "行政學",
        questionNumber: 3,
        question: "有關黑堡宣言之敘述，下列何者正確？",
        options: ["認為公共利益的意涵有明確的定義", "公共行政應多師法企業，採用私部門的管理方式以提升效率", "行政人員應可成為自我意識的公共利益受託者", "司法與立法有所衝突時，公共行政將受制於前述兩者而應妥協"],
        answer: "行政人員應可成為自我意識的公共利益受託者"
    },
    {
        year: 113,
        category: "普考",
        subject: "行政學",
        questionNumber: 4,
        question: "下列何者不是分贓制可能產生的缺點？",
        options: ["政治回應性降低", "任用私人情形增加", "貪污可能性提高", "人員更迭頻繁"],
        answer: "政治回應性降低"
    },
    {
        year: 113,
        category: "普考",
        subject: "行政學",
        questionNumber: 5,
        question: "有關當代公共治理應該採取之原則，下列敘述何者錯誤？",
        options: ["重視資訊科技在公共治理中的角色", "組織層級節制體系應予揚棄", "非政府組織扮演服務提供與價值倡議等多元角色", "主張對於行政人員進行人力資本的投資"],
        answer: "組織層級節制體系應予揚棄"
    },
    {
        year: 113,
        category: "普考",
        subject: "行政學",
        questionNumber: 6,
        question: "「霍桑實驗」的結果發現那一個因素是影響工人生產量的重要因素？",
        options: ["工作環境的改善", "薪資待遇的提高", "人格尊嚴的重視", "專業分工的落實"],
        answer: "人格尊嚴的重視"
    },
    {
        year: 113,
        category: "普考",
        subject: "行政學",
        questionNumber: 7,
        question: "關於新公共管理的敘述，下列何者錯誤？",
        options: ["主張增加預算執行的彈性", "吸納企業管理與新古典經濟學的概念", "強調市場導向、管理主義", "期望建立公民治理"],
        answer: "期望建立公民治理"
    },
    {
        year: 113,
        category: "普考",
        subject: "行政學",
        questionNumber: 8,
        question: "甲收到業務相關廠商餽贈之高級禮盒，下列何者並非符合公務員廉政倫理規範之作法？",
        options: ["予以拒絕或退還廠商", "簽報長官", "知會政風機構", "直接轉贈給慈善機構"],
        answer: "直接轉贈給慈善機構"
    },
    {
        year: 113,
        category: "普考",
        subject: "行政學",
        questionNumber: 9,
        question: "有關行政機關外部用以確保行政責任的途徑，下列何者錯誤？",
        options: ["議會質詢", "上級機關對下級機關之監督", "法院判決", "公民參與"],
        answer: "上級機關對下級機關之監督"
    },
    {
        year: 113,
        category: "普考",
        subject: "行政學",
        questionNumber: 10,
        question: "下列何者同時有公務員服務法及公務員懲戒法的適用？",
        options: ["立法委員、現役軍士官", "立法委員、未兼行政職之公立大學教授", "聘用人員、現役軍士官", "聘用人員、未兼行政職之公立大學教授"],
        answer: "聘用人員、現役軍士官"
    },
    {
        year: 113,
        category: "普考",
        subject: "行政學",
        questionNumber: 11,
        question: "有關行政倫理之敘述，下列何者錯誤？",
        options: ["規範公務員的私利欲求", "符合行政倫理的行為通常也較具合理性", "針對職務外行為規範", "與社會倫理相關"],
        answer: "針對職務外行為規範"
    },
    {
        year: 113,
        category: "普考",
        subject: "行政學",
        questionNumber: 12,
        question: "甲公務員發現所任職之機關圖利特定廠商，在進行弊端揭發時應考量之因素，下列何者錯誤？",
        options: ["該件弊端是否屬實", "組織內部是否有其他管道可反映", "遭受組織報復之可能性", "揭發該弊端是否可以帶來個人利益"],
        answer: "揭發該弊端是否可以帶來個人利益"
    },
    {
        year: 113,
        category: "普考",
        subject: "行政學",
        questionNumber: 13,
        question: "有關行政機關首長制與委員制之敘述，下列何者正確？",
        options: ["我國行政機關並未採用委員制", "相較於委員制，首長制決策速度通常較為冗長", "首長制因為較符合民主原則，故比委員制更優", "委員制因由多人共同討論及決策參與，故責任歸屬較不明確"],
        answer: "委員制因由多人共同討論及決策參與，故責任歸屬較不明確"
    },
    {
        year: 113,
        category: "普考",
        subject: "行政學",
        questionNumber: 14,
        question: "有關控制幅度之敘述，下列何者正確？",
        options: ["事務愈複雜，控制幅度應愈大", "部屬能力愈佳，控制幅度應愈大", "監督責任愈重大，控制幅度應愈大", "管理所花費的時間愈多，控制幅度應愈大"],
        answer: "部屬能力愈佳，控制幅度應愈大"
    },
    {
    
        year: 113,
        category: "普考",
        subject: "行政學",
        question: "「某行政首長試圖增加該機關的編制員額以便擁有更大的權力、甚至彰顯其官威，但實際上並沒有足夠的業務可供執行」，此最近似於何種組織病象？",
        options: ["邁爾斯定律（Miles’ Law）", "墨菲定律（Murphy’s Law）", "寡頭鐵律（Iron Law of Oligarchy）", "白京生定律（Parkinson’s Law）"],
        answer: "白京生定律（Parkinson’s Law）"
         
}

];

let currentQuestionIndex = 0;
let selectedOption = null;
let score = 0;
let incorrectCount = 0;

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const question = questions[currentQuestionIndex];
    const optionLabels = ['A', 'B', 'C', 'D'];
    questionContainer.innerHTML = `
        <h2>題目 ${question.questionNumber}</h2>
        <p>${question.question}</p>
        <p>年份: ${question.year} | 考試類別: ${question.category}</p>
        <div class="option-container">
            ${question.options.map((option, index) => `<button class="option" data-index="${index}">${optionLabels[index]}. ${option}</button>`).join('')}
        </div>
    `;

    document.querySelectorAll('.option').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.option').forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            selectedOption = this.getAttribute('data-index');
        });
    });
}

document.getElementById('start-quiz').addEventListener('click', function() {
    document.getElementById('start-quiz').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    document.querySelector('.button-container').style.display = 'flex';
    showQuestion();
});

document.getElementById('confirm-answer').addEventListener('click', function() {
    if (selectedOption !== null) {
        const question = questions[currentQuestionIndex];
        const selectedAnswer = question.options[selectedOption];
        if (selectedAnswer === question.answer) {
            alert('正確答案！');
            score++;
        } else {
            alert('錯誤答案。');
            incorrectCount++;
        }
        // 自動跳到下一題
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        selectedOption = null;
        showQuestion();
    } else {
        alert('請選擇一個選項。');
    }
});

document.getElementById('next-question').addEventListener('click', function() {
    // 跳題功能
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    selectedOption = null;
    showQuestion();
});

document.getElementById('end-quiz').addEventListener('click', function() {
    const totalQuestions = questions.length;
    const scorePercentage = (score / totalQuestions) * 100;
    alert(`測驗結束！\n總分：${scorePercentage.toFixed(2)}%\n錯誤題數：${incorrectCount}`);
    document.getElementById('start-quiz').style.display = 'block';
    document.getElementById('question-container').style.display = 'none';
    document.querySelector('.button-container').style.display = 'none';
    currentQuestionIndex = 0;
    selectedOption = null;
    score = 0;
    incorrectCount = 0;
});

