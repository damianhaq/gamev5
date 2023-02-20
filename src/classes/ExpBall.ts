import { player } from "../app.js";
import { addExp, calculateDirection, calculateDistance } from "../functions/helpers.js";
import { stats } from "../variables.js";
import { Sprite } from "./Sprite.js";

export class ExpBall extends Sprite {
  speed: number;
  constructor(x: number, y: number, radius: number, public expValue: number) {
    super(x, y, radius);
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = "#ff8500";
    this.type = "fill";
    this.speed = 2;
    this.expValue = expValue;
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
        // stats.player.currentXP += this.expValue;
        addExp(this.expValue);
        expballs.splice(index, 1);
      }
    }
  }
}
