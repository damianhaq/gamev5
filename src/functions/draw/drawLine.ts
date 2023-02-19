import { dimensions } from "../../variables.js";

export function drawLine(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  color: string,
  c: CanvasRenderingContext2D
) {
  c.beginPath();
  c.strokeStyle = color;
  c.moveTo(fromX + dimensions.map.x, fromY + dimensions.map.y);
  c.lineTo(toX + dimensions.map.x, toY + dimensions.map.y);
  c.stroke();
}
