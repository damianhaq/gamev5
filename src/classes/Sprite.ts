export class Sprite {
  debug: boolean;
  constructor(public x: number, public y: number, public radius: number) {
    this.x = x;
    this.y = y;
    this.debug = false;
    this.radius = radius;
  }

  update(c: CanvasRenderingContext2D) {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.closePath();
    c.stroke();

    if (this.debug) {
      c.beginPath();
      c.rect(this.x, this.y, 16, 16);
      c.closePath();
      c.stroke();
    }
    this.moving();
  }

  moving() {}

  showHitbox() {
    this.debug = true;
  }
}
