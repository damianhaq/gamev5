import { dimensions } from "../variables.js";

export class Sprite {
  debug: boolean;
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public isCameraLock: boolean = false,
    public hp: number = 0
  ) {
    this.x = x;
    this.y = y;
    this.debug = false;
    this.radius = radius;
    this.isCameraLock = isCameraLock;
    this.hp = hp;
  }

  update(c: CanvasRenderingContext2D, drawMe: Function) {
    c.beginPath();
    if (!this.isCameraLock) {
      drawMe(c, this.x + dimensions.map.x, this.y + dimensions.map.y, this.radius);
    } else {
      // Player
      drawMe(c, this.x, this.y, this.radius);
    }
    c.closePath();
    c.stroke();

    this.showHp(c);
    this.moving();
  }

  moving() {}

  showHp(c: CanvasRenderingContext2D) {
    // if (this.hp > 0) {
    if (this.isCameraLock) {
      c.fillText(this.hp.toString(), this.x, this.y);
    } else {
      c.fillText(
        this.hp.toString(),
        this.x + dimensions.map.x,
        this.y + dimensions.map.y
      );
    }
    // }
  }
}
