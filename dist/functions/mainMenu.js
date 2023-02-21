import { dimensions, game } from "../variables.js";
export function mainMenu(gui) {
    gui.text(dimensions.canvas.w / 2, dimensions.canvas.h / 2, "Gra", 20, game.font.main, game.colors.blue);
}
