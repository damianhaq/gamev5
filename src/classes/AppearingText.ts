import { drawText } from "../functions/draw/drawText.js";
import { game, instances } from "../variables.js";

export class AppearingText {
  killMe: boolean;
  constructor(
    public x: number,
    public y: number,
    public time: number,
    public text: string,
    public fontSize: number = 16,
    public color: string = game.colors.blue
  ) {
    this.x = x;
    this.y = y;
    this.time = time;
    this.text = text;
    this.fontSize = fontSize;
    this.killMe = false;
    this.color = color;

    this.timeout();
  }

  update(index: number) {
    this.y -= 0.5;
    drawText(this.x, this.y, this.text, this.fontSize, game.font.main, this.color, {
      stroke: true,
      color: "#fff",
      lineWidth: 2,
    });
    if (this.killMe) {
      setTimeout(() => {
        instances.appearingText.splice(index, 1);
      }, 0);
    }
  }

  timeout() {
    setTimeout(() => {
      this.killMe = true;
    }, this.time);
  }
}
