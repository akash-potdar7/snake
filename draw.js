const playground = document.querySelector('canvas');
playground.width = 360;
playground.height = 360;
playground.style.border = '1px solid';
playground.style.backgroundColor = '#4B4B4B';

const ctx = playground.getContext('2d');

// formatting the canvas into rows and columns | grid.
const scale = 10,
    rows = playground.height / scale,
    columns = playground.width / scale;

var snake;
var rat;

(function () {
    snake = new Snake();
    rat = new Rat();
    rat.pickLocation();

    window.setInterval(function () {
        ctx.clearRect(0, 0, playground.width, playground.height);

        rat.draw();
        snake.move();
        snake.draw();

        if (snake.swallow(rat)) {
            rat.pickLocation();
        }

    }, 250);
}());

function handleInput(event) {
    const key = event.key.replace('Arrow', '').toLowerCase();
    snake.changeDirection(key);
}

window.addEventListener('keydown', handleInput);