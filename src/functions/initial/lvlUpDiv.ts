// import { addHtmlElement } from "../helpers.js";
import { gui, lvlupDiv } from "../../app.js";
import { NewGui } from "../../classes/NewGui.js";
import { stats } from "../../variables.js";
import { returnToGameAfterLvlup } from "../returnToGameAfterLvlup.js";
import { circlingBallLvlUp } from "../skills/circlingBall.js";
import { magicFieldLvlUp } from "../skills/magicField.js";
import { projectileLvlUp } from "../skills/projectile.js";

export function lvlUpDiv() {
  new NewGui("h3", "Level up!", "", lvlupDiv);
  // const lvlupButton = new NewGui("button", "ok", "", lvlupDiv);

  const upgradeContainer = new NewGui("div", "", "", lvlupDiv);
  upgradeContainer.newElement.style.display = "flex";

  const upgrade1div = new NewGui("div", "", "", upgradeContainer.newElement);
  upgrade1div.newElement.style.border = "1px solid black";
  new NewGui("h4", stats.skills.fireBall.name, "", upgrade1div.newElement);
  new NewGui("p", "damage +3", "", upgrade1div.newElement);
  const fireBallButton = new NewGui("button", "upgrade", "", upgrade1div.newElement);
  fireBallButton.newElement.addEventListener("click", (ev) => {
    projectileLvlUp();
    returnToGameAfterLvlup();
  });

  const upgrade2div = new NewGui("div", "", "", upgradeContainer.newElement);
  upgrade2div.newElement.style.border = "1px solid black";
  new NewGui("h4", stats.skills.circlingBalls.name, "", upgrade2div.newElement);
  new NewGui("p", "ball +1", "", upgrade2div.newElement);

  const mysticalButton = new NewGui("button", "upgrade", "", upgrade2div.newElement);
  mysticalButton.newElement.addEventListener("click", (ev) => {
    circlingBallLvlUp();
    returnToGameAfterLvlup();
  });

  const upgrade3div = new NewGui("div", "", "", upgradeContainer.newElement);
  upgrade3div.newElement.style.border = "1px solid black";
  new NewGui("h4", stats.skills.magicField.name, "", upgrade3div.newElement);
  new NewGui("p", "damage +1", "", upgrade3div.newElement);
  new NewGui("p", "range +10", "", upgrade3div.newElement);

  const magicfieldButton = new NewGui("button", "upgrade", "", upgrade3div.newElement);
  magicfieldButton.newElement.addEventListener("click", (ev) => {
    magicFieldLvlUp();
    returnToGameAfterLvlup();
  });

  // lvlupButton.newElement.addEventListener("click", () => {
  //   returnToGameAfterLvlup();
  // });
}
