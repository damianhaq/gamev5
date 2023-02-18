export function drawGrass(
  c: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number
) {
  c.beginPath();
  c.moveTo(8 + x, 16 + y);
  c.lineTo(6 + x, 8 + y);
  c.lineTo(0 + x, 0 + y);
  c.moveTo(8 + x, 16 + y);
  c.lineTo(10 + x, 8 + y);
  c.lineTo(10 + x, 0 + y);
  c.stroke();
}
