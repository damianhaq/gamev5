import { drawText } from "../functions/draw/drawText.js";

export class Sprite {
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public hp: number = 0,
    public immuneTime: number = 0,
    public isImmune: boolean = false,
    public type: "stroke" | "fill" = "stroke",
    public color: string = "#202124"
  ) {
    this.x = x;
    this.y = y;

    this.radius = radius;
    this.hp = hp;
  }

  update(c: CanvasRenderingContext2D, drawMe: Function) {
    drawMe(this.x, this.y, this.radius, this.type, this.color, c);

    if (this.hp > 0) this.showHp(c);
    this.moving();
  }

  moving() {}

  showHp(c: CanvasRenderingContext2D) {
    drawText(this.x, this.y, this.hp.toString(), "#000", c);
  }
}
