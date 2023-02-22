import { gameOver } from "../functions/gameOver.js";
import { calculateDirection, findNearestEnemy } from "../functions/helpers.js";
import { magicField } from "../functions/skills/magicField.js";
import { projectile } from "../functions/skills/projectile.js";
import { dimensions, game, instances, keys, stats } from "../variables.js";
import { Bullet } from "./Bullet.js";
import { Sprite } from "./Sprite.js";
export class Player extends Sprite {
    constructor(x, y, radius, enemies) {
        super(x, y, radius);
        this.enemies = enemies;
        this.speed = 2;
        this.enemies = enemies;
        this.attackSpeed = 500;
        this.hp = stats.player.currentHP;
        this.maxHP = stats.player.maxHP;
        this.immuneTime = 100;
        this.grabItemRange = 100;
        this.shoot();
        //skills
        projectile();
        magicField(this);
    }
    moving() {
        if (!game.isPause) {
            const diagonalSpeed = this.speed / Math.sqrt(2); // prędkość na ukos
            if (keys.a &&
                keys.w &&
                !this.isCollideBorderMap("left") &&
                !this.isCollideBorderMap("up")) {
                this.x -= diagonalSpeed;
                this.y -= diagonalSpeed;
            }
            else if (keys.a &&
                keys.s &&
                !this.isCollideBorderMap("left") &&
                !this.isCollideBorderMap("bot")) {
                this.x -= diagonalSpeed;
                this.y += diagonalSpeed;
            }
            else if (keys.d &&
                keys.w &&
                !this.isCollideBorderMap("right") &&
                !this.isCollideBorderMap("up")) {
                this.x += diagonalSpeed;
                this.y -= diagonalSpeed;
            }
            else if (keys.d &&
                keys.s &&
                !this.isCollideBorderMap("right") &&
                !this.isCollideBorderMap("bot")) {
                this.x += diagonalSpeed;
                this.y += diagonalSpeed;
            }
            else if (keys.a && !this.isCollideBorderMap("left")) {
                this.x -= this.speed;
            }
            else if (keys.d && !this.isCollideBorderMap("right")) {
                this.x += this.speed;
            }
            else if (keys.w && !this.isCollideBorderMap("up")) {
                this.y -= this.speed;
            }
            else if (keys.s && !this.isCollideBorderMap("bot")) {
                this.y += this.speed;
            }
            this.die();
        }
    }
    shoot() {
        let iid;
        let countId = 0;
        if (!iid) {
            iid = setInterval(() => {
                if (this.enemies.length > 0 && !game.isPause) {
                    const nearestEnemy = findNearestEnemy(this);
                    // draw line to nearest enemy
                    // drawLine(this.x, this.y, nearestEnemy.x, nearestEnemy.y, "#007acc", c);
                    const direction = calculateDirection(this.x, this.y, nearestEnemy.x, nearestEnemy.y);
                    countId++;
                    instances.bullets.push(new Bullet(this.x, this.y, 5, 2, direction, stats.player.baseDamage, `${countId}bullet`, 1));
                }
                if (game.isGameOver) {
                    clearInterval(iid);
                    iid = null;
                }
            }, this.attackSpeed);
        }
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
            gameOver();
        }
    }
}
