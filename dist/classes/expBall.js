import { Sprite } from "./Sprite.js";
export class ExpBall extends Sprite {
    constructor(x, y, radius) {
        super(x, y, radius);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = "#ff8500";
        this.type = "fill";
    }
}
