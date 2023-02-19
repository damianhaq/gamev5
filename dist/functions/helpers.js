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
