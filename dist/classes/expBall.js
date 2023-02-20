import { player } from "../app.js";
import { calculateDirection, calculateDistance } from "../functions/helpers.js";
import { stats } from "../variables.js";
import { Sprite } from "./Sprite.js";
export class ExpBall extends Sprite {
    constructor(x, y, radius) {
        super(x, y, radius);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = "#ff8500";
        this.type = "fill";
        this.speed = 2;
    }
    moveToPlayer(index, expballs) {
        const distance = calculateDistance(this.x, this.y, this.radius, player.x, player.y, player.radius);
        if (distance < player.grabItemRange) {
            const direction = calculateDirection(this.x, this.y, player.x, player.y);
            this.x += direction.x * this.speed;
            this.y += direction.y * this.speed;
            if (distance <= 0) {
                stats.player.currentXP += 10;
                expballs.splice(index, 1);
            }
        }
    }
}
