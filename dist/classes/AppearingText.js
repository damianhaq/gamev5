import { drawText } from "../functions/draw/drawText.js";
import { game, instances } from "../variables.js";
export class AppearingText {
    constructor(x, y, time, text, fontSize) {
        this.x = x;
        this.y = y;
        this.time = time;
        this.text = text;
        this.fontSize = fontSize;
        this.x = x;
        this.y = y;
        this.time = time;
        this.text = text;
        this.fontSize = fontSize;
        this.killMe = false;
        this.timeout();
    }
    update(index) {
        this.y -= 0.5;
        drawText(this.x, this.y, this.text, this.fontSize, game.font.main, game.colors.blue, {
            stroke: true,
            color: "#fff",
            lineWidth: 2,
        });
        if (this.killMe)
            instances.appearingText.splice(index, 1);
    }
    timeout() {
        setTimeout(() => {
            this.killMe = true;
        }, this.time);
    }
}
