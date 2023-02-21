import { bullets, enemies, expBalls, grassArray } from "../app.js";
export function gameOver() {
    enemies.length = 0;
    bullets.length = 0;
    expBalls.length = 0;
    grassArray.length = 0;
}
