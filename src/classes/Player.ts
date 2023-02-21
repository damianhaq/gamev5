import { controls } from "../functions/controls.js";
import { gameOver } from "../functions/gameOver.js";
import { calculateDirection } from "../functions/helpers.js";
import { dimensions, game, instances, keys } from "../variables.js";
import { Bullet } from "./Bullet.js";
import { Enemy } from "./Enemy.js";
import { Sprite } from "./Sprite.js";

export class Player extends Sprite {
  speed: number;
  attackSpeed: number;
  grabItemRange: number;
  constructor(x: number, y: number, radius: number, public enemies: Enemy[]) {
    super(x, y, radius);
    this.speed = 2;
    this.enemies = enemies;
    this.attackSpeed = 500;
    this.hp = 100;
    this.maxHP = 100;
    this.immuneTime = 100;
    this.grabItemRange = 100;

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
    let iid: number;
    if (!iid) {
      iid = setInterval(() => {
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
          instances.bullets.push(new Bullet(this.x, this.y, 5, 2, direction, 10));
        }
        if (game.isGameOver) {
          clearInterval(iid);
          iid = null;
        }
      }, this.attackSpeed);
    }
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

  getDamage(value: number, from: Sprite) {
    this.hp -= value;
    this.isImmune = true;
    setTimeout(() => {
      this.isImmune = false;
    }, this.immuneTime);
  }

  die() {
    if (this.hp <= 0) {
      gameOver();
    }
  }
}
