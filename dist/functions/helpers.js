import { lvlupDiv } from "../app.js";
import { game, instances, stats } from "../variables.js";
import { circlingBallLvlUp } from "./skills/circlingBall.js";
import { projectileLvlUp } from "./skills/projectile.js";
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
    let distance = Math.sqrt((fromX - toX) ** 2 + (fromY - toY) ** 2);
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
        lvlup();
        stats.player.currentXP = value - (maxXP - currentXP);
        stats.player.maxXP += Math.round(maxXP * (maxXpGrowPrecentage / 100));
    }
}
// execute once lvlup
export function lvlup() {
    game.isPause = true;
    game.gameState = "lvlup";
    // styles
    lvlupDiv.style.display = "inline-block";
    //stats
    stats.player.upgradePoints += 1;
    stats.player.baseDamage += 1;
    console.log(stats.player);
    circlingBallLvlUp();
    projectileLvlUp();
}
export function saveDataToLocalStorage(data) {
    localStorage.setItem(game.localStorageKey, JSON.stringify(data));
}
export function loadDataFromLocalStorage() {
    const data = localStorage.getItem(game.localStorageKey);
    if (data) {
        return JSON.parse(data);
    }
    return null;
}
export function findNearestEnemy(player) {
    let nearestEnemy = null;
    let nearestDistance = Number.MAX_VALUE;
    for (const enemy of instances.enemies) {
        let distance;
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
// export function addHtmlElement(
//   element: string,
//   parent: HTMLElement,
//   innerText: string,
//   value: string | number = ""
// ) {
//   const el: HTMLElement = document.createElement(element);
//   el.innerText = innerText + value;
//   parent.appendChild(el);
//   return { el: el, string: innerText, value: value };
// }
