import { c } from "../../app.js";
import { dimensions } from "../../variables.js";

export function drawText(
  x: number,
  y: number,
  text: string,
  fontSize: number,
  font: string,
  color: string
) {
  c.font = `${fontSize}px ${font}`;
  c.textAlign = "center";
  c.fillStyle = color;
  c.fillText(text, x + dimensions.map.x, y + dimensions.map.y);
}
