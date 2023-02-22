import { Bullet } from "../../classes/Bullet.js";
import { Enemy } from "../../classes/Enemy.js";
import { game, instances } from "../../variables.js";
import { calculateDirection, findNearestEnemy } from "../helpers.js";

export function projectile() {
  let iid: number;
  let countId: number = 0;
  const data = {
    attackSpeed: 1100,
    damage: 30,
  };

  if (!iid) {
    iid = setInterval(() => {
      if (instances.enemies.length > 0 && !game.isPause) {
        const nearestEnemy: Enemy = findNearestEnemy(instances.player);

        // draw line to nearest enemy
        // drawLine(this.x, this.y, nearestEnemy.x, nearestEnemy.y, "#007acc", c);

        const direction = calculateDirection(
          instances.player.x,
          instances.player.y,
          nearestEnemy.x,
          nearestEnemy.y
        );

        countId++;
        instances.bullets.push(
          new Bullet(
            instances.player.x,
            instances.player.y,
            15,
            2,
            direction,
            data.damage,
            `${countId}projectile`,
            5
          )
        );
      }
      if (game.isGameOver) {
        clearInterval(iid);
        iid = null;
      }
    }, data.attackSpeed);
  }
}
