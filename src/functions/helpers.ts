import { Enemy } from "../classes/Enemy";
import { Player } from "../classes/Player";
import { Sprite } from "../classes/Sprite";
import { game, instances, stats } from "../variables.js";

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

export function calculatePercentage(
  currentValue: number,
  maxValue: number,
  maxWidth: number
): number {
  const percentage: number = (currentValue / maxValue) * 100;
  const currentWidth: number = (percentage / 100) * maxWidth;
  return currentWidth;
}

export function addExp(value: number) {
  const { currentXP, maxXP, lvl, maxXpGrowPrecentage } = stats.player;

  if (currentXP + value <= maxXP) {
    stats.player.currentXP += value;
  } else {
    stats.player.lvl += 1;
    lvlup();
    stats.player.currentXP = value - (maxXP - currentXP);
    stats.player.maxXP += Math.round(maxXP * (maxXpGrowPrecentage / 100));
  }
}

export function lvlup() {
  game.isPause = true;
  stats.player.upgradePoints += 1;
}

export function saveDataToLocalStorage(data: object): void {
  localStorage.setItem(game.localStorageKey, JSON.stringify(data));
}

export function loadDataFromLocalStorage(): object | null {
  const data = localStorage.getItem(game.localStorageKey);
  if (data) {
    return JSON.parse(data);
  }
  return null;
}

export function findNearestEnemy(player: Player): Enemy | null {
  let nearestEnemy: Enemy | null = null;
  let nearestDistance = Number.MAX_VALUE;

  for (const enemy of instances.enemies) {
    let distance: number;
    if (player) {
      distance = Math.sqrt((enemy.x - player.x) ** 2 + (enemy.y - player.y) ** 2);
    }

    if (distance < nearestDistance) {
      nearestEnemy = enemy;
      nearestDistance = distance;
    }
  }
  return nearestEnemy;
}
