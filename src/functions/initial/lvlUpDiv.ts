// import { addHtmlElement } from "../helpers.js";
import { gui, lvlupDiv } from "../../app.js";
import { NewGui } from "../../classes/NewGui.js";
import { returnToGameAfterLvlup } from "../returnToGameAfterLvlup.js";

export function lvlUpDiv() {
  new NewGui("h3", "Level up!", "", lvlupDiv);
  const lvlupButton = new NewGui("button", "ok", "", lvlupDiv);

  lvlupButton.newElement.addEventListener("click", () => {
    returnToGameAfterLvlup();
  });
}
