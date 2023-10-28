// function to hide quiz and score area at first load
function firstLoad() {

    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('score-area').style.display = 'none';
};

firstLoad();

// function to get the name and go to Quiz section
function quizStart(event) {

    event.preventDefault();

    let playerName = document.getElementById('player-name');

    document.getElementById('player-name-status').textContent = playerName.value;

    document.getElementById('main-area').style.display = 'none';
    document.getElementById('quiz-area').style.display = '';
};

let regForm = document.getElementById('reg-form');
regForm.addEventListener('submit', quizStart);

// Quiz Questions Array
const quizQuestions = [
    {
        question: 'What does HTML stand for?',
        answers: [ 
            { text: 'Hyper Text Markup Language', correct: true},
            { text: 'High Technology Modern Language', correct: false },
            { text: 'Hyper Transfer Markup Language', correct: false },
            { text: 'Home Tool Markup Language', correct: false },
        ]
    },
    {
        question: 'Which HTML tag is used to create a hyperlink?',
        answers: [
            { text: '<a>', correct: true },
            { text: '<h1>', correct: false },
            { text: '<p>', correct: false },
            { text: '<hlink>', correct: false },
        ] 
    },
    {
        question: 'In CSS, which property is used to change the text color of an element?',
        answers: [
            { text: 'text-color', correct: false },
            { text: 'color', correct: true },
            { text: 'font-color', correct: false },
            { text: 'text-style', correct: false },
        ] 
    },
    {
        question: 'What does CSS stand for?',
        answers: [
            { text: 'Colorful Style Sheet', correct: false },
            { text: 'Creative Style Sheet', correct: false},
            { text: 'Computer Style Sheet', correct: false },
            { text: 'Cascading Style Sheet', correct: true },
        ]  
    },
    {
        question: 'Which of the following is NOT a JavaScript data type?',
        answers: [
            { text: 'Number', correct: false },
            { text: 'String', correct: false },
            { text: 'Boolean', correct: false },
            { text: 'Character', correct: true },
        ]  
    },
    {
        question: 'Which CSS selector targets all <a> elements with a class of "button"?',
        answers: [
            { text: '.button > a', correct: true },
            { text: 'a.button', correct: false },
            { text: '#button', correct: false },
            { text: '.button a', correct: false },
        ]
    },
    {
        question: 'In the CSS box model, which property defines the space between an element\'s content and its border?',
        answers: [
            { text: 'padding', correct: true },
            { text: 'margin', correct: false },
            { text: 'border-width', correct: false },
            { text: 'border-spacing', correct: false },
        ]
    },
    {
        question: 'What is the purpose of the "if" statement in JavaScript?',
        answers: [
            { text: 'To declare a variable', correct: false },
            { text: 'To create a loop', correct: false },
            { text: 'To perform conditional execution', correct: true },
            { text: 'To define a function', correct: false },
        ]
    },
    {
        question: 'Which keyword is used to declare a variable in JavaScript?',
        answers: [
            { text: 'new', correct: false },
            { text: 'declare_variable', correct: false },
            { text: 'var', correct: true },
            { text: 'print.var', correct: false },
        ] 
    },
    {
        question: 'What is the purpose of the HTML <meta> tag?',
        answers: [
            { text: 'To create links to external websites', correct: false },
            { text: 'To define a new metaphysical paragraph', correct: false },
            { text: 'To specify metadata about the document', correct: true },
            { text: 'To insert images into the webpage', correct: false },
        ]
    },
    {
        question: 'Which CSS property is used to control the layout of elements in a grid or flexbox container?',
        answers: [
            { text: 'display', correct: true },
            { text: 'position', correct: false },
            { text: 'layout', correct: false },
            { text: 'align', correct: false },
        ]
    },
    {
        question: 'What does the "getElementById" method do in JavaScript?',
        answers: [
            { text: 'Retrieves a list of elements with the given class name', correct: false },
            { text: 'Gets an element by it\'s unique ID', correct: true },
            { text: 'Creates a new HTML element', correct: false },
            { text: 'Adds an event listener to an element', correct: false },
        ]
    },
    {
        question: 'Which HTML tag is used to create a line break?',
        answers: [
            { text: '<lb>', correct: false },
            { text: '<br>', correct: true },
            { text: '<line>', correct: false },
            { text: '<newline>', correct: false },
        ]
    },
    {
        question: 'What is the purpose of the "for" loop in JavaScript?',
        answers: [
            { text: 'To create a function', correct: false },
            { text: 'To declare a variable', correct: false },
            { text: 'To perform repetitive tasks', correct: true },
            { text: 'To set event listeners', correct: false },
        ]
    },
    {
        question: 'What is the result of "5" + 5 in JavaScript?',
        answers: [
            { text: '10', correct: false },
            { text: '"55"', correct: true },
            { text: '55', correct: false },
            { text: 'Error', correct: false },
        ]
    },
]

// Targeting question, answers and next question elements of HTML
const quizQuestionField = document.getElementById('quiz-question');
const answerButtons = document.getElementById('answers-container');
const nextQuestionButton = document.getElementById('next-question');

// Defining variables for Question index and correct and incorrect scores
let correctAnswers = 0;
let wrongAnswers = 0;
let quizQuestionIndex = 0;

// Function to start the quiz when pressed start button
function startQuestioning() {
    quizQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    showQuizQuestions();
}

function showQuizQuestions() {
    //Function to hide additional buttons and next button
    removeButtons();

    // Displaying the question in the question field
    let currentQuestion = quizQuestions[quizQuestionIndex];
    quizQuestionField.innerHTML = currentQuestion.question;

    // Displaying answers in the answer buttons
    currentQuestion.answers.forEach(answer => {
        const newButton = document.createElement('button');
        newButton.innerHTML = answer.text;
        newButton.classList.add('btn', 'btn-color');
        answerButtons.appendChild(newButton);
    });
}

function removeButtons() {
    nextQuestionButton.style.display = 'none';

    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuestioning();
