import { guiDiv, newGameButton } from "../../app.js";
import { NewGui } from "../../classes/NewGui.js";
import { game, stats } from "../../variables.js";
// import { addHtmlElement } from "../helpers.js";
import { newGame } from "../newGame.js";

export function interfaceDiv() {
  newGameButton.addEventListener("click", (ev) => {
    newGame();
    newGameButton.style.display = "none";
  });
}
