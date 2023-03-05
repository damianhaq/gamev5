import { c, spriteSheet } from "../app.js";
import { calculateDirection, calculateDistance } from "../functions/helpers.js";
import { dimensions, game, instances, stats } from "../variables.js";

export class Heart {
  radius: number;
  speed: number;

  constructor(
    public x: number,
    public y: number,
    public spriteSheetData: { x: number; y: number; w: number; h: number }
  ) {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.speed = 5;
  }

  update(index: number) {
    this.draw();
    this.moveToPlayer(index);
  }

  draw() {
    c.drawImage(
      spriteSheet,
      this.spriteSheetData.x,
      this.spriteSheetData.y,
      this.spriteSheetData.w,
      this.spriteSheetData.h,

      this.x + dimensions.map.x - this.spriteSheetData.w,
      this.y + dimensions.map.y - this.spriteSheetData.h,
      this.spriteSheetData.w * 2,
      this.spriteSheetData.h * 2
    );
  }

  moveToPlayer(index: number): void {
    const distance = calculateDistance(
      this.x,
      this.y,
      this.radius,
      instances.player.x,
      instances.player.y,
      instances.player.radius
    );

    if (distance < stats.player.pickupRange) {
      const direction = calculateDirection(
        this.x,
        this.y,
        instances.player.x,
        instances.player.y
      );

      if (!game.isPause) {
        this.x += direction.x * this.speed;
        this.y += direction.y * this.speed;
      }

      if (distance <= 0) {
        let ableHeal = 0;
        if (instances.player.hp + stats.game.healHeartValue <= stats.player.maxHP) {
          ableHeal = stats.game.healHeartValue;
        } else {
          ableHeal = stats.player.maxHP - instances.player.hp;
        }

        instances.player.heal(ableHeal);
        instances.hearts.splice(index, 1);
      }
    }
  }
}
