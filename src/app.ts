import { addGrass } from "./functions/addGrass.js";
import { Grass } from "./classes/Grass.js";
import { Player } from "./classes/Player.js";
import { controls } from "./functions/controls.js";
import { dimensions } from "./variables.js";

const canvas: HTMLCanvasElement = document.querySelector("#canvas");
canvas.height = dimensions.canvas.h;
canvas.width = dimensions.canvas.w;
const c: CanvasRenderingContext2D = canvas.getContext("2d");

// Add grass
const grassArray: Grass[] = addGrass(0, 0, dimensions.map.w, dimensions.map.h, 100);

// Player
const player: Player = new Player(canvas.width / 2, canvas.height / 2, 20);

//Animate
function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.rect(0, 0, canvas.width, canvas.height);
  c.stroke();

  grassArray.forEach((el) => el.update(c));
  player.update(c);

  requestAnimationFrame(animate);
}

animate();
