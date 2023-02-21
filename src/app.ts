import { dimensions, game, instances, stats } from "./variables.js";

import { GUI } from "./classes/GUI.js";
import { guiAll } from "./functions/guiAll.js";

import { mainMenu } from "./functions/loops/mainMenu.js";
import { playing } from "./functions/loops/playing.js";
import { loadPlaying } from "./functions/initial/loadPlaying.js";
import { controls } from "./functions/controls.js";

const canvas: HTMLCanvasElement = document.querySelector("#canvas");
canvas.style.border = "1px dashed black";
const p: HTMLParagraphElement = document.querySelector("#log");

canvas.height = dimensions.canvas.h;
canvas.width = dimensions.canvas.w;
export const c: CanvasRenderingContext2D = canvas.getContext("2d");

canvas.width = Math.floor(dimensions.canvas.w * window.devicePixelRatio);
canvas.height = Math.floor(dimensions.canvas.h * window.devicePixelRatio);

canvas.style.width = dimensions.canvas.w + "px";
canvas.style.height = dimensions.canvas.h + "px";

c.scale(window.devicePixelRatio, window.devicePixelRatio);

// GUI
export const gui: GUI = new GUI(c);
controls();

//Animate
function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  if (game.gameState === "mainMenu") {
    mainMenu(gui);
    // Dev
    p.innerHTML = `gameState: ${game.gameState}  `;
  }

  if (game.gameState === "playing") {
    if (game.initialPlayingFlag) {
      game.initialPlayingFlag = false;
      loadPlaying();
      console.log(instances);
    }
    playing();
  }

  guiAll();

  requestAnimationFrame(animate);
}

animate();
