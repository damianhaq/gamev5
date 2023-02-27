// import { addHtmlElement } from "../helpers.js";
import { lvlupDiv } from "../../app.js";
import { NewGui } from "../../classes/NewGui.js";
import { returnToGameAfterLvlup } from "../returnToGameAfterLvlup.js";
export function pauseDiv() {
    // addHtmlElement("h2", lvlUpDivElement, "Level Up!");
    new NewGui("h3", "Level up!", "", lvlupDiv);
    const lvlupButton = new NewGui("button", "ok", "", lvlupDiv);
    // const click = addHtmlElement("button", lvlUpDivElement, "Click");
    lvlupButton.newElement.addEventListener("click", () => {
        returnToGameAfterLvlup();
    });
    // addHtmlElement("p", lvlUpDivElement, "Lvl up system work in progress");
}
