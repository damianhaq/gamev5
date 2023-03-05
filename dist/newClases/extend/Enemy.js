import { Character } from "../Character.js";
export class EnemyCh extends Character {
    constructor(x, y, dx, dy, dw, dh, frames, duration) {
        super();
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.dw = dw;
        this.dh = dh;
        this.frames = frames;
        this.duration = duration;
        this.x = x;
        this.y = y;
        this.drawData = {
            crop: {
                x: dx,
                y: dy,
                w: dw,
                h: dh,
            },
            frames: frames,
            duration: duration,
        };
    }
}
