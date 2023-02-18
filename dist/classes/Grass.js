export class Grass {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.x = x;
        this.y = y;
        this.color = color;
        this.debug = false;
    }
    update(c) {
        c.fillStyle = this.color;
        c.lineWidth = 1;
        if (this.debug) {
            c.beginPath();
            c.rect(this.x, this.y, 16, 16);
            c.closePath();
            c.stroke();
        }
        // Narysuj trawkę
        c.beginPath();
        c.moveTo(8 + this.x, 16 + this.y);
        c.lineTo(6 + this.x, 8 + this.y);
        c.lineTo(0 + this.x, 0 + this.y);
        c.moveTo(8 + this.x, 16 + this.y);
        c.lineTo(10 + this.x, 8 + this.y);
        c.lineTo(10 + this.x, 0 + this.y);
        c.stroke();
        // c.quadraticCurveTo(this.x + 40, this.y + 0, 40, 10);
        c.fill();
    }
}
