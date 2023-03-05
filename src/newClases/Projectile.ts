import { c, spriteSheet } from "../app.js";
import { calculateDistance } from "../functions/helpers.js";
import { dimensions, game, instances, stats } from "../variables.js";
import { EnemyCh } from "./extend/EnemyCh.js";

export class Projectile {
  showHitBox: boolean;
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public speed: number,
    public direction: { x: number; y: number },
    public dmg: number,
    public id: string,
    public targets: string[],
    public penetrationNumber: number = 1,
    public spriteSheetData
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.direction = direction;
    this.dmg = dmg;
    this.id = id;
    this.targets = targets;
    this.penetrationNumber = penetrationNumber;
    this.spriteSheetData = spriteSheetData;

    this.showHitBox = false;
    // this.isApplyBurn = isApplyBurn;

    // if (isApplyBurn) this.color = "#e42525";
  }

  update(deltaTime, index) {
    this.moving();
    this.deleteIfOverMap(index);
    this.draw();
    this.collisionEnemy(index);
  }

  draw() {
    const angle = (90 * Math.PI) / 180; // dodatkowy kąt w radianach
    const angleRadians = Math.atan2(this.direction.y, this.direction.x) + angle; // + kąt kierunku

    c.translate(this.x + dimensions.map.x, this.y + dimensions.map.y); // przesuń punkt obrotu do środka obrazka
    c.rotate(angleRadians);
    c.drawImage(
      spriteSheet,
      this.spriteSheetData.x,
      this.spriteSheetData.y,
      this.spriteSheetData.w,
      this.spriteSheetData.h,
      -this.spriteSheetData.w, // przesuń obrazek do lewej
      -this.spriteSheetData.h, // przesuń obrazek do góry
      this.spriteSheetData.w * 2,
      this.spriteSheetData.h * 2
    );
    c.rotate(-angleRadians); // przywróć pierwotny kąt obrotu
    c.translate(-this.x - dimensions.map.x, -this.y - dimensions.map.y); // przywróć pierwotne położenie punktu obrotu

    if (this.showHitBox) {
      c.beginPath();
      c.arc(
        this.x + dimensions.map.x,
        this.y + dimensions.map.y,
        this.radius,
        0,
        Math.PI * 2
      );
      c.stroke();
    }
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
      instances.projectiles.splice(index, 1);
    }
  }

  collisionEnemy(index: number) {
    if (this.targets.includes("enemyCh")) {
      instances.enemiesCh.forEach((enemy: EnemyCh) => {
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
            // enemy.getDamage(this.dmg,);

            enemy.getDamage(this.dmg, game.colors.blue, this.id);

            // if (this.isApplyBurn) {
            //   // enemy.buffTimeout = stats.skills.fireBall.burn.speed;
            //   // enemy.burnDamage = stats.skills.fireBall.burn.damage;
            //   // enemy.buffCount = stats.skills.fireBall.burn.times;
            // }

            stats.game.AllDamageDone += this.dmg;
            this.penetrationNumber--;
            if (this.penetrationNumber <= 0) {
              instances.projectiles.splice(index, 1);
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

    if (this.targets.includes("player")) {
      const distance: number = calculateDistance(
        instances.player.x,
        instances.player.y,
        instances.player.radius,
        this.x,
        this.y,
        this.radius
      );

      if (distance <= 0) {
        // console.log("player get damage");

        // enemy.getDamage(this.dmg, { id: this.id });
        instances.player.getDamage(this.dmg, game.colors.blue);

        // if (this.isApplyBurn) {
        //   enemy.buffTimeout = stats.skills.fireBall.burn.speed;
        //   enemy.burnDamage = stats.skills.fireBall.burn.damage;
        //   enemy.buffCount = stats.skills.fireBall.burn.times;
        // }

        this.penetrationNumber--;
        // stats.game.AllDamageDone += this.dmg;
        if (this.penetrationNumber <= 0) {
          instances.projectiles.splice(index, 1);
        }

        // knockback
        // enemy.setKnockback(this.x, this.y, 15, this.speed);
      }
    }
  }
}
