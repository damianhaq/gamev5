// import { enemies, bullets, expBalls, grassArray } from "./initial/playing.js";
import { gameoverDiv, newGameButton } from "../app.js";
import { game } from "../variables.js";
export function gameOver() {
    game.isGameOver = true;
    game.gameState = "gameOver";
    game.initialPlayingFlag = true;
    // canvas.style.width = "0";
    gameoverDiv.style.display = "inline-block";
    // gameOverDivElement.style.flexGrow = "1";
    newGameButton.style.display = "inline";
}
