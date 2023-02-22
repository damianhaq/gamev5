import { c } from "../app.js";
import { drawCircle } from "../functions/draw/drawCircle.js";
import { calculateDistance } from "../functions/helpers.js";
import { instances } from "../variables.js";
export class MagicField {
    constructor(who, radius, dmg, attackSpeed) {
        this.who = who;
        this.radius = radius;
        this.dmg = dmg;
        this.attackSpeed = attackSpeed;
        this.who = who;
        this.radius = radius;
        this.dmg = dmg;
        this.attackSpeed = attackSpeed;
        this.attack();
    }
    update() {
        drawCircle(this.who.x, this.who.y, this.radius, "fill", "#e8eaee", c);
    }
    attack() {
        setInterval(() => {
            instances.enemies.forEach((enemy) => {
                const distance = calculateDistance(enemy.x, enemy.y, enemy.radius, this.who.x, this.who.y, this.radius);
                if (distance <= 0) {
                    enemy.getDamage(this.dmg);
                    // enemy.hp -= this.dmg;
                }
            });
        }, this.attackSpeed);
    }
}
