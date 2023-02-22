import { GUI } from "../classes/GUI.js";
import { dimensions, game, stats } from "../variables.js";

export function pauseGui(gui: GUI) {
  gui.frame(
    50,
    100,
    dimensions.canvas.w - 100,
    dimensions.canvas.h - 150,
    game.colors.blue,
    2,
    true,
    "#fff"
  );

  gui.text(
    dimensions.canvas.w / 2,
    200,
    "Upgrade points: " + stats.player.upgradePoints,
    20,
    game.font.main,
    game.font.main
  );

  gui.button(
    dimensions.canvas.w - 100,
    120,
    30,
    30,
    "X",
    game.font.main,
    game.colors.blue,
    "#fff",
    "#fff",
    game.colors.blue,
    2,
    () => (game.isPause = false)
  );

  gui.text(
    dimensions.canvas.w / 2,
    150,
    "Statistics",
    20,
    game.font.main,
    game.colors.blue
  );

  const d = {
    x: 60,
    y: 200,
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
