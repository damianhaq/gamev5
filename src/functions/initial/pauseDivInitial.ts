// import { addHtmlElement } from "../helpers.js";
import { gui, guiDiv, pauseDiv } from "../../app.js";
import { NewGui } from "../../classes/NewGui.js";
import { stats } from "../../variables.js";
import { returnToGameAfterLvlup } from "../returnToGameAfterLvlup.js";

export function pauseDivInitial() {
  new NewGui("h1", "Pause", "", pauseDiv);

  const lvl = new NewGui("p", "Lvl: ", stats.player.lvl, pauseDiv);
  const up = new NewGui("p", "Upgrade points:", stats.player.upgradePoints, pauseDiv);
  const hr = new NewGui("p", "Hp regen: ", stats.player.hpRegen, pauseDiv);

  const add = new NewGui("p", "All damage done: ", stats.game.AllDamageDone, pauseDiv);

  // Base attack
  const baseAttackDiv = new NewGui("div", "", "", pauseDiv);
  new NewGui("h3", "Base attack", "", baseAttackDiv.newElement);
  const bd = new NewGui(
    "p",
    "Damage: ",
    stats.player.baseDamage,
    baseAttackDiv.newElement
  );
  const as = new NewGui(
    "p",
    "Attack speed: ",
    stats.skills.baseAttack.speed,
    baseAttackDiv.newElement
  );
  const pn = new NewGui(
    "p",
    "Penetration number: ",
    stats.skills.baseAttack.penetrationNumber,
    baseAttackDiv.newElement
  );

  // Mystical Spheres
  const mysticalSpheresDiv = new NewGui("div", "", "", pauseDiv);
  let cbd;
  let cbs;
  let cbr;
  let cbns;
  // if (stats.skills.circlingBalls.lvl !== 0) {
  new NewGui("h3", "", stats.skills.circlingBalls.name, mysticalSpheresDiv.newElement);
  cbd = new NewGui(
    "p",
    "Damage: ",
    stats.skills.circlingBalls.damage,
    mysticalSpheresDiv.newElement
  );
  cbs = new NewGui(
    "p",
    "Speed: ",
    stats.skills.circlingBalls.speed,
    mysticalSpheresDiv.newElement
  );
  cbr = new NewGui(
    "p",
    "Range: ",
    stats.skills.circlingBalls.radius,
    mysticalSpheresDiv.newElement
  );
  cbns = new NewGui(
    "p",
    "Number spheres: ",
    stats.skills.circlingBalls.numberBalls,
    mysticalSpheresDiv.newElement
  );
  // }
  // new NewGui("p", "Damage: ", stats.player.baseDamage, guiDiv);
  return [add, lvl, up, hr, bd, as, pn, cbd, cbs, cbr, cbns, mysticalSpheresDiv];
}
