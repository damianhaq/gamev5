import { canvas, gameoverDiv } from "../app.js";
import { game, instances, stats } from "../variables.js";

export function newGame() {
  //Reset
  instances.enemies.length = 0;
  instances.bullets.length = 0;
  instances.expBalls.length = 0;
  instances.grassArray.length = 0;
  instances.player = null;
  instances.appearingText.length = 0;

  instances.skills.magicField = null;
  instances.skills.circling.length = 0;

  // circling ball reset
  stats.skills.circlingBalls.lvl = 0;
  stats.skills.circlingBalls.damage = 8;
  stats.skills.circlingBalls.speed = 1;
  stats.skills.circlingBalls.numberBalls = 1;
  stats.skills.circlingBalls.radius = 80;
  stats.skills.circlingBalls.radiusElement = 10;

  stats.player.lvl = 1;
  stats.game.AllDamageDone = 0;
  stats.player.upgradePoints = 0;
  stats.player.maxXP = 100;
  stats.player.currentXP = 0;
  stats.player.maxHP = 100;
  stats.player.currentHP = 100;
  stats.player.baseDamage = 10;

  game.gameState = "playing";
  game.isGameOver = false;
  // canvas.style.width = "1200px";
  gameoverDiv.style.display = "none";
}
