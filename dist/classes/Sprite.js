import { drawText } from "../functions/draw/drawText.js";
export class Sprite {
    constructor(x, y, radius, hp = 0, immuneTime = 0, immuneCount = 0, isImmune = false) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.hp = hp;
        this.immuneTime = immuneTime;
        this.immuneCount = immuneCount;
        this.isImmune = isImmune;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.hp = hp;
    }
    update(c, drawMe) {
        drawMe(this.x, this.y, this.radius, "stroke", "#202124", c);
        this.showHp(c);
        this.moving();
    }
    moving() { }
    showHp(c) {
        drawText(this.x, this.y, this.hp.toString(), c);
    }
}
