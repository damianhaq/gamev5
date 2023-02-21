// import { enemies, bullets, expBalls, grassArray } from "./initial/playing.js";

import { game, instances } from "../variables.js";

export function gameOver() {
  instances.enemies.length = 0;
  instances.bullets.length = 0;
  instances.expBalls.length = 0;
  instances.grassArray.length = 0;
  instances.player = null;

  game.isGameOver = true;
  game.gameState = "mainMenu";
  game.initialPlayingFlag = true;
}
