import { bullets, c } from "../app.js";
import { controls } from "../functions/controls.js";
import { calculateDirection } from "../functions/helpers.js";
import { dimensions, game, keys } from "../variables.js";
import { Bullet } from "./Bullet.js";
import { Enemy } from "./Enemy.js";
import { Sprite } from "./Sprite.js";

export class Player extends Sprite {
  speed: number;
  attackSpeed: number;
  constructor(x: number, y: number, radius: number, public enemies: Enemy[]) {
    super(x, y, radius);
    this.speed = 1;
    this.enemies = enemies;
    this.attackSpeed = 500;
    this.hp = 100;

    controls();
    this.shoot();
  }

  moving() {
    if (keys.a && !this.isCollideBorderMap("left")) {
      this.x -= this.speed;
    } else if (keys.d && !this.isCollideBorderMap("right")) {
      this.x += this.speed;
    }

    if (keys.w && !this.isCollideBorderMap("up")) {
      this.y -= this.speed;
    } else if (keys.s && !this.isCollideBorderMap("bot")) {
      this.y += this.speed;
    }

    this.die();
  }

  shoot() {
    const iid = setInterval(() => {
      if (this.enemies.length > 0) {
        const nearestEnemy: Enemy = this.findNearestEnemy();

        // draw line to nearest enemy
        // drawLine(this.x, this.y, nearestEnemy.x, nearestEnemy.y, "#007acc", c);

        const direction = calculateDirection(
          this.x,
          this.y,
          nearestEnemy.x,
          nearestEnemy.y
        );
        bullets.push(new Bullet(this.x, this.y, 5, 1, direction, 10));
      }
    }, this.attackSpeed);
  }

  findNearestEnemy(): Enemy | null {
    let nearestEnemy: Enemy | null = null;
    let nearestDistance = Number.MAX_VALUE;

    for (const enemy of this.enemies) {
      const distance: number = Math.sqrt(
        (enemy.x - this.x) ** 2 + (enemy.y - this.y) ** 2
      );

      if (distance < nearestDistance) {
        nearestEnemy = enemy;
        nearestDistance = distance;
      }
    }
    return nearestEnemy;
  }

  isCollideBorderMap(side: "left" | "right" | "up" | "bot"): boolean {
    switch (side) {
      case "left":
        if (this.x - this.radius <= 0) return true;
        break;
      case "right":
        if (this.x + this.radius >= dimensions.map.w) return true;
        break;
      case "up":
        if (this.y - this.radius <= 0) return true;
        break;
      case "bot":
        if (this.y + this.radius >= dimensions.map.h) return true;
        break;
    }
  }

  die() {
    if (this.hp <= 0) {
      game.isGameOver = true;
    }
  }
}
