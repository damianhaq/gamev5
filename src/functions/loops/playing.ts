import { c } from "../../app.js";
import { game, instances } from "../../variables.js";
import { camera } from "../camera.js";
import { drawCircle } from "../draw/drawCircle.js";
import { drawGrass } from "../draw/drawGrass.js";
import { drawMap } from "../drawMap.js";
import { guiPlaying } from "../guiPlaying.js";

export function playing() {
  if (game.isGameOver) return;

  camera(instances.player);
  drawMap(c);

  instances.grassArray.forEach((el) => el.update(c, drawGrass));

  instances.bullets.forEach((bullet, index) => {
    bullet.update(c, drawCircle);
    bullet.deleteIfOverMap(index);
    bullet.collisionEnemy(index);
  });

  instances.player.update(c, drawCircle);

  instances.enemies.forEach((enemy, index) => {
    enemy.update(c, drawCircle);
    enemy.moveTowardsPlayer(instances.player);
    enemy.die(index);
    enemy.collideEnemies(instances.enemies, index);
  });

  instances.expBalls.forEach((exp, index) => {
    exp.update(c, drawCircle);
    exp.moveToPlayer(index, instances.expBalls);
  });

  guiPlaying();
}
