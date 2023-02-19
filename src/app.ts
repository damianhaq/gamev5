import { addGrass } from "./functions/addGrass.js";
import { Grass } from "./classes/Grass.js";
import { Player } from "./classes/Player.js";
import { dimensions, game } from "./variables.js";
import { drawMap } from "./functions/drawMap.js";
import { Enemy } from "./classes/Enemy.js";
import { drawPlayer } from "./functions/draw/drawPlayer.js";
import { drawEnemy } from "./functions/draw/drawEnemy.js";
import { drawGrass } from "./functions/draw/drawGrass.js";
import { Bullet } from "./classes/Bullet.js";
import { drawBullet } from "./functions/draw/drawBullet.js";
import { addEnemies } from "./functions/addEnemies.js";

const canvas: HTMLCanvasElement = document.querySelector("#canvas");
canvas.style.border = "1px dashed black";
const p: HTMLParagraphElement = document.querySelector("#log");

canvas.height = dimensions.canvas.h;
canvas.width = dimensions.canvas.w;
export const c: CanvasRenderingContext2D = canvas.getContext("2d");

// Add grass
const grassArray: Grass[] = addGrass(0, 0, dimensions.map.w, dimensions.map.h, 100);

//Bullet
export const bullets: Bullet[] = [];

//Enemy
addEnemies(1000, 100);
export const enemies: Enemy[] = [];
enemies.push(new Enemy(100, 100, 12, 0.5, 100));

// Player
const player: Player = new Player(canvas.width / 2, canvas.height / 2, 20, enemies);

//Animate
function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  drawMap(c);

  grassArray.forEach((el) => el.update(c, drawGrass));

  bullets.forEach((bullet, index) => {
    bullet.update(c, drawBullet);
    bullet.deleteIfOverMap(index);
    bullet.collisionEnemy(index);
  });

  player.update(c, drawPlayer);

  enemies.forEach((enemy, index) => {
    enemy.update(c, drawEnemy);
    enemy.moveTowardsPlayer(player);
    enemy.die(index);
  });

  if (!game.isGameOver) requestAnimationFrame(animate);
  p.innerHTML = `map: x${dimensions.map.x} y${dimensions.map.y}  player: x${player.x} y${player.y}  enemies ${enemies.length}`;
  // console.log(time);
}

animate();
