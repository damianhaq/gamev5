import { bullets } from "../app.js";
import { controls } from "../functions/controls.js";
import { calculateDirection } from "../functions/helpers.js";
import { dimensions, keys } from "../variables.js";
import { Bullet } from "./Bullet.js";
import { Sprite } from "./Sprite.js";
export class Player extends Sprite {
    constructor(x, y, radius, enemies) {
        super(x, y, radius);
        this.enemies = enemies;
        this.speed = 3;
        this.isCameraLock = true;
        this.enemies = enemies;
        controls();
        this.shoot();
    }
    moving() {
        if (keys.a && !this.isCollideBorderMap("left"))
            dimensions.map.x += this.speed;
        else if (keys.d && !this.isCollideBorderMap("right"))
            dimensions.map.x -= this.speed;
        if (keys.w && !this.isCollideBorderMap("up"))
            dimensions.map.y += this.speed;
        else if (keys.s && !this.isCollideBorderMap("bot"))
            dimensions.map.y -= this.speed;
    }
    shoot() {
        const iid = setInterval(() => {
            // console.log("shoot");
            const nearestEnemy = this.findNearestEnemy();
            // draw line to nearest enemy
            // c.moveTo(this.x, this.y);
            // c.lineTo(nearestEnemy.x + dimensions.map.x, nearestEnemy.y + dimensions.map.y);
            // c.stroke();
            const direction = calculateDirection(this.x, this.y, nearestEnemy.x + dimensions.map.x, nearestEnemy.y + dimensions.map.y);
            bullets.push(new Bullet(this.x - dimensions.map.x, this.y - dimensions.map.y, 5, 1, direction));
            // console.log(bullets);
        }, 1000);
    }
    findNearestEnemy() {
        let nearestEnemy = null;
        let nearestDistance = Number.MAX_VALUE;
        for (const enemy of this.enemies) {
            const distance = Math.sqrt(Math.pow((enemy.x + dimensions.map.x - this.x), 2) +
                Math.pow((enemy.y + dimensions.map.y - this.y), 2));
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
                if (this.x - this.radius <= dimensions.map.x)
                    return true;
                break;
            case "right":
                if (this.x + this.radius >= dimensions.map.w + dimensions.map.x)
                    return true;
                break;
            case "up":
                if (this.y - this.radius <= dimensions.map.y)
                    return true;
                break;
            case "bot":
                if (this.y + this.radius >= dimensions.map.h + dimensions.map.y)
                    return true;
                break;
        }
    }
}
