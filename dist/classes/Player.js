import { keys } from "../variables.js";
import { Sprite } from "./Sprite.js";
export class Player extends Sprite {
    constructor(x, y, radius) {
        super(x, y, radius);
        this.speed = 1;
    }
    moving() {
        if (keys.a)
            this.x -= this.speed;
        else if (keys.d)
            this.x += this.speed;
        if (keys.w)
            this.y -= this.speed;
        else if (keys.s)
            this.y += this.speed;
    }
}
