import { calculatePercentage } from "../functions/helpers.js";

export class GUI {
  constructor(public c: CanvasRenderingContext2D) {
    this.c = c;
  }

  frame(
    x: number,
    y: number,
    w: number,
    h: number,
    colorLine: string,
    lineWidth: number,
    isFill: boolean,
    colorFill: string
  ) {
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

  progressBar(
    maxValue: number,
    CurrentValue: number,
    font: string,
    x: number,
    y: number,
    w: number,
    h: number,
    colorLine: string,
    lineWidth: number,
    isFill: boolean,
    colorFill: string,
    progressBarColor: string,
    progressEdgeColor: string
  ) {
    if (CurrentValue > maxValue) CurrentValue = maxValue;

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

  text(
    x: number,
    y: number,
    text: string,
    fontSize: number,
    font: string,
    color: string
  ) {
    this.c.font = `${fontSize}px ${font}`;
    this.c.textAlign = "center";
    this.c.fillStyle = color;
    this.c.fillText(text, x, y);
  }
}
