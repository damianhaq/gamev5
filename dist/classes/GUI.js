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
    progressBar(maxValue, CurrentValue, x, y, w, h, colorLine, lineWidth, isFill, colorFill, progressBarColor, progressEdgeColor) {
        this.c.save();
        //background
        if (isFill) {
            this.c.fillStyle = colorFill;
            this.c.fillRect(x, y, w, h);
        }
        // Progressbar
        this.c.fillStyle = progressBarColor;
        this.c.fillRect(x, y, CurrentValue, h);
        // ProgressbarLine
        this.c.beginPath();
        this.c.lineWidth = lineWidth;
        this.c.strokeStyle = progressEdgeColor;
        this.c.moveTo(x + CurrentValue, y);
        this.c.lineTo(x + CurrentValue, y + h);
        this.c.stroke();
        // Text
        this.c.fillStyle = "#000";
        this.c.textAlign = "center";
        this.c.fillText(`${CurrentValue}/${maxValue}`, x + w / 2, y + h / 2);
        // Border
        this.c.lineWidth = lineWidth;
        this.c.strokeStyle = colorLine;
        this.c.strokeRect(x, y, w, h);
        this.c.restore();
    }
}
