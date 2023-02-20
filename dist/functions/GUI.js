import { gui } from "../app.js";
import { dimensions } from "../variables.js";
export function guiAll() {
    gui.frame(10, dimensions.canvas.h - 100, dimensions.canvas.w - 20, 20, "#1a73e8", 2, true, "#fff");
}
