const questionsAndAnswers = {
    "UGC Regulations for PhD 2022": "You can download <b>UGC Regulation for PhD 2022</b> here: <a href='https://drive.google.com/file/d/1dkwUREnloIhmSF4b3w1EzLggZxblaYoV/view?usp=drivesdk' target='_blank'>Download PDF</a>",
    "University PhD Ordinance": "You can download <b>University PhD Ordinance</b> here: <a href='https://drive.google.com/file/d/1dtlBuDE8kVogJR3Tc5d1LCCvQlMFA79v/view?usp=drivesdk' target='_blank'>Download PDF</a>",
    "NET Public Notice 2024": "You can download <b>NET Public Notice 2024</b> here: <a href='https://drive.google.com/file/d/1dgJJP79gAh51aBPQLgAGKf3ONrwEPUpW/view?usp=drivesdk' target='_blank'>Download PDF</a>",
    "PhD Programme APS University Rewa": "You can download <b>PhD Programme APS University</b> here: <a href='https://drive.google.com/file/d/1disvbJ7ZXU1GNju6f--TkQWzS4VBapQZ/view?usp=drivesdk' target='_blank'>Download PDF</a>",
    "important dates": "Opening of online application form 28 th of April, 2025, Last date to fill the form 15 th May, 2025 APSUDET 2024 - 25 31. May 2025, DATE OF INTERVIEW 1 ST JUNE 2025"
};

// Get HTML elements
const questionList = document.getElementById('question-list');
const chatBox = document.getElementById('chat-box');

// Display all questions as buttons
function displayQuestions() {
    for (let question in questionsAndAnswers) {
        const questionButton = document.createElement('button');
        questionButton.classList.add('question-btn');
        questionButton.textContent = question;
        questionButton.addEventListener('click', () => displayAnswer(question));
        questionList.appendChild(questionButton);
    }
}

// Display the answer when a button is clicked
function displayAnswer(question) {
    const answer = questionsAndAnswers[question];
    
    const botMessage = document.createElement('div');
    botMessage.classList.add('chat-message', 'bot-message', 'fade-in');
    
    if (answer.includes('<a')) {
        botMessage.innerHTML = answer;
    } else {
        botMessage.textContent = answer;
    }
    
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Initialize at page load
displayQuestions();