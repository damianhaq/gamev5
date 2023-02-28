import { c } from "../app.js";
import { drawCircle } from "../functions/draw/drawCircle.js";
import { calculateDistance } from "../functions/helpers.js";
import { game, instances, stats } from "../variables.js";
export class MagicField {
    constructor(who) {
        this.who = who;
        this.who = who;
        this.attack();
    }
    update() {
        drawCircle(this.who.x, this.who.y, stats.skills.magicField.radius, "fill", "#e8eaee", c);
    }
    attack() {
        const iid = setInterval(() => {
            if (!game.isPause) {
                instances.enemies.forEach((enemy) => {
                    const distance = calculateDistance(enemy.x, enemy.y, enemy.radius, this.who.x, this.who.y, stats.skills.magicField.radius);
                    if (distance <= 0) {
                        enemy.getDamage(stats.skills.magicField.damage);
                    }
                    if (game.isGameOver) {
                        clearInterval(iid);
                    }
                });
            }
        }, stats.skills.magicField.attackSpeed);
    }
}
