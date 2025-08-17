
let car = document.getElementById('car');
let container = document.querySelector('.container');
let scoreElement = document.getElementById('score');
let score = 0;
let gameOver = true;
var lines=document.querySelectorAll('.line')
var button=document.querySelector('.start')
var handleStart = () => {
    gameOver=false;
    lines.forEach((line, index) => {
        line.style.animation = `moveLines 3s infinite linear ${index * 1}s`;
    });
    car.style.display = 'block';

    button.innerHTML = 'Use arrows to navigate';
    
    document.addEventListener('keydown', function (event) {
        if (gameOver) return;

        const leftPosition = parseInt(getComputedStyle(car).left, 10);
        if (event.key === 'ArrowRight' && leftPosition < 350) {
            car.style.left = leftPosition + 20 + 'px'; 
        } else if (event.key === 'ArrowLeft' && leftPosition > 0) {
            car.style.left = leftPosition - 20 + 'px'; 
        }

        scoreElement.innerText = score;
        checkCollision();
    });
};
function createEnemy() {
    let enemy = document.createElement('div');
    enemy.classList.add('enemy');
    enemy.style.left = Math.floor(Math.random() * 350) + 'px';
    enemy.style.top = '-80px';
    document.querySelector('.road').appendChild(enemy);
    moveEnemy(enemy);
}

function moveEnemy(enemy) {
    let interval = setInterval(() => {
        if (gameOver) {
            clearInterval(interval);
            return;
        }
        let enemyTop = parseInt(window.getComputedStyle(enemy).top);
        enemy.style.top = (enemyTop + 5) + 'px';
        if (enemyTop > 1000) {
            enemy.remove();
            score++;
            scoreElement.innerText = score;
        }
        checkCollision(enemy);
    }, 50);
}

function checkCollision(enemy) {
    let carRect = car.getBoundingClientRect();
    let enemyRect = enemy.getBoundingClientRect();
    if (
        carRect.left < enemyRect.right &&
        carRect.right > enemyRect.left &&
        carRect.top < enemyRect.bottom &&
        carRect.bottom > enemyRect.top
    ) {
        gameOver = true;
        alert('Game Over! Final Score: ' + score);
        location.reload();
    }
}

setInterval(() => {
    if (!gameOver) {
        createEnemy();
    }
}, 2000);
