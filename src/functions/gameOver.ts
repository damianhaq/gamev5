// import { enemies, bullets, expBalls, grassArray } from "./initial/playing.js";

import { game, instances, stats } from "../variables.js";

export function gameOver() {
  instances.enemies.length = 0;
  instances.bullets.length = 0;
  instances.expBalls.length = 0;
  instances.grassArray.length = 0;
  instances.player = null;
  instances.appearingText.length = 0;

  instances.skills.magicField = null;
  instances.skills.circling.length = 0;
  stats.skills.circlingBalls = {
    lvl: 0,
    damage: 4,
    speed: 1,
    numberBalls: 1,
    radius: 80,
    radiusElement: 10,
  };

  game.isGameOver = true;
  game.gameState = "mainMenu";
  game.initialPlayingFlag = true;

  stats.player.lvl = 1;
  stats.player.maxXP = 100;
  stats.player.currentXP = 0;
  stats.player.maxHP = 100;
  stats.player.currentHP = 100;
}
