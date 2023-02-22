import { GUI } from "../classes/GUI.js";
import { dimensions, game, stats } from "../variables.js";

export function pause(gui: GUI) {
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
    d.y + 55,
    "Base damage: " + stats.player.baseDamage,
    d.fs,
    game.font.main,
    game.colors.blue,
    "left"
  );
}
