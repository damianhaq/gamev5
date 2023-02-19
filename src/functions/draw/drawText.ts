import { dimensions } from "../../variables.js";

export function drawText(
  x: number,
  y: number,
  text: string,
  c: CanvasRenderingContext2D
) {
  c.fillText(text, x + dimensions.map.x, y + dimensions.map.y);
}
