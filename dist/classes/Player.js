import { bullets } from "../app.js";
import { controls } from "../functions/controls.js";
import { calculateDirection } from "../functions/helpers.js";
import { dimensions, game, keys } from "../variables.js";
import { Bullet } from "./Bullet.js";
import { Sprite } from "./Sprite.js";
export class Player extends Sprite {
    constructor(x, y, radius, enemies) {
        super(x, y, radius);
        this.enemies = enemies;
        this.speed = 5;
        this.enemies = enemies;
        this.attackSpeed = 500;
        this.hp = 100;
        this.immuneTime = 100;
        this.immuneCount = 0;
        controls();
        this.shoot();
    }
    moving() {
        if (keys.a && !this.isCollideBorderMap("left")) {
            this.x -= this.speed;
        }
        else if (keys.d && !this.isCollideBorderMap("right")) {
            this.x += this.speed;
        }
        if (keys.w && !this.isCollideBorderMap("up")) {
            this.y -= this.speed;
        }
        else if (keys.s && !this.isCollideBorderMap("bot")) {
            this.y += this.speed;
        }
        this.die();
    }
    shoot() {
        const iid = setInterval(() => {
            if (this.enemies.length > 0) {
                const nearestEnemy = this.findNearestEnemy();
                // draw line to nearest enemy
                // drawLine(this.x, this.y, nearestEnemy.x, nearestEnemy.y, "#007acc", c);
                const direction = calculateDirection(this.x, this.y, nearestEnemy.x, nearestEnemy.y);
                bullets.push(new Bullet(this.x, this.y, 5, 1, direction, 10));
            }
        }, this.attackSpeed);
    }
    findNearestEnemy() {
        let nearestEnemy = null;
        let nearestDistance = Number.MAX_VALUE;
        for (const enemy of this.enemies) {
            const distance = Math.sqrt(Math.pow((enemy.x - this.x), 2) + Math.pow((enemy.y - this.y), 2));
            if (distance < nearestDistance) {
                nearestEnemy = enemy;
                nearestDistance = distance;
            }
        }
        return nearestEnemy;
    }
    isCollideBorderMap(side) {
        switch (side) {
            case "left":
                if (this.x - this.radius <= 0)
                    return true;
                break;
            case "right":
                if (this.x + this.radius >= dimensions.map.w)
                    return true;
                break;
            case "up":
                if (this.y - this.radius <= 0)
                    return true;
                break;
            case "bot":
                if (this.y + this.radius >= dimensions.map.h)
                    return true;
                break;
        }
    }
    getDamage(value, from) {
        this.hp -= value;
        this.isImmune = true;
        setTimeout(() => {
            this.isImmune = false;
        }, this.immuneTime);
    }
    die() {
        if (this.hp <= 0) {
            game.isGameOver = true;
        }
    }
}
