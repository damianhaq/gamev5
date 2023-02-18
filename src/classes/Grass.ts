import { dimensions } from "../variables.js";

export class Grass {
  debug: boolean;
  constructor(public x: number, public y: number, public color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.debug = false;
  }

  update(c: CanvasRenderingContext2D) {
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
    c.moveTo(8 + this.x + dimensions.map.x, 16 + this.y + dimensions.map.y);
    c.lineTo(6 + this.x + dimensions.map.x, 8 + this.y + dimensions.map.y);
    c.lineTo(0 + this.x + dimensions.map.x, 0 + this.y + dimensions.map.y);
    c.moveTo(8 + this.x + dimensions.map.x, 16 + this.y + dimensions.map.y);
    c.lineTo(10 + this.x + dimensions.map.x, 8 + this.y + dimensions.map.y);
    c.lineTo(10 + this.x + dimensions.map.x, 0 + this.y + dimensions.map.y);
    c.stroke();
    // c.quadraticCurveTo(this.x + 40, this.y + 0, 40, 10);

    c.fill();
    // this.shift();
  }
}
