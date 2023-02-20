import { gui } from "../app.js";
import { dimensions, stats } from "../variables.js";

export function guiAll() {
  // expbar
  gui.progressBar(
    stats.player.maxXP,
    stats.player.currentXP,
    10,
    dimensions.canvas.h - 30,
    dimensions.canvas.w - 20,
    20,
    "#1a73e8",
    2,
    true,
    "#fff",
    "#0098ff",
    "#1a73e8"
  );
}
