import { c } from "../app.js";
import { drawCircle } from "../functions/draw/drawCircle.js";
import { calculateDistance } from "../functions/helpers.js";
import { Character } from "../newClases/Character.js";
import { EnemyCh } from "../newClases/extend/EnemyCh.js";
import { game, instances, stats } from "../variables.js";
import { Enemy } from "./Enemy.js";
import { Sprite } from "./Sprite.js";

export class MagicField {
  constructor(public who: Character) {
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
        instances.enemiesCh.forEach((enemy: EnemyCh) => {
          const distance: number = calculateDistance(
            enemy.x,
            enemy.y,
            enemy.radius,
            this.who.x,
            this.who.y,
            stats.skills.magicField.radius
          );
          if (distance <= 0) {
            // enemy.getDamage(stats.skills.magicField.damage);
            enemy.getDamage(stats.skills.magicField.damage, game.colors.blue);
          }

          if (game.isGameOver) {
            clearInterval(iid);
          }
        });
      }
    }, stats.skills.magicField.attackSpeed);
  }
}
