import { Player } from "./classes/Player.js";
import { dimensions, game } from "./variables.js";
import { drawMap } from "./functions/drawMap.js";
import { Enemy } from "./classes/Enemy.js";
import { addEnemies } from "./functions/addEnemies.js";
import { drawCircle } from "./functions/draw/drawCircle.js";
import { camera } from "./functions/camera.js";
import { addGrass } from "./functions/addGrass.js";
import { drawGrass } from "./functions/draw/drawGrass.js";
const canvas = document.querySelector("#canvas");
canvas.style.border = "1px dashed black";
const p = document.querySelector("#log");
canvas.height = dimensions.canvas.h;
canvas.width = dimensions.canvas.w;
export const c = canvas.getContext("2d");
// Add grass
const grassArray = addGrass(dimensions.map.w, dimensions.map.h, 100);
//Bullet
export const bullets = [];
//Enemy
addEnemies(1000, 100);
export const enemies = [];
enemies.push(new Enemy(100, 100, 12, 0.5, 100));
// ExpBalls
export const expBalls = [];
// Player
const player = new Player(300, 300, 20, enemies);
//Animate
function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
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
    expBalls.forEach((exp) => {
        exp.update(c, drawCircle);
    });
    if (!game.isGameOver)
        requestAnimationFrame(animate);
    p.innerHTML = `map: x${dimensions.map.x} y${dimensions.map.y}  player: x${player.x} y${player.y}  enemies ${enemies.length}  expBalls${expBalls.length}`;
}
animate();
