export function calculateDirection(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number
): { x: number; y: number } {
  const dx = toX - fromX;
  const dy = toY - fromY;

  const length = Math.sqrt(dx * dx + dy * dy);
  const directionX = dx / length;
  const directionY = dy / length;

  return { x: directionX, y: directionY };
}

export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function calculateDistance(
  fromX: number,
  fromY: number,
  fromRadius: number,
  toX: number,
  toY: number,
  toRadius: number
): number {
  let distance: number = Math.sqrt((fromX - toX) ** 2 + (fromY - toY) ** 2);
  distance = distance - fromRadius - toRadius;
  return distance;
}
