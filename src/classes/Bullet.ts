import { calculateDistance } from "../functions/helpers.js";
// import { bullets, enemies } from "../functions/initial/playing.js";
import { dimensions, game, instances } from "../variables.js";
import { Sprite } from "./Sprite.js";

export class Bullet extends Sprite {
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public speed: number,
    public direction: { x: number; y: number },
    public dmg: number,
    public id: string,
    public penetrationNumber: number = 1
  ) {
    super(x, y, radius);
    this.speed = speed;
    this.direction = direction;
    this.dmg = dmg;
    this.penetrationNumber = penetrationNumber;
    this.id = id;
  }

  moving(): void {
    if (!game.isPause) {
      this.x += this.direction.x * this.speed;
      this.y += this.direction.y * this.speed;
    }
  }

  deleteIfOverMap(index: number) {
    if (
      this.x - this.radius < 0 ||
      this.x + this.radius > dimensions.map.w ||
      this.y - this.radius < 0 ||
      this.y + this.radius > dimensions.map.h
    ) {
      instances.bullets.splice(index, 1);
    }
  }

  collisionEnemy(index: number) {
    instances.enemies.forEach((enemy) => {
      const distance: number = calculateDistance(
        enemy.x,
        enemy.y,
        enemy.radius,
        this.x,
        this.y,
        this.radius
      );
      if (distance <= 0) {
        if (!enemy.immuneProjectilesId.includes(this.id)) {
          enemy.getDamage(this.dmg, this.id);
          this.penetrationNumber--;
          if (this.penetrationNumber <= 0) {
            instances.bullets.splice(index, 1);
          }
        }

        // enemy.hp -= this.dmg;
      }
    });
  }
}
