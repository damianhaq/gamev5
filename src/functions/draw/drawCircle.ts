import { dimensions } from "../../variables.js";

export function drawCircle(
  x: number,
  y: number,
  radius: number,
  type: "stroke" | "fill",
  color: string,
  c: CanvasRenderingContext2D
) {
  c.beginPath();
  c.arc(x + dimensions.map.x, y + dimensions.map.y, radius, 0, Math.PI * 2);
  if (type === "stroke") {
    c.strokeStyle = color;
    c.stroke();
  }
  if (type === "fill") {
    c.fillStyle = color;
    c.fill();
  }
}
