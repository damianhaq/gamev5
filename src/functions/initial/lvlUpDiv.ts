import { lvlUpDivElement } from "../../app.js";
import { addHtmlElement } from "../helpers.js";
import { returnToGameAfterLvlup } from "../returnToGameAfterLvlup.js";

export function lvlUpDiv() {
  // lvlUpDivElement.style.flexGrow = "0";
  lvlUpDivElement.style.flexBasis = "0px";

  addHtmlElement("h2", lvlUpDivElement, "Level Up!");
  const click = addHtmlElement("button", lvlUpDivElement, "Click");
  click.addEventListener("click", () => {
    returnToGameAfterLvlup();
  });
}
