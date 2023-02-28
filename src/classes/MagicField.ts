import { c } from "../app.js";
import { drawCircle } from "../functions/draw/drawCircle.js";
import { calculateDistance } from "../functions/helpers.js";
import { game, instances, stats } from "../variables.js";
import { Enemy } from "./Enemy.js";
import { Sprite } from "./Sprite.js";

export class MagicField {
  constructor(public who: Sprite) {
    this.who = who;
    this.attack();
  }

  update() {
    drawCircle(
      this.who.x,
      this.who.y,
      stats.skills.magicField.radius,
      "fill",
      "#e8eaee",
      c
    );
  }

  attack() {
    const iid = setInterval(() => {
      if (!game.isPause) {
        instances.enemies.forEach((enemy: Enemy) => {
          const distance: number = calculateDistance(
            enemy.x,
            enemy.y,
            enemy.radius,
            this.who.x,
            this.who.y,
            stats.skills.magicField.radius
          );
          if (distance <= 0) {
            enemy.getDamage(stats.skills.magicField.damage);
          }

          if (game.isGameOver) {
            clearInterval(iid);
          }
        });
      }
    }, stats.skills.magicField.attackSpeed);
  }
}
