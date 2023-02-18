import { addGrass } from "./functions/addGrass.js";
import { Player } from "./classes/Player.js";
import { controlls } from "./functions/controls.js";
const canvas = document.querySelector("#canvas");
canvas.height = 600;
canvas.width = 800;
const c = canvas.getContext("2d");
controlls();
// Add grass
const grassArray = addGrass(0, 0, canvas.width, canvas.height, 10);
// Player
const player = new Player(canvas.width / 2, canvas.height / 2, 20);
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
