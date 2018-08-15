window.addEventListener('load', init);

//Global Variables

//Levels of play
const levels = {
    easy: 5,
    medium: 3,
    hard: 1
}

//Change level
const currentLevel = levels.easy;
let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'photo booth',
    'pitchfork',
    'mumblecore',
    'biodiesel',
    'readymade',
    'vaporware',
    'freegan',
    'disrupt',
    'waistcoat',
    'meggings',
    'gluten-free',
    'cliche',
    'authentic',
    'mixtape',
    'stumptown',
    'jianbing',
    'master cleanse',
    'bushwick',
    'ugh',
    'umami',
    'butcher',
    'roof party',
    'taiyaki',
    'sustainable',
    'tbh',
    'meh',
    '8-bit',
    'ethical',
    'gluten-free',
    'try-hard',
    'mlkshk',
    'raw denim',
    'Austin',
    'cardigan',
    'art party',
    'distillery',
    'keytar',
    'aesthetic',
    'paleo',
    'DIY',
    'cornhole',
    'fam',
    'helvetica',
    'ramps',
    'flannel',
    'twee',
    'asymmetrical',
    'YOLO',
    'XOXO',
    'kitsch',
    'vape',
    'La croix',
    'selfies',
    'trust fund',
    'cliche',
    'craft beer',
    'normcore',
    'VHS',
    'heirloom',
    'Edison bulb',
    'unicorn',
    'thundercats',
    'polaroid',
    'cronut',
    'venmo',
    'sustainable',
    'microdosing',
    'kale chips',
    'humble brag',
    'quinoa',
    'locavore',
    'before they sold out',
    'wayfarers',
    'tumblr',
    'bronson',
];

//Initialize The Game
function init() {
    //Display number of seconds
    seconds.innerHTML = currentLevel;
    //Load random word from array
    showWord(words);
    //Start matching on word input
    wordInput.addEventListener('input', startMatch);
    //Call countdown every second
    setInterval(countdown, 1000);
    //Check game status
    setInterval(checkStatus, 50);
}

//Start Matching Words
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    //If score is -1, display 0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }

}

//Match currentWord to WordInput
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

//Pick & Show random word
function showWord(words) {
    //Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //Output random word
    currentWord.innerHTML = words[randIndex];
}

//Countdown Timer
function countdown() {
    //Make sure the time has not run out
    if (time > 0) {
        time--
    } else if (time === 0) {
        //Game is over
        isPlaying = false;
    }
    //Show time remaining
    timeDisplay.innerHTML = time;
}

//Check game status
function checkStatus() {
    if (!isPlaying && time == 0) {
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}