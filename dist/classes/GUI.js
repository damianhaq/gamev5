import { calculatePercentage } from "../functions/helpers.js";
export class GUI {
    constructor(c) {
        this.c = c;
        this.c = c;
    }
    frame(x, y, w, h, colorLine, lineWidth, isFill, colorFill) {
        this.c.save();
        if (isFill) {
            this.c.fillStyle = colorFill;
            this.c.fillRect(x, y, w, h);
        }
        this.c.lineWidth = lineWidth;
        this.c.strokeStyle = colorLine;
        this.c.strokeRect(x, y, w, h);
        this.c.restore();
    }
    progressBar(maxValue, CurrentValue, font, x, y, w, h, colorLine, lineWidth, isFill, colorFill, progressBarColor, progressEdgeColor) {
        if (CurrentValue > maxValue)
            CurrentValue = maxValue;
        const currentW = calculatePercentage(CurrentValue, maxValue, w);
        this.c.save();
        //background
        if (isFill) {
            this.c.fillStyle = colorFill;
            this.c.fillRect(x, y, w, h);
        }
        // Progressbar
        this.c.fillStyle = progressBarColor;
        this.c.fillRect(x, y, currentW, h);
        // ProgressbarLine
        this.c.beginPath();
        this.c.lineWidth = lineWidth;
        this.c.strokeStyle = progressEdgeColor;
        this.c.moveTo(x + currentW, y);
        this.c.lineTo(x + currentW, y + h);
        this.c.stroke();
        // Text
        this.c.font = `${1 + h / 2}px ${font}`;
        this.c.fillStyle = "#000";
        this.c.textAlign = "center";
        this.c.fillText(`${CurrentValue}/${maxValue}`, x + w / 2, y + h / 2 + 1 + h / 2);
        // Border
        this.c.lineWidth = lineWidth;
        this.c.strokeStyle = colorLine;
        this.c.strokeRect(x, y, w, h);
        this.c.restore();
    }
    text(x, y, text, fontSize, font, color) {
        this.c.font = `${fontSize}px ${font}`;
        this.c.textAlign = "center";
        this.c.fillStyle = color;
        this.c.fillText(text, x, y);
    }
}
