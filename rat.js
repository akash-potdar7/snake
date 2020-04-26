function Rat() {
    this.x;
    this.y;

    this.pickLocation = function() {
        this.x = Math.floor(Math.random() * rows) * scale;
        this.y = Math.floor(Math.random() * columns) * scale;
        console.log(this)
    }

    this.draw = function() {
        ctx.fillStyle = '#D20B23';
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}