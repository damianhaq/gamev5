// import { gameOverDivElement } from "../../app.js";
// import { addHtmlElement } from "../helpers.js";
import { gameoverDiv } from "../../app.js";
import { NewGui } from "../../classes/NewGui.js";
import { stats } from "../../variables.js";
import { returnToGameAfterLvlup } from "../returnToGameAfterLvlup.js";

export function gameOverDiv() {
  new NewGui("h3", "Game over", "", gameoverDiv);

  const lvl = new NewGui("p", "Lvl: ", stats.player.lvl, gameoverDiv);
  const add = new NewGui("p", "All damage done:", stats.game.AllDamageDone, gameoverDiv);
  const ek = new NewGui("p", "Enemies killed: ", stats.game.enemiesKilled, gameoverDiv);

  return [lvl, add, ek];
}
