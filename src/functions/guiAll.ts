import { gui } from "../app.js";
import { dimensions, game, stats } from "../variables.js";
import { drawText } from "./draw/drawText.js";

export function guiAll() {
  // expbar
  gui.progressBar(
    stats.player.maxXP,
    stats.player.currentXP,
    game.font.main,
    10,
    10,
    dimensions.canvas.w - 20,
    20,
    game.colors.blue,
    2,
    true,
    "#fff",
    game.colors.blue2,
    game.colors.blue
  );

  gui.frame(dimensions.canvas.w - 80, 35, 70, 37, game.colors.blue, 2, false, "");
  gui.text(
    dimensions.canvas.w - 30,
    70,
    `${stats.player.lvl}`,
    17,
    game.font.main,
    game.colors.blue
  );
  gui.text(dimensions.canvas.w - 54, 68, `Lvl`, 14, game.font.main, game.colors.blue);
}
