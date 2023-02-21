import { dimensions, game } from "../../variables.js";
import { newGame } from "../newGame.js";
export function mainMenu(gui) {
    gui.text(dimensions.canvas.w / 2, dimensions.canvas.h / 2, "Game", 20, game.font.main, game.colors.blue);
    gui.button(dimensions.canvas.w / 2 - 50, dimensions.canvas.h / 2 + 100, 100, 40, "New Game", game.font.main, game.colors.blue, "#fff", game.colors.blue, game.colors.blue, 2, newGame);
}
