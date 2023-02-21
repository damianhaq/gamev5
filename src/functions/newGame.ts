import { game } from "../variables.js";

export function newGame() {
  game.gameState = "playing";
  game.isGameOver = false;
}
