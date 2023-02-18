import { bullets } from "../app.js";
import { dimensions } from "../variables.js";
import { Sprite } from "./Sprite.js";
export class Bullet extends Sprite {
    constructor(x, y, radius, speed, direction) {
        super(x, y, radius);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.direction = direction;
        this.speed = speed;
        this.direction = direction;
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
}
