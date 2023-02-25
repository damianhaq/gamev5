import { gameOverDivElement } from "../../app.js";
import { addHtmlElement } from "../helpers.js";
import { returnToGameAfterLvlup } from "../returnToGameAfterLvlup.js";

export function gameOverDiv() {
  // lvlUpDivElement.style.flexGrow = "0";
  gameOverDivElement.style.width = "0";

  addHtmlElement("h2", gameOverDivElement, "Game Over!");
}
