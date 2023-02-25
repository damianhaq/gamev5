import { canvas, lvlUpDivElement } from "../app.js";
import { game } from "../variables.js";

export function returnToGameAfterLvlup() {
  console.log("returnToGameAfterLvlup()");

  game.isPause = false;
  game.gameState = "playing";
  // lvlUpDivElement.style.flexBasis = "0px";
  lvlUpDivElement.style.flexGrow = "0";
  canvas.style.width = "1200px";
}
