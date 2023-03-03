import { c, spriteSheet } from "../app.js";
export class Character {
    constructor() {
        this.x;
        this.y;
        this.spriteSheetData = {
            idle: {
                x: 0,
                y: 0,
                w: 0,
                h: 0,
                frames: 0,
            },
            run: {
                x: 0,
                y: 0,
                w: 0,
                h: 0,
                frames: 0,
            },
            duration: 0,
        };
        this.animData = {
            animState: "run",
            frameInterval: 0,
            currentFrame: 1,
        };
    }
    update(deltaTime) {
        this.draw(deltaTime);
    }
    draw(deltaTime) {
        this.animData.frameInterval += deltaTime;
        if (this.animData.frameInterval > this.spriteSheetData.duration) {
            console.log(this.spriteSheetData[this.animData.animState].frames);
            this.animData.currentFrame++;
            if (this.animData.currentFrame >= this.spriteSheetData[this.animData.animState].frames) {
                this.animData.currentFrame = 0;
            }
            this.animData.frameInterval = 0;
        }
        c.drawImage(spriteSheet, this.spriteSheetData[this.animData.animState].x +
            this.animData.currentFrame * this.spriteSheetData[this.animData.animState].w, this.spriteSheetData[this.animData.animState].y, this.spriteSheetData[this.animData.animState].w, this.spriteSheetData[this.animData.animState].h, this.x, this.y, this.spriteSheetData[this.animData.animState].w * 2, this.spriteSheetData[this.animData.animState].h * 2);
    }
}
