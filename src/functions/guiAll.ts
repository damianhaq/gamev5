import { gui } from "../app.js";
import { dimensions, stats } from "../variables.js";

export function guiAll() {
  gui.frame(
    10,
    dimensions.canvas.h - 100,
    dimensions.canvas.w - 20,
    20,
    "#1a73e8",
    2,
    true,
    "#fff"
  );

  gui.progressBar(
    1000,
    stats.player.currentXP,
    10,
    dimensions.canvas.h - 70,
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
