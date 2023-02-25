// import { enemies, bullets, expBalls, grassArray } from "./initial/playing.js";

import { canvas, gameOverDivElement, newGameButton } from "../app.js";
import { game, instances, stats } from "../variables.js";

export function gameOver() {
  game.isGameOver = true;
  game.gameState = "gameOver";
  game.initialPlayingFlag = true;

  canvas.style.width = "0";
  gameOverDivElement.style.flexGrow = "1";
  newGameButton.style.display = "inline";
}
