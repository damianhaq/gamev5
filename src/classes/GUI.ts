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
