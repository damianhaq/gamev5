import { bullets, enemies } from "../app.js";
import { calculateDistance } from "../functions/helpers.js";
import { dimensions } from "../variables.js";
import { Enemy } from "./Enemy.js";
import { Sprite } from "./Sprite.js";

export class Bullet extends Sprite {
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public speed: number,
    public direction: { x: number; y: number },
    public dmg: number
  ) {
    super(x, y, radius);
    this.speed = speed;
    this.direction = direction;
    this.dmg = dmg;
  }

  moving(): void {
    this.x += this.direction.x * this.speed;
    this.y += this.direction.y * this.speed;
  }

  deleteIfOverMap(index: number) {
    if (
      this.x - this.radius < 0 ||
      this.x + this.radius > dimensions.map.w ||
      this.y - this.radius < 0 ||
      this.y + this.radius > dimensions.map.h
    ) {
      bullets.splice(index, 1);
    }
  }

  collisionEnemy(index: number) {
    enemies.forEach((enemy) => {
      const distance: number = calculateDistance(
        enemy.x,
        enemy.y,
        enemy.radius,
        this.x,
        this.y,
        this.radius
      );
      if (distance <= 0) {
        enemy.hp -= this.dmg;
        bullets.splice(index, 1);
        // if (enemy.hp <= 0) enemies.splice(index, 1);
      }
    });
  }
}
