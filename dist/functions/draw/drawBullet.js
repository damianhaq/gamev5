export function drawBullet(c, x, y, radius) {
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2);
}
