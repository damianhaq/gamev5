import { addGrass } from "./functions/addGrass.js";
import { Player } from "./classes/Player.js";
import { dimensions } from "./variables.js";
import { drawMap } from "./functions/drawMap.js";
import { Enemy } from "./classes/Enemy.js";
import { drawPlayer } from "./functions/draw/drawPlayer.js";
import { drawEnemy } from "./functions/draw/drawEnemy.js";
import { drawGrass } from "./functions/draw/drawGrass.js";
import { drawBullet } from "./functions/draw/drawBullet.js";
const canvas = document.querySelector("#canvas");
canvas.style.border = "1px dashed black";
const p = document.querySelector("#log");
canvas.height = dimensions.canvas.h;
canvas.width = dimensions.canvas.w;
const c = canvas.getContext("2d");
// Add grass
const grassArray = addGrass(0, 0, dimensions.map.w, dimensions.map.h, 100);
//Bullet
export const bullets = [];
//Enemy
const enemies = [];
enemies.push(new Enemy(100, 100, 12, 0.5));
// const enemy: Enemy = new Enemy(100, 100, 12, 0.5);
// Player
const player = new Player(canvas.width / 2, canvas.height / 2, 20, enemies);
//Animate
function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawMap(c);
    grassArray.forEach((el) => el.update(c, drawGrass));
    bullets.forEach((el, index) => {
        el.update(c, drawBullet);
        el.deleteIfOverMap(index);
    });
    player.update(c, drawPlayer);
    enemies.forEach((enemy) => {
        enemy.update(c, drawEnemy);
        enemy.moveTowardsPlayer(player);
    });
    requestAnimationFrame(animate);
    p.innerHTML = `map: x${dimensions.map.x} y${dimensions.map.y}  player: x${player.x} y${player.y}`;
    // console.log(time);
}
animate();
