import { dimensions } from "../../variables.js";

export function drawText(
  x: number,
  y: number,
  text: string,
  color: string,
  c: CanvasRenderingContext2D
) {
  c.fillStyle = color;
  c.fillText(text, x + dimensions.map.x, y + dimensions.map.y);
}
