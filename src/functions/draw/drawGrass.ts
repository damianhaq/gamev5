import { dimensions } from "../../variables.js";

export function drawGrass(
  x: number,
  y: number,
  radius: number,
  type: "stroke" | "fill",
  color: string,
  c: CanvasRenderingContext2D
) {
  c.beginPath();
  c.moveTo(8 + x + dimensions.map.x, 16 + y + dimensions.map.y);
  c.lineTo(6 + x + dimensions.map.x, 8 + y + dimensions.map.y);
  c.lineTo(0 + x + dimensions.map.x, 0 + y + dimensions.map.y);
  c.moveTo(8 + x + dimensions.map.x, 16 + y + dimensions.map.y);
  c.lineTo(10 + x + dimensions.map.x, 8 + y + dimensions.map.y);
  c.lineTo(10 + x + dimensions.map.x, 0 + y + dimensions.map.y);
  c.stroke();
}
