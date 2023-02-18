import { controls } from "../functions/controls.js";
import { dimensions, keys } from "../variables.js";
import { Sprite } from "./Sprite.js";

export class Player extends Sprite {
  speed: number;
  constructor(x: number, y: number, radius: number) {
    super(x, y, radius);
    this.speed = 1;
    controls();
  }

  moving() {
    if (keys.a && !this.isCollideBorderMap("left")) this.x -= this.speed;
    else if (keys.d && !this.isCollideBorderMap("right")) this.x += this.speed;

    if (keys.w && !this.isCollideBorderMap("up")) this.y -= this.speed;
    else if (keys.s && !this.isCollideBorderMap("bot")) this.y += this.speed;
  }

  isCollideBorderMap(side: "left" | "right" | "up" | "bot"): boolean {
    switch (side) {
      case "left":
        if (this.x - this.radius < 0) return true;
        break;
      case "right":
        if (this.x + this.radius > dimensions.map.w) return true;

        break;
      case "up":
        if (this.y - this.radius < 0) return true;

        break;
      case "bot":
        if (this.y + this.radius > dimensions.map.h) return true;

        break;

      default:
        break;
    }
  }
}
