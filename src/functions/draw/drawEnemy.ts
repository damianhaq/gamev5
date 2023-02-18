export function drawEnemy(
  c: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number
) {
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2);
}
