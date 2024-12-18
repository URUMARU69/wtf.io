// const TelegramBot = require
// const token = 8153323505:AAG8RxljKPRcPN8VzTwp9G5InR0iBhSzwFQ;
// const bot = new TelegramBot(token, {polling: true})
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

const button = document.getElementById('tap')

button.addEventListener('click', showImage)

function showImage(event) {
    const overlay = document.getElementById('overlay');
    const x = event.clientX;
    const y = event.clientY;

    overlay.classList.add('visible')
    overlay.style.left = `${x - 50}px`;
    overlay.style.top = `${y - 50}px`;
    overlay.innerHTML = '<img src="../images/WTF.png" alt="Overlay Image">';

    setTimeout(() => {
        overlay.classList.remove('visible');
        // overlay.style.display = 'none';
    }, 500);
}


let count = 0;
const countElement = document.getElementById('count');
// const button = document.getElementById('tap');
const colors = ['#F77928', '#F70000', '#FFC29'];
let isPressed = false;

function incrementCount() {
    count++;
    countElement.textContent = count;

    const randomColor = colors[count % colors.length];
    countElement.style.color = randomColor;
}

button.addEventListener('mousedown', () => {
    if (!isPressed) { 
        isPressed = true;
        incrementCount(); 
    }
});

button.addEventListener('mouseup', () => {
    isPressed = false; 
});

button.addEventListener('mouseleave', () => {
    isPressed = false; 
});

document.addEventListener('DOMContentLoaded', function () {
    if (/Telegram/i.test(navigator.userAgent)) {
        document.body.style.zoom = '0.7'; // Принудительное уменьшение масштаба
    }
});



// МУЛЬТИ-ТАП

// document.addEventListener("DOMContentLoaded", () => {
//     const tapZone = document.getElementById("tap");
//     const scoreDisplay = document.getElementById("score");
//     let score = 0;

//     tapZone.addEventListener("touchstart", (event) => {
//         // Получаем количество пальцев, которые касаются экрана
//         const touchCount = event.touches.length;

//         // Увеличиваем очки в зависимости от количества пальцев
//         score += touchCount;
//         scoreDisplay.textContent = score;
//     });

//     // Предотвращаем прокрутку при касании
//     tapZone.addEventListener("touchmove", (event) => {
//         event.preventDefault();
//     });
// });


