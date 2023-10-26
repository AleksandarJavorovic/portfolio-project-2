// function to hide quiz and score area at first load
function firstLoad() {

    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('score-area').style.display = 'none';
};

firstLoad();

// function to get the name and go to Quiz section;
function quizStart(event) {

    event.preventDefault();

    let playerName = document.getElementById('player-name');

    document.getElementById('player-name-status').textContent = playerName.value;

    document.getElementById('main-area').style.display = 'none';
    document.getElementById('quiz-area').style.display = '';
};

let regForm = document.getElementById('reg-form');
regForm.addEventListener('submit', quizStart);