import { dimensions, game, instances, keys, stats } from "./variables.js";

import { GUI } from "./classes/GUI.js";

import { mainMenu } from "./functions/loops/mainMenu.js";
import { playing } from "./functions/loops/playing.js";
import { loadPlaying } from "./functions/initial/loadPlaying.js";
import { controls } from "./functions/controls.js";
import { pauseGui } from "./functions/GUIs/pauseGui.js";
import { interfaceDiv } from "./functions/initial/interfaceDiv.js";
import { lvlUpDiv } from "./functions/initial/lvlUpDiv.js";
import { gameOverDiv } from "./functions/initial/gameOverDiv.js";

export const canvas: HTMLCanvasElement = document.querySelector("#canvas");
// canvas.style.border = "1px dashed black";
const p: HTMLParagraphElement = document.querySelector("#log");
const divInterface: HTMLDivElement = document.querySelector("#divInterface");
export const lvlUpDivElement: HTMLDivElement = document.querySelector("#divLvlUp");
export const gameOverDivElement: HTMLDivElement = document.querySelector("#gameOver");
export const newGameButton: HTMLButtonElement = document.querySelector("#newGame");

canvas.height = dimensions.canvas.h;
canvas.width = dimensions.canvas.w;
export const c: CanvasRenderingContext2D = canvas.getContext("2d");

canvas.width = Math.floor(dimensions.canvas.w * window.devicePixelRatio);
canvas.height = Math.floor(dimensions.canvas.h * window.devicePixelRatio);

canvas.style.width = 0 + "px";
canvas.style.height = dimensions.canvas.h + "px";

c.scale(window.devicePixelRatio, window.devicePixelRatio);

// GUI
export const gui: GUI = new GUI(c);
controls();
lvlUpDiv();
interfaceDiv(divInterface, canvas);
gameOverDiv();

//Animate
function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  if (game.gameState === "playing") {
    if (game.initialPlayingFlag) {
      //execute once
      game.initialPlayingFlag = false;
      loadPlaying();
    }

    // PAUSE
    if (keys.escape && game.pauseFlag) {
      // execute once
      console.log(instances);

      canvas.style.width = canvas.style.width === "0px" ? "1200px" : "0px";
      game.pauseFlag = false;

      // Pause on = instant, pause off = delay
      if (!game.isPause) {
        game.isPause = true;
      } else {
        setTimeout(() => {
          game.isPause = false;
        }, 300);
      }
    } else if (!keys.escape && !game.pauseFlag) {
      game.pauseFlag = true;
    }

    playing();
  }
  if (game.isPause) {
    // Gray screen
    gui.pauseRect();

    // pauseGui(gui);
  }

  if (game.gameState === "lvlup") {
    playing();
  }
  if (game.gameState === "gameOver") {
  }

  requestAnimationFrame(animate);
}

animate();
