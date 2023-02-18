import { dimensions } from "../variables.js";
export class Sprite {
    constructor(x, y, radius, isCameraLock = false) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.isCameraLock = isCameraLock;
        this.x = x;
        this.y = y;
        this.debug = false;
        this.radius = radius;
        this.isCameraLock = isCameraLock;
    }
    update(c, drawMe) {
        c.beginPath();
        if (!this.isCameraLock) {
            drawMe(c, this.x + dimensions.map.x, this.y + dimensions.map.y, this.radius);
        }
        else {
            // Player
            drawMe(c, this.x, this.y, this.radius);
        }
        c.closePath();
        c.stroke();
        this.moving();
    }
    moving() { }
}
