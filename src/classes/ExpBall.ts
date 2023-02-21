// import { player } from "../app.js";
import { addExp, calculateDirection, calculateDistance } from "../functions/helpers.js";
// import { player } from "../functions/initial/playing.js";
import { instances, stats } from "../variables.js";
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
      instances.player.x,
      instances.player.y,
      instances.player.radius
    );

    if (distance < instances.player.grabItemRange) {
      const direction = calculateDirection(
        this.x,
        this.y,
        instances.player.x,
        instances.player.y
      );

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
