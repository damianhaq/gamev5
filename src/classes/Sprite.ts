import { drawText } from "../functions/draw/drawText.js";

export class Sprite {
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public hp: number = 0
  ) {
    this.x = x;
    this.y = y;

    this.radius = radius;
    this.hp = hp;
  }

  update(c: CanvasRenderingContext2D, drawMe: Function) {
    drawMe(this.x, this.y, this.radius, "stroke", "#202124", c);

    this.showHp(c);
    this.moving();
  }

  moving() {}

  showHp(c: CanvasRenderingContext2D) {
    drawText(this.x, this.y, this.hp.toString(), c);
  }
}
