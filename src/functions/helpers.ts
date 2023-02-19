import { Sprite } from "../classes/Sprite";

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

export function collideCircleResolve(c1: Sprite, c2: Sprite): { x: number; y: number } {
  let distance_x = c1.x - c2.x;
  let distance_y = c1.y - c2.y;
  let radii_sum = c1.radius + c2.radius;
  let length = Math.sqrt(distance_x * distance_x + distance_y * distance_y) || 1;
  let unit_x = distance_x / length;
  let unit_y = distance_y / length;

  return {
    x: c2.x + (radii_sum + 1) * unit_x,
    y: c2.y + (radii_sum + 1) * unit_y,
  };
  // c1.x = c2.x + (radii_sum + 1) * unit_x;
  // c1.y = c2.y + (radii_sum + 1) * unit_y;
}
