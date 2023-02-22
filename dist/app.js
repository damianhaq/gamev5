import { dimensions, game, keys } from "./variables.js";
import { GUI } from "./classes/GUI.js";
import { mainMenu } from "./functions/loops/mainMenu.js";
import { playing } from "./functions/loops/playing.js";
import { loadPlaying } from "./functions/initial/loadPlaying.js";
import { controls } from "./functions/controls.js";
import { pause } from "./functions/pause.js";
const canvas = document.querySelector("#canvas");
canvas.style.border = "1px dashed black";
const p = document.querySelector("#log");
canvas.height = dimensions.canvas.h;
canvas.width = dimensions.canvas.w;
export const c = canvas.getContext("2d");
canvas.width = Math.floor(dimensions.canvas.w * window.devicePixelRatio);
canvas.height = Math.floor(dimensions.canvas.h * window.devicePixelRatio);
canvas.style.width = dimensions.canvas.w + "px";
canvas.style.height = dimensions.canvas.h + "px";
c.scale(window.devicePixelRatio, window.devicePixelRatio);
// GUI
export const gui = new GUI(c);
controls();
//Animate
function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    if (game.gameState === "mainMenu") {
        mainMenu(gui);
    }
    if (game.gameState === "playing") {
        if (game.initialPlayingFlag) {
            //execute once
            game.initialPlayingFlag = false;
            loadPlaying();
        }
        if (keys.escape && game.pauseFlag) {
            game.pauseFlag = false;
            game.isPause = !game.isPause;
        }
        else if (!keys.escape && !game.pauseFlag) {
            game.pauseFlag = true;
        }
        playing();
        if (game.isPause) {
            pause(gui);
        }
    }
    requestAnimationFrame(animate);
}
animate();
