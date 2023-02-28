// import { addHtmlElement } from "../helpers.js";
import { gui, guiDiv, pauseDiv } from "../../app.js";
import { NewGui } from "../../classes/NewGui.js";
import { stats } from "../../variables.js";
import { returnToGameAfterLvlup } from "../returnToGameAfterLvlup.js";

export function pauseDivInitial() {
  new NewGui("h1", "Pause", "", pauseDiv);

  const statsDiv = new NewGui("div", "", "", pauseDiv);
  statsDiv.newElement.style.border = "1px solid black";
  const lvl = new NewGui("p", "Lvl: ", stats.player.lvl, statsDiv.newElement);
  const up = new NewGui(
    "p",
    "Upgrade points:",
    stats.player.upgradePoints,
    statsDiv.newElement
  );
  const hr = new NewGui("p", "Hp regen: ", stats.player.hpRegen, statsDiv.newElement);

  const add = new NewGui(
    "p",
    "All damage done: ",
    stats.game.AllDamageDone,
    statsDiv.newElement
  );
  const ek = new NewGui(
    "p",
    "Enemies killed: ",
    stats.game.enemiesKilled,
    statsDiv.newElement
  );

  // Base attack
  const baseAttackDiv = new NewGui("div", "", "", pauseDiv);
  baseAttackDiv.newElement.style.border = "1px solid black";
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
  mysticalSpheresDiv.newElement.style.border = "1px solid black";
  let cbd;
  let cbs;
  let cbr;
  let cbns;
  // if (stats.skills.circlingBalls.lvl !== 0) {
  const cbl = new NewGui(
    "h3",
    stats.skills.circlingBalls.name,
    stats.skills.circlingBalls.lvl,
    mysticalSpheresDiv.newElement
  );
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

  // Fire ball
  const fireBallDiv = new NewGui("div", "", "", pauseDiv);
  fireBallDiv.newElement.style.border = "1px solid black";

  const fbl = new NewGui(
    "h3",
    stats.skills.fireBall.name,
    stats.skills.fireBall.lvl,
    fireBallDiv.newElement
  );
  const fbd = new NewGui(
    "p",
    "Damage: ",
    stats.skills.fireBall.damage,
    fireBallDiv.newElement
  );
  const fbms = new NewGui(
    "p",
    "Movement speed: ",
    stats.skills.fireBall.movementSpeed,
    fireBallDiv.newElement
  );
  const fbas = new NewGui(
    "p",
    "Attack speed: ",
    stats.skills.fireBall.attackSpeed,
    fireBallDiv.newElement
  );
  const fbpn = new NewGui(
    "p",
    "Penetration number: ",
    stats.skills.fireBall.penetrationNumber,
    fireBallDiv.newElement
  );
  const fbbd = new NewGui(
    "p",
    "Burn damage: ",
    `${stats.skills.fireBall.burn.damage} (x5)`,
    fireBallDiv.newElement
  );

  //  Magic Field
  const magicFieldDiv = new NewGui("div", "", "", pauseDiv);
  magicFieldDiv.newElement.style.border = "1px solid black";

  const mfl = new NewGui(
    "h3",
    stats.skills.magicField.name,
    stats.skills.magicField.lvl,
    magicFieldDiv.newElement
  );
  const mfd = new NewGui(
    "p",
    "Damage: ",
    stats.skills.magicField.damage,
    magicFieldDiv.newElement
  );

  const mfas = new NewGui(
    "p",
    "Attack speed: ",
    stats.skills.magicField.attackSpeed,
    magicFieldDiv.newElement
  );

  const mfr = new NewGui(
    "p",
    "Range: ",
    stats.skills.magicField.radius,
    magicFieldDiv.newElement
  );

  return [
    add,
    lvl,
    up,
    hr,
    bd,
    as,
    pn,
    cbd,
    cbs,
    cbr,
    cbns,
    mysticalSpheresDiv,
    cbl,
    fireBallDiv,
    fbl,
    fbd,
    fbms,
    fbas,
    fbpn,
    fbbd,
    magicFieldDiv,
    mfl,
    mfd,
    mfas,
    mfr,
    ek,
  ];
}
