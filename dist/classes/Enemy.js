// import { enemies, expBalls } from "../app.js";
import { calculateDirection, calculateDistance, collideCircleResolve, randomNumber, } from "../functions/helpers.js";
import { game, instances, stats } from "../variables.js";
import { AppearingText } from "./AppearingText.js";
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
        this.buffCount = 0;
        this.buffTimeout = 0;
        this.buffFlag = true;
        this.burnDamage = 0;
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
            stats.game.enemiesKilled += 1;
        }
    }
    getDamage(value, id = { id: null, color: game.colors.blue }) {
        if (id && !this.immuneProjectilesId.includes(id.id)) {
            this.immuneProjectilesId.push(id.id);
            this.hp -= value;
        }
        if (id.id === null) {
            this.hp -= value;
        }
        instances.appearingText.push(new AppearingText(this.x + randomNumber(-this.radius, this.radius), this.y, 500, value.toString(), 16, id.color));
        // console.log(id);
        // console.log(this.immuneProjectilesId);
    }
    burnMe() {
        if (this.buffCount > 0 && this.buffFlag) {
            this.buffFlag = false;
            this.buffCount--;
            setTimeout(() => {
                this.buffFlag = true;
                this.getDamage(this.burnDamage, { color: "#e42525" });
            }, this.buffTimeout);
        }
    }
    // moving is only for update
    moving() {
        if (!game.isPause) {
            this.burnMe();
        }
    }
}
