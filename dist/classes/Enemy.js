import { calculateDirection } from "../functions/helpers.js";
import { dimensions } from "../variables.js";
import { Sprite } from "./Sprite.js";
export class Enemy extends Sprite {
    constructor(x, y, radius, speed) {
        super(x, y, radius);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.speed = speed;
    }
    moveTowardsPlayer(player) {
        const direction = calculateDirection(this.x, this.y, player.x - dimensions.map.x, player.y - dimensions.map.y);
        this.x += direction.x * this.speed;
        this.y += direction.y * this.speed;
    }
}
