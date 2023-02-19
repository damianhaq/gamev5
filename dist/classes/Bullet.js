import { bullets, enemies } from "../app.js";
import { calculateDistance } from "../functions/helpers.js";
import { dimensions } from "../variables.js";
import { Sprite } from "./Sprite.js";
export class Bullet extends Sprite {
    constructor(x, y, radius, speed, direction, dmg) {
        super(x, y, radius);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.direction = direction;
        this.dmg = dmg;
        this.speed = speed;
        this.direction = direction;
        this.dmg = dmg;
    }
    moving() {
        this.x += this.direction.x * this.speed;
        this.y += this.direction.y * this.speed;
    }
    deleteIfOverMap(index) {
        if (this.x - this.radius < 0 ||
            this.x + this.radius > dimensions.map.w ||
            this.y - this.radius < 0 ||
            this.y + this.radius > dimensions.map.h) {
            bullets.splice(index, 1);
        }
    }
    collisionEnemy(index) {
        enemies.forEach((enemy) => {
            const distance = calculateDistance(enemy.x, enemy.y, enemy.radius, this.x, this.y, this.radius);
            if (distance <= 0) {
                enemy.hp -= this.dmg;
                bullets.splice(index, 1);
                // if (enemy.hp <= 0) enemies.splice(index, 1);
            }
        });
    }
}
