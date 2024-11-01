const counterElement = document.getElementById('counter');
const musclesContainer = document.getElementById('muscles');
const messageElement = document.getElementById('message');


const muscleImages = [
    'muscle1.png',
    'muscle2.png',
    'muscle3.png'
    
];

let timeLeft =4;
const countdown = setInterval(() => {
    counterElement.innerText = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(countdown);
        startCelebration();
    }
    timeLeft--;
}, 1000);

const startCelebration = () => {
    counterElement.style.display = 'none';
    displayMuscles();
    setTimeout(() => {
        messageElement.innerText = "IT'S MY BIRTHDAY !";
        messageElement.style.opacity = 1;
    }, 2500);
};

const displayMuscles = () => {
    const numberOfMuscles = 100;
    let delay = 0;

    for (let i = 0; i < numberOfMuscles; i++) {
        setTimeout(() => {
            createMuscle();
        }, delay);
        delay += 600;
    }
};

const createMuscle = () => {
    const muscle = document.createElement('div');
    muscle.classList.add('muscle');

    
    const randomIndex = Math.floor(Math.random() * muscleImages.length);
    muscle.style.backgroundImage = `url('${muscleImages[randomIndex]}')`;

   
    const xPosition = Math.random() * (window.innerWidth - 50);
    muscle.style.left = `${xPosition}px`;
    muscle.style.top = `0px`;

    const dropDuration = 3;
    muscle.style.animationDuration = `${dropDuration}s`;

    musclesContainer.appendChild(muscle);

    
    setTimeout(() => {
        muscle.remove();
    }, dropDuration * 1000);
};
