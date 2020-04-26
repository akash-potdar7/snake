function Snake() {
    this.x = 10;
    this.y = 10;

    this.xSpeed = 10;
    this.ySpeed = 0;

    this.size = 0;
    this.tail = [];

    this.draw = function () {
        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillStyle = '#9BD2A4';
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        ctx.fillStyle = '#068A1C';
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.move = function () {

        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        this.tail[this.size - 1] = { x: this.x, y: this.y };

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        this.handlePerimeterHit();
    }

    this.swallow = function ({ x, y }) {
        if (this.x == x && this.y == y) {
            this.size++;
            return true;
        }
        return false;
    }

    this.changeDirection = function (direction) {
        switch (direction) {
            case 'up':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;
            case 'down':
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case 'left':
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                break;
            case 'right':
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;
        }
    }

    this.handlePerimeterHit = function () {
        if (this.x > playground.width)
            this.x = 0;
        if (this.y > playground.height)
            this.y = 0;
        if (this.x < 0)
            this.x = playground.width;
        if (this.y < 0)
            this.y = playground.height;
    }

}