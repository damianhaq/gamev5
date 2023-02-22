// import { enemies, expBalls } from "../app.js";
import { calculateDirection, calculateDistance, collideCircleResolve, } from "../functions/helpers.js";
import { game, instances } from "../variables.js";
// import { enemies, expBalls } from "../functions/initial/playing.js";
import { ExpBall } from "./expBall.js";
import { Sprite } from "./Sprite.js";
export class Enemy extends Sprite {
    constructor(x, y, radius, speed, hp, expDropValue) {
        super(x, y, radius);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.expDropValue = expDropValue;
        this.speed = speed;
        this.hp = hp;
        this.dmg = 5;
        this.expDropValue = expDropValue;
        this.immuneProjectilesId = [];
    }
    moveTowardsPlayer(player) {
        const direction = calculateDirection(this.x, this.y, player.x, player.y);
        if (!game.isPause) {
            this.x += direction.x * this.speed;
            this.y += direction.y * this.speed;
        }
        const distance = calculateDistance(this.x, this.y, this.radius, player.x, player.y, player.radius);
        if (distance <= 0) {
            if (!player.isImmune)
                player.getDamage(this.dmg, this);
            const { x, y } = collideCircleResolve(this, player);
            this.x = x;
            this.y = y;
        }
    }
    collideEnemies(enemies, index) {
        enemies.forEach((enemy) => {
            const distance = calculateDistance(this.x, this.y, this.radius, enemy.x, enemy.y, enemy.radius);
            if (distance <= 0) {
                const { x, y } = collideCircleResolve(this, enemy);
                this.x = x;
                this.y = y;
            }
        });
    }
    die(index) {
        if (this.hp <= 0) {
            instances.expBalls.push(new ExpBall(this.x, this.y, 3, this.expDropValue));
            instances.enemies.splice(index, 1);
        }
    }
    getDamage(value, id) {
        this.hp -= value;
        this.immuneProjectilesId.push(id);
        // console.log(id);
        // console.log(this.immuneProjectiles);
    }
}
