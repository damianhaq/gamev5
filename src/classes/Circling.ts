import { c, spriteSheet } from "../app.js";
import { drawLine } from "../functions/draw/drawLine.js";
import { drawText } from "../functions/draw/drawText.js";
import { calculateDistance } from "../functions/helpers.js";
import { Character } from "../newClases/Character.js";
import { EnemyCh } from "../newClases/extend/EnemyCh.js";
import { dimensions, game, instances, stats } from "../variables.js";
import { Enemy } from "./Enemy";
import { Sprite } from "./Sprite.js";

export class Circling {
  x: number;
  y: number;
  dmg: number;
  showHitBox: boolean;

  constructor(
    public who: Character,
    public radius: number,
    public radiusElement: number,
    public speed: number,
    public angle: number,
    public id: string,
    public spriteSheetData
  ) {
    this.who = who;
    this.radius = radius;
    this.radiusElement = radiusElement;
    this.speed = speed;
    this.angle = angle;
    this.id = id;
    this.spriteSheetData = spriteSheetData;
    this.dmg = stats.skills.circlingBalls.damage;

    this.x = 0;
    this.y = 0;

    this.showHitBox = false;
  }

  public update(c: CanvasRenderingContext2D) {
    // const angle = (90 * Math.PI) / 180; // dodatkowy kąt w radianach
    // const angleRadians = Math.atan2(this.direction.y, this.direction.x) + angle; // + kąt kierunku

    // c.translate(this.x + dimensions.map.x, this.y + dimensions.map.y); // przesuń punkt obrotu do środka obrazka
    // c.rotate(angleRadians);
    c.drawImage(
      spriteSheet,
      this.spriteSheetData.x,
      this.spriteSheetData.y,
      this.spriteSheetData.w,
      this.spriteSheetData.h,
      this.x + dimensions.map.x - this.spriteSheetData.w,
      this.y + dimensions.map.y - this.spriteSheetData.h,
      this.spriteSheetData.w * 2,
      this.spriteSheetData.h * 2
    );
    // c.rotate(-angleRadians); // przywróć pierwotny kąt obrotu
    // c.translate(-this.x - dimensions.map.x, -this.y - dimensions.map.y); // przywróć pierwotne położenie punktu obrotu

    if (this.showHitBox) {
      c.beginPath();
      c.arc(
        this.x + dimensions.map.x,
        this.y + dimensions.map.y,
        this.radiusElement,
        0,
        Math.PI * 2
      );
      c.stroke();
    }

    if (!game.isPause) {
      this.angle += this.speed;
      const radians = (this.angle * Math.PI) / 180;
      this.x = this.who.x + this.radius * Math.cos(radians);
      this.y = this.who.y + this.radius * Math.sin(radians);
    }
  }

  collisionEnemy() {
    instances.enemiesCh.forEach((enemy: EnemyCh) => {
      const distance: number = calculateDistance(
        enemy.x,
        enemy.y,
        enemy.radius,
        this.x,
        this.y,
        this.radiusElement
      );

      // drawLine(this.x, this.y, enemy.x, enemy.y, "#000", c);

      if (distance <= 0) {
        // if not include id
        if (!enemy.immuneProjectilesId.includes(this.id)) {
          // console.log("Circling test " + enemy.immuneProjectilesId.includes(this.id));

          // enemy.getDamage(this.dmg, { id: this.id });
          enemy.getDamage(this.dmg, game.colors.blue, this.id);
          enemy.setKnockback(instances.player.x, instances.player.y, 50, this.speed);

          stats.game.AllDamageDone += this.dmg;
        }
      }

      if (enemy.immuneProjectilesId.includes(this.id) && distance > 0) {
        // find and remove id while ball not touching enemy
        enemy.immuneProjectilesId.splice(enemy.immuneProjectilesId.indexOf(this.id), 1);
      }
    });
  }
}
