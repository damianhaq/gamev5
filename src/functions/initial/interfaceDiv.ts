import { newGameButton } from "../../app.js";
import { addHtmlElement } from "../helpers.js";
import { newGame } from "../newGame.js";

export function interfaceDiv(div: HTMLDivElement, canvas: HTMLCanvasElement) {
  addHtmlElement("h1", div, "Game");
  // const newGameButton = addHtmlElement("button", div, "New Game");

  newGameButton.addEventListener("click", (ev) => {
    newGame();
    newGameButton.style.display = "none";
  });
}
