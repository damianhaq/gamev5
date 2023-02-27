import { canvas, lvlupDiv } from "../app.js";
import { game } from "../variables.js";

export function returnToGameAfterLvlup() {
  console.log("returnToGameAfterLvlup()");

  game.isPause = false;
  game.gameState = "playing";
  lvlupDiv.style.display = "none";
}
