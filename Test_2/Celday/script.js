
document.getElementById('show-more').addEventListener('click', () => {
    const loreDetails = document.getElementById('lore-details');
    if (loreDetails.classList.contains('hidden')) {
        loreDetails.classList.remove('hidden');
        document.getElementById('show-more').textContent = 'Hide Surprise';
    } else {
        loreDetails.classList.add('hidden');
        document.getElementById('show-more').textContent = 'Reveal a Surprise!';
    }
});

const omori = document.getElementById('omori');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const resetButton = document.getElementById('reset');
const darkOverlay = document.getElementById('dark-overlay');

let score = 0;
let time = 30; 
let timerId;
let gameActive = false;

function moveOmori() {
    const container = document.getElementById('game-container');
    const maxX = container.clientWidth - omori.clientWidth;
    const maxY = container.clientHeight - omori.clientHeight;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    omori.style.left = `${newX}px`;
    omori.style.top = `${newY}px`;
}

function startGame() {
    score = 0;
    time = 30;
    gameActive = true;
    scoreDisplay.textContent = `Score: ${score}`;
    timerDisplay.textContent = `Time: ${time}`;
    resetButton.classList.add('hidden');


    timerId = setInterval(() => {
        time--;
        timerDisplay.textContent = `Time: ${time}`;
        if (time <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(timerId);
    gameActive = false;
    resetButton.classList.remove('hidden');
    if (score >= 30) {
        showDarkScreen();
    }
}

function resetGame() {
    startGame();
    moveOmori();
}

omori.addEventListener('click', () => {
    if (gameActive) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        moveOmori();
    }
});

resetButton.addEventListener('click', resetGame);


omori.addEventListener('click', () => {
    if (!gameActive) {
        startGame();
    }
});


function showDarkScreen() {
    darkOverlay.style.display = 'block';

    setTimeout(() => {
        addNewImage();
    }, 5000);

    setTimeout(() => {
        addFinalImage();
    }, 10000);

    setTimeout(() => {
        darkOverlay.style.display = 'none';
    }, 34000);
}

function addFinalImage() {
    const finalImage = document.createElement('img');
    finalImage.src = 'assets/final.jpg';
    finalImage.id = 'final-image';
    finalImage.style.position = 'absolute';
    finalImage.style.top = '0';
    finalImage.style.left = '0';
    finalImage.style.width = '100%';
    finalImage.style.height = '100%';
    finalImage.style.display = 'block';
    finalImage.style.zIndex = '1000';
    finalImage.classList.add('fade-in'); 

    darkOverlay.appendChild(finalImage);

    setTimeout(() => {
        finalImage.classList.add('show');
    }, 5000);
}

function addNewImage() {
    const newImage = document.createElement('img');
    newImage.src = 'assets/scary.png';
    newImage.id = 'new-image';
    newImage.style.position = 'absolute';
    newImage.style.top = '50%';
    newImage.style.left = '70%';
    newImage.style.width = '30%';
    newImage.style.zIndex = '5';
    newImage.classList.add('fade-in'); 

    darkOverlay.appendChild(newImage);

    setTimeout(() => {
        newImage.classList.add('show');
    }, 50);
}




const backgroundMusic = document.getElementById('background-music');


backgroundMusic.volume = 0.5;

function startGame() {
    score = 0;
    time = 30;
    gameActive = true;
    scoreDisplay.textContent = `Score: ${score}`;
    timerDisplay.textContent = `Time: ${time}`;
    resetButton.classList.add('hidden');


    backgroundMusic.play();

    timerId = setInterval(() => {
        time--;
        timerDisplay.textContent = `Time: ${time}`;
        if (time <= 0) {
            endGame();
        }
    }, 1000);
}