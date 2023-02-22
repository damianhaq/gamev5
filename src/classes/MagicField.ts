import { c } from "../app.js";
import { drawCircle } from "../functions/draw/drawCircle.js";
import { calculateDistance } from "../functions/helpers.js";
import { instances } from "../variables.js";
import { Enemy } from "./Enemy.js";
import { Sprite } from "./Sprite.js";

export class MagicField {
  constructor(
    public who: Sprite,
    public radius: number,
    public dmg: number,
    public attackSpeed: number
  ) {
    this.who = who;
    this.radius = radius;
    this.dmg = dmg;
    this.attackSpeed = attackSpeed;
    this.attack();
  }

  update() {
    drawCircle(this.who.x, this.who.y, this.radius, "fill", "#e8eaed", c);
  }

  attack() {
    setInterval(() => {
      instances.enemies.forEach((enemy: Enemy) => {
        const distance: number = calculateDistance(
          enemy.x,
          enemy.y,
          enemy.radius,
          this.who.x,
          this.who.y,
          this.radius
        );
        if (distance <= 0) {
          enemy.getDamage(this.dmg);

          // enemy.hp -= this.dmg;
        }
      });
    }, this.attackSpeed);
  }
}
