// import { player } from "../app.js";
import { addExp, calculateDirection, calculateDistance } from "../functions/helpers.js";
// import { player } from "../functions/initial/playing.js";
import { game, instances, stats } from "../variables.js";
import { Sprite } from "./Sprite.js";
export class ExpBall extends Sprite {
    constructor(x, y, radius, expValue) {
        super(x, y, radius);
        this.expValue = expValue;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = "#ff8500";
        this.drawType = "fill";
        this.speed = 2.5;
        this.expValue = expValue;
    }
    moveToPlayer(index, expballs) {
        const distance = calculateDistance(this.x, this.y, this.radius, instances.player.x, instances.player.y, instances.player.radius);
        if (distance < stats.player.pickupRange) {
            const direction = calculateDirection(this.x, this.y, instances.player.x, instances.player.y);
            if (!game.isPause) {
                this.x += direction.x * this.speed;
                this.y += direction.y * this.speed;
            }
            if (distance <= 0) {
                // stats.player.currentXP += this.expValue;
                addExp(this.expValue);
                expballs.splice(index, 1);
            }
        }
    }
}
