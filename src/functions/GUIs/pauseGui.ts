import { GUI } from "../../classes/GUI.js";
import { dimensions, game, stats } from "../../variables.js";
import { upgradeGui } from "./upgradeGui.js";

export function pauseGui(gui: GUI) {
  // Main frame
  gui.frame(
    50,
    50,
    dimensions.canvas.w - 100,
    dimensions.canvas.h - 100,
    game.colors.blue,
    2,
    true,
    "#fff"
  );
  if (stats.player.upgradePoints > 0) upgradeGui(gui);

  // Title
  gui.text(
    dimensions.canvas.w / 2,
    150,
    "Upgrade points: " + stats.player.upgradePoints,
    20,
    game.font.main,
    game.font.main
  );

  // Exit button
  // gui.button(
  //   dimensions.canvas.w - 100,
  //   70,
  //   30,
  //   30,
  //   "X",
  //   game.font.main,
  //   game.colors.blue,
  //   "#fff",
  //   "#fff",
  //   game.colors.blue,
  //   2,
  //   exitButton
  // );

  // function exitButton() {
  //   console.log("powinno sie wykonać raz exit button");

  //   game.isPause = false;
  //   stats.skills.upgrade.executeOnceFlag = true;
  // }

  gui.text(
    dimensions.canvas.w / 2,
    100,
    "Statistics",
    20,
    game.font.main,
    game.colors.blue
  );

  const d = {
    x: 60,
    y: 150,
    w: 300,
    h: dimensions.canvas.h - 260,
    fs: 14,
    textHeight: 25,
  };

  gui.frame(d.x, d.y, d.w, d.h, game.colors.blue, 2, true, "#fff");
  gui.text(
    d.x + 10,
    d.y + 30,
    "Hp: " + stats.player.maxHP,
    d.fs,
    game.font.main,
    game.colors.blue,
    "left"
  );
  gui.text(
    d.x + 10,
    d.y + 30 + d.textHeight,
    "Base damage: " + stats.player.baseDamage,
    d.fs,
    game.font.main,
    game.colors.blue,
    "left"
  );
  gui.text(
    d.x + 10,
    d.y + 30 + d.textHeight * 2,
    "Dmg Done: " + stats.game.AllDamageDone,
    d.fs,
    game.font.main,
    game.colors.blue,
    "left"
  );
}
