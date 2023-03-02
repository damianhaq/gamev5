import { calculateDistance, collideCircleResolve } from "../functions/helpers.js";
// import { bullets, enemies } from "../functions/initial/playing.js";
import { dimensions, game, instances, stats } from "../variables.js";
import { Enemy } from "./Enemy.js";
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
    public target: string[],
    public penetrationNumber: number = 1,
    public isApplyBurn: boolean = false
  ) {
    super(x, y, radius);
    this.speed = speed;
    this.direction = direction;
    this.dmg = dmg;
    this.penetrationNumber = penetrationNumber;
    this.id = id;
    this.target = target;
    this.isApplyBurn = isApplyBurn;

    if (isApplyBurn) this.color = "#e42525";
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
    if (this.target.includes("enemyRange")) {
      instances.enemies.forEach((enemy: Enemy) => {
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
            enemy.getDamage(this.dmg, { id: this.id });

            if (this.isApplyBurn) {
              enemy.buffTimeout = stats.skills.fireBall.burn.speed;
              enemy.burnDamage = stats.skills.fireBall.burn.damage;
              enemy.buffCount = stats.skills.fireBall.burn.times;
            }

            this.penetrationNumber--;
            stats.game.AllDamageDone += this.dmg;
            if (this.penetrationNumber <= 0) {
              instances.bullets.splice(index, 1);
            }

            // knockback
            enemy.setKnockback(this.x, this.y, 15, this.speed);
          }
          // const { x, y } = collideCircleResolve(enemy, this);
          // this.x = x;
          // this.y = y;

          // enemy.hp -= this.dmg;
        }
      });
    }

    if (this.target.includes("player")) {
      const distance: number = calculateDistance(
        instances.player.x,
        instances.player.y,
        instances.player.radius,
        this.x,
        this.y,
        this.radius
      );

      if (distance <= 0) {
        console.log("player get damage");

        // enemy.getDamage(this.dmg, { id: this.id });
        instances.player.getDamage(this.dmg);

        // if (this.isApplyBurn) {
        //   enemy.buffTimeout = stats.skills.fireBall.burn.speed;
        //   enemy.burnDamage = stats.skills.fireBall.burn.damage;
        //   enemy.buffCount = stats.skills.fireBall.burn.times;
        // }

        this.penetrationNumber--;
        // stats.game.AllDamageDone += this.dmg;
        if (this.penetrationNumber <= 0) {
          instances.bullets.splice(index, 1);
        }

        // knockback
        // enemy.setKnockback(this.x, this.y, 15, this.speed);
      }
    }
  }
}
