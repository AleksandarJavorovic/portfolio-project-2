// function to hide quiz and score area at first load
function firstLoad() {

    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('score-area').style.display = 'none';

    // focusing input field for player name
    document.getElementById('player-name').focus();
};

firstLoad();

const playerNameStatus = document.getElementById('player-name-status');

// function to get the name and go to Quiz section
function quizStart(event) {

    event.preventDefault();

    const playerName = document.getElementById('player-name');

    playerNameStatus.textContent = playerName.value;

    document.getElementById('main-area').style.display = 'none';
    document.getElementById('quiz-area').style.display = '';

    startTimer();
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
            { text: '\< a >', correct: true },
            { text: '\< h1 \>', correct: false },
            { text: '\< s \>', correct: false },
            { text: '\< hlink \>', correct: false },
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
        question: 'Which CSS selector targets all \< a \> elements with a class of "button"?',
        answers: [
            { text: '.button \> a', correct: true },
            { text: 'a.button', correct: false },
            { text: '#button', correct: false },
            { text: '.buttona', correct: false },
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
        question: 'What is the purpose of the HTML \< meta \> tag?',
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
        question: 'What does the getElementById method do in JavaScript?',
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
            { text: '\< lb \>', correct: false },
            { text: '\< br \>', correct: true },
            { text: '\< line \>', correct: false },
            { text: '\< newline \>', correct: false },
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
const newPlayerButton = document.getElementById('new-player');
const playAgainButton = document.getElementById('play-again');
const questionCheckArray = [];

// Defining variables for Question index and correct and incorrect scores
let correctAnswers = document.getElementById('score');
let wrongAnswers = document.getElementById('wrong-score');
let quizQuestionIndex = 0;

// Function to start the quiz when pressed start button
function startQuestioning() {
    quizQuestionIndex = 0;
    correctAnswers.innerText = 0;
    wrongAnswers.innerText = 0;
    removeButtons();
    getRandomQuestion();
}

// Function to get random questions
function getRandomQuestion() {
    const currentQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
    if (!questionCheckArray.includes(currentQuestion)) {
        questionCheckArray.push(currentQuestion);
        quizQuestionField.innerHTML = currentQuestion.question;

        // Displaying answers in the answer buttons
        currentQuestion.answers.forEach(answer => {
            const newButton = document.createElement('button');
            newButton.innerHTML = answer.text;
            newButton.classList.add('btn', 'btn-color');
            answerButtons.appendChild(newButton);
            // Adding event listeners for the answer buttons
            if (answer.correct) {
                newButton.dataset.correct = answer.correct;
            }
            newButton.addEventListener('click', chosenAnswer);
        });
    } else {
        getRandomQuestion();
    }
}

// Function to add color to the Chosen Answer and wrong ones
function chosenAnswer(event) {
    const chosenButton = event.target;
    const answerCorrect = chosenButton.dataset.correct === 'true';
    if (answerCorrect) {
        chosenButton.classList.add('correct');
        // Inscreasing correct answers
        correctAnswers.innerText++;
        stopTimer();
    } else {
        chosenButton.classList.add('wrong');
        // Increasing wrong answers
        wrongAnswers.innerText++;
        stopTimer();
    }

    buttonColors();
}

// Coloring correct answer green and wrong ones pink simultaneously
function buttonColors() {
    Array.from(answerButtons.children).forEach(newButton => {
        if (newButton.dataset.correct === 'true') {
            newButton.classList.add('correct');
        } else {
            newButton.classList.add('wrong');
        }
        // Disabling buttons after player chooses the answer
        newButton.setAttribute('disabled', true);
        // Displaying Next Question Button after choosing the answer
        if (quizQuestionIndex == 4) {
            nextQuestionButton.innerHTML = 'Show Score';
        }
        nextQuestionButton.style.display = '';
    });
}

// Adding event listener to the Next Question Button
nextQuestionButton.addEventListener('click', ()=> {
    if(quizQuestionIndex < 4) {
        nextQuesiton();
        quizQuestionIndex++;
    } else {
        // Displaying of the Score Area with player name, score and play again button
        document.getElementById('main-area').style.display = 'none';
        document.getElementById('quiz-area').style.display = 'none';
        document.getElementById('score-area').style.display = '';
        
        // Personalised messages according to the achievement
        if (parseInt(correctAnswers.innerText) > 3) {
            document.getElementById('score-area-p').innerText = `Well done, you have nailed it! ${playerNameStatus.textContent} you have scored ${correctAnswers.textContent} out of 5!`;
            document.getElementById('smiley').style.color = '#7fffc3';
            document.getElementById('smiley').style.display = '';
            document.getElementById('meh').style.display = 'none';
            document.getElementById('frown').style.display = 'none';
        } else if (parseInt(correctAnswers.innerText) > 1) {
            document.getElementById('score-area-p').innerText = `Not bad, but you can do it better! ${playerNameStatus.textContent} you have scored ${correctAnswers.textContent} out of 5!`;
            document.getElementById('smiley').style.display = 'none';
            document.getElementById('meh').style.color = '#e34c26';
            document.getElementById('meh').style.display = '';
            document.getElementById('frown').style.display = 'none';
        } else {
            document.getElementById('score-area-p').innerText = `Looks like you need to spend more time learning! ${playerNameStatus.textContent} you have scored ${correctAnswers.textContent} out of 5!`;
            document.getElementById('smiley').style.display = 'none';
            document.getElementById('meh').style.display = 'none';
            document.getElementById('frown').style.color = '#f1266ae5';
            document.getElementById('frown').style.display = '';
        }
    }
})

nextQuestionButton.addEventListener('click', startTimer);

// Function to get next question on Next Question button
function nextQuesiton() {
    if(quizQuestionIndex < 4) {
        removeButtons();
        getRandomQuestion();
    }
}

// Adding event listener for Play Again Button
playAgainButton.addEventListener('click', ()=> {

    questionCheckArray.length = 0;

    document.getElementById('quiz-area').style.display = '';
    document.getElementById('score-area').style.display = 'none';
    
    stopTimer();
    startTimer();

    startQuestioning();
    // Change name of the button back to Next Question
    nextQuestionButton.innerHTML = 'Next Question';
});

// Adding event listener for New Player button
newPlayerButton.addEventListener('click', ()=> {
    stopTimer();

    questionCheckArray.length = 0;

    document.getElementById('score-area').style.display = 'none';
    document.getElementById('main-area').style.display = '';

    // Clear previous player Name
    document.getElementById('player-name').value = '';

    // focusing input field for player name
    document.getElementById('player-name').focus();

    startQuestioning();
    // Change name of the button back to Next Question
    nextQuestionButton.innerHTML = 'Next Question';
});

//Function to hide additional buttons and next button
function removeButtons() {

    nextQuestionButton.style.display = 'none';

    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Timer Function
var timer = null;

function startTimer() {
    var startTime = 15;
    timer = setInterval(function() {
        document.getElementById('count-down').innerHTML = startTime;
        document.getElementById("count-down").style.color = "#fff";
        startTime--;
        if (startTime <= 4) {
            document.getElementById("count-down").style.color = "#f1266ae5";
        }

        if(startTime < 0) {
            clearInterval(timer);
            wrongAnswers.innerText++;
            buttonColors();
        }
    }, 1000);

}

function stopTimer() {
    clearInterval(timer);
    document.getElementById('count-down').innerHTML = '';
}

startQuestioning();
