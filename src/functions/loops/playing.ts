import { c } from "../../app.js";
import { AppearingText } from "../../classes/AppearingText.js";
import { Bullet } from "../../classes/Bullet.js";
import { Circling } from "../../classes/Circling.js";
import { Enemy } from "../../classes/Enemy.js";
import { ExpBall } from "../../classes/expBall.js";
import { Grass } from "../../classes/Grass.js";
import { Heart } from "../../classes/Heart.js";
import { Character } from "../../newClases/Character.js";
import { Projectile } from "../../newClases/Projectile.js";
import { game, instances } from "../../variables.js";
import { camera } from "../camera.js";
import { drawCircle } from "../draw/drawCircle.js";
import { drawGrass } from "../draw/drawGrass.js";
import { drawMap } from "../drawMap.js";
import { guiPlaying } from "../GUIs/guiPlaying.js";
import { goldenSwordUpdate } from "../skills/goldenSword.js";

export function playing(deltaTime) {
  if (game.isGameOver) return;

  camera(instances.player);

  instances.skills.magicField?.update();

  instances.skills.circling.forEach((el: Circling) => {
    el.update(c);
    el.collisionEnemy();
  });

  instances.grassArray.forEach((el: Grass) => el.update(c, drawGrass));

  drawMap(c);

  instances.projectiles.forEach((projectile: Projectile, index: number) => {
    projectile.update(deltaTime, index);
  });

  instances.player.update(deltaTime);

  instances.expBalls.forEach((exp: ExpBall, index: number) => {
    exp.update(index, deltaTime);
  });
  instances.hearts.forEach((heart: Heart, index) => {
    heart.update(index);
  });

  instances.enemiesCh.forEach((el: Character, index: number) => {
    el.update(deltaTime, index);
  });

  goldenSwordUpdate(deltaTime);

  instances.appearingText.forEach((el: AppearingText, index: number) => {
    el.update(index);
  });

  guiPlaying();
}
