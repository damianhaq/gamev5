import { c } from "../app.js";
import { drawLine } from "../functions/draw/drawLine.js";
import { drawText } from "../functions/draw/drawText.js";
import { calculateDistance } from "../functions/helpers.js";
import { game, instances, stats } from "../variables.js";
import { Enemy } from "./Enemy";
import { Sprite } from "./Sprite.js";

export class Circling {
  x: number;
  y: number;
  dmg: number;
  damageOnceFlag: boolean;
  constructor(
    public who: Sprite,
    public radius: number,
    public radiusElement: number,
    public speed: number,
    public angle: number,
    public id: string,
    public type: "stroke" | "fill" = "stroke",
    public color: string = "#202124"
  ) {
    this.who = who;
    this.radius = radius;
    this.radiusElement = radiusElement;
    this.speed = speed;
    this.angle = angle;
    this.id = id;

    this.dmg = stats.skills.circlingBalls.damage;
    this.damageOnceFlag = true;

    this.x = 0;
    this.y = 0;
  }

  public update(c: CanvasRenderingContext2D, drawMe: Function) {
    drawMe(this.x, this.y, this.radiusElement, this.type, this.color, c);

    this.angle += this.speed;
    const radians = (this.angle * Math.PI) / 180;
    this.x = this.who.x + this.radius * Math.cos(radians);
    this.y = this.who.y + this.radius * Math.sin(radians);
  }

  collisionEnemy() {
    instances.enemies.forEach((enemy: Enemy) => {
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
        // this.damageOnceFlag = false;
        // console.log("wykonuje sie raz");

        // if not include id
        if (!enemy.immuneProjectilesId.includes(this.id)) {
          console.log("Circling test " + enemy.immuneProjectilesId.includes(this.id));

          enemy.getDamage(this.dmg, this.id);
          stats.game.AllDamageDone += this.dmg;
        }
      }

      if (enemy.immuneProjectilesId.includes(this.id) && distance > 0) {
        // find and remove id while ball not touching enemy
        enemy.immuneProjectilesId.splice(enemy.immuneProjectilesId.indexOf(this.id), 1);
      }

      // if (distance > 0 && this.damageOnceFlag === false) {
      //   this.damageOnceFlag = true;
      // }
    });
  }
}
