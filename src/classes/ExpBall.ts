import { player } from "../app.js";
import { calculateDirection, calculateDistance } from "../functions/helpers.js";
import { Sprite } from "./Sprite.js";

export class ExpBall extends Sprite {
  speed: number;
  constructor(x: number, y: number, radius: number) {
    super(x, y, radius);
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = "#ff8500";
    this.type = "fill";
    this.speed = 2;
  }

  moveToPlayer(index: number, expballs: ExpBall[]): void {
    const distance = calculateDistance(
      this.x,
      this.y,
      this.radius,
      player.x,
      player.y,
      player.radius
    );

    if (distance < player.grabItemRange) {
      const direction = calculateDirection(this.x, this.y, player.x, player.y);

      this.x += direction.x * this.speed;
      this.y += direction.y * this.speed;

      if (distance <= 0) {
        // todo: add exp
        expballs.splice(index, 1);
      }
    }
  }
}
