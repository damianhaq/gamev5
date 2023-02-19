import { drawText } from "../functions/draw/drawText.js";
export class Sprite {
    constructor(x, y, radius, hp = 0, immuneTime = 0, immuneCount = 0, isImmune = false, type = "stroke", color = "#202124") {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.hp = hp;
        this.immuneTime = immuneTime;
        this.immuneCount = immuneCount;
        this.isImmune = isImmune;
        this.type = type;
        this.color = color;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.hp = hp;
    }
    update(c, drawMe) {
        drawMe(this.x, this.y, this.radius, this.type, this.color, c);
        this.showHp(c);
        this.moving();
    }
    moving() { }
    showHp(c) {
        drawText(this.x, this.y, this.hp.toString(), c);
    }
}
