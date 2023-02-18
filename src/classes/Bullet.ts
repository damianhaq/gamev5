import { bullets } from "../app.js";
import { dimensions } from "../variables.js";
import { Sprite } from "./Sprite.js";

export class Bullet extends Sprite {
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public speed: number,
    public direction: { x: number; y: number }
  ) {
    super(x, y, radius);
    this.speed = speed;
    this.direction = direction;
  }

  moving(): void {
    this.x += this.direction.x * this.speed;
    this.y += this.direction.y * this.speed;
  }

  deleteIfOverMap(index: number) {
    if (
      this.x - this.radius < 0 ||
      this.x + this.radius > dimensions.map.w ||
      this.y - this.radius < 0 ||
      this.y + this.radius > dimensions.map.h
    ) {
      bullets.splice(index, 1);
    }
  }
}
