import { dimensions, game, instances, keys, stats } from "./variables.js";
import { GUI } from "./classes/GUI.js";
import { playing } from "./functions/loops/playing.js";
import { loadPlaying } from "./functions/initial/loadPlaying.js";
import { controls } from "./functions/controls.js";
import { interfaceDiv } from "./functions/initial/interfaceDiv.js";
import { lvlUpDiv } from "./functions/initial/lvlUpDiv.js";
import { gameOverDiv } from "./functions/initial/gameOverDiv.js";
import { interfaceDivUpdate } from "./functions/loops/interfaceDivUpdate.js";
import { pauseDivInitial } from "./functions/initial/pauseDivInitial.js";

export const canvas: HTMLCanvasElement = document.querySelector("#canvas");
const p: HTMLParagraphElement = document.querySelector("#log");
export const guiDiv: HTMLDivElement = document.querySelector("#gui");
export const lvlupDiv: HTMLDivElement = document.querySelector("#lvlup");
export const gameoverDiv: HTMLDivElement = document.querySelector("#gameover");
export const pauseDiv: HTMLDivElement = document.querySelector("#pause");

export const newGameButton: HTMLButtonElement = document.querySelector("#newGame");

canvas.height = dimensions.canvas.h;
canvas.width = dimensions.canvas.w;
export const c: CanvasRenderingContext2D = canvas.getContext("2d");

canvas.style.width = dimensions.canvas.sw;
canvas.style.height = dimensions.canvas.sh;

c.scale(window.devicePixelRatio, window.devicePixelRatio);

// GUI
export const gui: GUI = new GUI(c);
controls();
lvlUpDiv();
// interfaceDiv();
interfaceDiv();
export const [golvl, goadd, goek] = gameOverDiv();
export const [
  add,
  lvl,
  up,
  hr,
  bd,
  as,
  pn,
  cbd,
  cbs,
  cbr,
  cbns,
  mysticalSpheresDiv,
  cbl,
  fireBallDiv,
  fbl,
  fbd,
  fbms,
  fbas,
  fbpn,
  fbbd,
  magicFieldDiv,
  mfl,
  mfd,
  mfas,
  mfr,
  ek,
] = pauseDivInitial();

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

      // canvas.style.width = canvas.style.width === "0px" ? "1200px" : "0px";
      game.pauseFlag = false;

      if (!game.isPause) {
        interfaceDivUpdate();
        game.isPause = true;
        pauseDiv.style.display = "flex";
      } else {
        game.isPause = false;
        pauseDiv.style.display = "none";
      }
    } else if (!keys.escape && !game.pauseFlag) {
      game.pauseFlag = true;
      console.log("test");
    }

    playing();
  }
  if (game.isPause) {
    // Gray screen
    // gui.pauseRect();
    // pauseGui(gui);
  }

  if (game.gameState === "lvlup") {
    playing();
  }
  if (game.gameState === "gameOver") {
    golvl.update(stats.player.lvl);
    goadd.update(stats.game.AllDamageDone);
    goek.update(stats.game.enemiesKilled);
  }

  requestAnimationFrame(animate);
}

animate();
