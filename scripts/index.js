const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const winCountElement = document.getElementById('winCount');
const lossCountElement = document.getElementById('lossCount');

let isJumping = false;
let winCount = 0;
let lossCount = 0;

document.addEventListener('keydown', function (event) {
    if ((event.key === ' ' || event.key === 'ArrowUp') && !isJumping) {
        jump();
    }

    if (event.key === 'ArrowDown' && isJumping) {
        fall();
    }
});

function jump() {
    if (!isJumping) {
        isJumping = true;
        dino.classList.add('jump');

        setTimeout(function () {
            dino.classList.remove('jump');
            isJumping = false;
        }, 300);
    }
}

function fall() {
    dino.classList.remove('jump');
    isJumping = false;
    dino.style.top = '150px';
}

let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    let cactusRight = cactusLeft + 20;


    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        lossCount++;
        lossCountElement.textContent = lossCount;
        alert('GAME OVER!!');
        resetGame();
    }


    if (cactusLeft <= 0) {
        winCount++;
        winCountElement.textContent = winCount;
        resetCactus();
    }
}, 100);

function resetGame() {
    dino.style.top = '150px';
    resetCactus();
    isJumping = false;
    dino.classList.remove('jump');
}

function resetCactus() {
    cactus.style.left = '580px';
}
