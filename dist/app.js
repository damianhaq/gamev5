import { Player } from "./classes/Player.js";
import { dimensions, game, stats } from "./variables.js";
import { drawMap } from "./functions/drawMap.js";
import { addEnemies } from "./functions/addEnemies.js";
import { drawCircle } from "./functions/draw/drawCircle.js";
import { camera } from "./functions/camera.js";
import { addGrass } from "./functions/addGrass.js";
import { drawGrass } from "./functions/draw/drawGrass.js";
import { GUI } from "./classes/GUI.js";
import { guiAll } from "./functions/guiAll.js";
const canvas = document.querySelector("#canvas");
canvas.style.border = "1px dashed black";
const p = document.querySelector("#log");
canvas.height = dimensions.canvas.h;
canvas.width = dimensions.canvas.w;
export const c = canvas.getContext("2d");
console.log("devicePixelRatio: " + window.devicePixelRatio);
console.log("canvas size: " + canvas.width + " x " + canvas.height);
console.log("canvas style size: " + canvas.style.width + "px x " + canvas.style.height + "px");
canvas.width = Math.floor(dimensions.canvas.w * window.devicePixelRatio);
canvas.height = Math.floor(dimensions.canvas.h * window.devicePixelRatio);
canvas.style.width = dimensions.canvas.w + "px";
canvas.style.height = dimensions.canvas.h + "px";
c.scale(window.devicePixelRatio, window.devicePixelRatio);
// Add grass
export const grassArray = addGrass(dimensions.map.w, dimensions.map.h, 100);
//Bullet
export const bullets = [];
//Enemy
addEnemies(1000, 100);
export const enemies = [];
// enemies.push(new Enemy(100, 100, 12, 0.5, 100));
// ExpBalls
export const expBalls = [];
// Player
export const player = new Player(300, 300, 20, enemies);
// GUI
export const gui = new GUI(c);
//Animate
function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    gameLoop();
    guiAll();
    requestAnimationFrame(animate);
    // Dev
    p.innerHTML = `map: x${dimensions.map.x} y${dimensions.map.y}  player: x${player.x} y${player.y}  enemies ${enemies.length}  expBalls${expBalls.length}  bullets${bullets.length}  lvl ${stats.player.lvl}`;
}
animate();
function gameLoop() {
    if (game.isGameOver)
        return;
    camera(player);
    drawMap(c);
    grassArray.forEach((el) => el.update(c, drawGrass));
    bullets.forEach((bullet, index) => {
        bullet.update(c, drawCircle);
        bullet.deleteIfOverMap(index);
        bullet.collisionEnemy(index);
    });
    player.update(c, drawCircle);
    enemies.forEach((enemy, index) => {
        enemy.update(c, drawCircle);
        enemy.moveTowardsPlayer(player);
        enemy.die(index);
        enemy.collideEnemies(enemies, index);
    });
    expBalls.forEach((exp, index) => {
        exp.update(c, drawCircle);
        exp.moveToPlayer(index, expBalls);
    });
}
