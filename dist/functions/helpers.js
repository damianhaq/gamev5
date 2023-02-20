import { stats } from "../variables.js";
export function calculateDirection(fromX, fromY, toX, toY) {
    const dx = toX - fromX;
    const dy = toY - fromY;
    const length = Math.sqrt(dx * dx + dy * dy);
    const directionX = dx / length;
    const directionY = dy / length;
    return { x: directionX, y: directionY };
}
export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function calculateDistance(fromX, fromY, fromRadius, toX, toY, toRadius) {
    let distance = Math.sqrt(Math.pow((fromX - toX), 2) + Math.pow((fromY - toY), 2));
    distance = distance - fromRadius - toRadius;
    return distance;
}
export function collideCircleResolve(c1, c2) {
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
export function calculatePercentage(currentValue, maxValue, maxWidth) {
    const percentage = (currentValue / maxValue) * 100;
    const currentWidth = (percentage / 100) * maxWidth;
    return currentWidth;
}
export function addExp(value) {
    const { currentXP, maxXP, lvl, maxXpGrowPrecentage } = stats.player;
    if (currentXP + value <= maxXP) {
        stats.player.currentXP += value;
    }
    else {
        stats.player.lvl += 1;
        stats.player.currentXP = value - (maxXP - currentXP);
        stats.player.maxXP += Math.round(maxXP * (maxXpGrowPrecentage / 100));
    }
}
