import { gameOverDivElement } from "../../app.js";
import { addHtmlElement } from "../helpers.js";
export function gameOverDiv() {
    // lvlUpDivElement.style.flexGrow = "0";
    gameOverDivElement.style.width = "0";
    addHtmlElement("h2", gameOverDivElement, "Game Over!");
}
