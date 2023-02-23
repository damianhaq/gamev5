import { c } from "../../app.js";
import { AppearingText } from "../../classes/AppearingText.js";
import { Enemy } from "../../classes/Enemy.js";
import { ExpBall } from "../../classes/expBall.js";
import { game, instances } from "../../variables.js";
import { camera } from "../camera.js";
import { drawCircle } from "../draw/drawCircle.js";
import { drawGrass } from "../draw/drawGrass.js";
import { drawMap } from "../drawMap.js";
import { guiPlaying } from "../guiPlaying.js";

export function playing() {
  if (game.isGameOver) return;

  camera(instances.player);

  instances.skills.magicField.update();
  instances.grassArray.forEach((el) => el.update(c, drawGrass));

  drawMap(c);

  instances.bullets.forEach((bullet, index) => {
    bullet.update(c, drawCircle);
    bullet.deleteIfOverMap(index);
    bullet.collisionEnemy(index);
    // bullet.customText(bullet.penetrationNumber);
  });

  instances.player.update(c, drawCircle);

  instances.enemies.forEach((enemy: Enemy, index: number) => {
    enemy.update(c, drawCircle);
    enemy.moveTowardsPlayer(instances.player);
    enemy.die(index);
    enemy.collideEnemies(instances.enemies, index);
    enemy.customText(enemy.immuneProjectilesId.length.toString());
  });

  instances.expBalls.forEach((exp: ExpBall, index: number) => {
    exp.update(c, drawCircle);
    exp.moveToPlayer(index, instances.expBalls);
  });

  instances.appearingText.forEach((el: AppearingText, index: number) => {
    el.update(index);
  });

  guiPlaying();
}
