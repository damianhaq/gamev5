import { Bullet } from "../../classes/Bullet.js";
import { Enemy } from "../../classes/Enemy.js";
import { Projectile } from "../../newClases/Projectile.js";
import { game, instances, spriteSheetData, stats } from "../../variables.js";
import { calculateDirection, findNearestEnemy } from "../helpers.js";

export function goldenSwordUpdate(deltaTime) {
  stats.skills.goldenSword.attackSpeedCounter -= deltaTime;

  if (
    stats.skills.goldenSword.attackSpeedCounter < 0 &&
    stats.skills.goldenSword.lvl > 0
  ) {
    stats.skills.goldenSword.attackSpeedCounter = stats.skills.goldenSword.attackSpeed;

    if (instances.enemiesCh.length > 0 && !game.isPause && instances.player) {
      const nearestEnemy: Enemy = findNearestEnemy(instances.player);

      // draw line to nearest enemy
      // drawLine(this.x, this.y, nearestEnemy.x, nearestEnemy.y, "#007acc", c);

      const direction = calculateDirection(
        instances.player.x,
        instances.player.y,
        nearestEnemy.x,
        nearestEnemy.y
      );

      stats.skills.goldenSword.counterId++;
      instances.projectiles.push(
        new Projectile(
          instances.player.x,
          instances.player.y,
          stats.skills.goldenSword.radius,
          stats.skills.goldenSword.movementSpeed,
          direction,
          stats.skills.goldenSword.damage,
          `${stats.skills.goldenSword.counterId}goldenSword`,
          ["enemyCh"],
          stats.skills.goldenSword.penetrationNumber,
          spriteSheetData.weapons.goldenSword
        )
      );
    }
  }
}

export function goldenSwordLvlUp() {
  stats.skills.goldenSword.lvl += 1;
  stats.skills.goldenSword.damage += 3;
}
