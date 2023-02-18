import { controls } from "../functions/controls.js";
import { dimensions, keys } from "../variables.js";
import { Sprite } from "./Sprite.js";

export class Player extends Sprite {
  speed: number;
  constructor(x: number, y: number, radius: number) {
    super(x, y, radius);
    this.speed = 10;
    controls();
  }

  moving() {
    if (keys.a && !this.isCollideBorderMap("left")) dimensions.map.x += this.speed;
    else if (keys.d && !this.isCollideBorderMap("right")) dimensions.map.x -= this.speed;

    if (keys.w && !this.isCollideBorderMap("up")) dimensions.map.y += this.speed;
    else if (keys.s && !this.isCollideBorderMap("bot")) dimensions.map.y -= this.speed;
  }

  isCollideBorderMap(side: "left" | "right" | "up" | "bot"): boolean {
    switch (side) {
      case "left":
        if (this.x - this.radius <= dimensions.map.x) return true;
        break;
      case "right":
        if (this.x + this.radius >= dimensions.map.w + dimensions.map.x) return true;
        break;
      case "up":
        if (this.y - this.radius <= dimensions.map.y) return true;
        break;
      case "bot":
        if (this.y + this.radius >= dimensions.map.h + dimensions.map.y) return true;
        break;
    }
  }
}
