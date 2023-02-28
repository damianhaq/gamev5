import { calculateDistance } from "../functions/helpers.js";
// import { bullets, enemies } from "../functions/initial/playing.js";
import { dimensions, game, instances, stats } from "../variables.js";
import { Sprite } from "./Sprite.js";
export class Bullet extends Sprite {
    constructor(x, y, radius, speed, direction, dmg, id, penetrationNumber = 1, isApplyBurn = false) {
        super(x, y, radius);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.direction = direction;
        this.dmg = dmg;
        this.id = id;
        this.penetrationNumber = penetrationNumber;
        this.isApplyBurn = isApplyBurn;
        this.speed = speed;
        this.direction = direction;
        this.dmg = dmg;
        this.penetrationNumber = penetrationNumber;
        this.id = id;
        this.isApplyBurn = isApplyBurn;
        if (isApplyBurn)
            this.color = "#e42525";
    }
    moving() {
        if (!game.isPause) {
            this.x += this.direction.x * this.speed;
            this.y += this.direction.y * this.speed;
        }
    }
    deleteIfOverMap(index) {
        if (this.x - this.radius < 0 ||
            this.x + this.radius > dimensions.map.w ||
            this.y - this.radius < 0 ||
            this.y + this.radius > dimensions.map.h) {
            instances.bullets.splice(index, 1);
        }
    }
    collisionEnemy(index) {
        instances.enemies.forEach((enemy) => {
            const distance = calculateDistance(enemy.x, enemy.y, enemy.radius, this.x, this.y, this.radius);
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
                }
                // enemy.hp -= this.dmg;
            }
        });
    }
}
