import { dimensions } from "../../variables.js";
export function drawGrass(x, y, radius, type, color, c) {
    c.beginPath();
    c.moveTo(8 + x + dimensions.map.x, 16 + y + dimensions.map.y);
    c.lineTo(6 + x + dimensions.map.x, 8 + y + dimensions.map.y);
    c.lineTo(0 + x + dimensions.map.x, 0 + y + dimensions.map.y);
    c.moveTo(8 + x + dimensions.map.x, 16 + y + dimensions.map.y);
    c.lineTo(10 + x + dimensions.map.x, 8 + y + dimensions.map.y);
    c.lineTo(10 + x + dimensions.map.x, 0 + y + dimensions.map.y);
    c.stroke();
    // c.beginPath();
    // c.arc(x + dimensions.map.x, y + dimensions.map.y, radius / 3, 0, Math.PI * 2);
    // c.stroke();
    // c.beginPath();
    // c.arc(x + dimensions.map.x + 7, y + dimensions.map.y, radius / 3, 0, Math.PI * 2);
    // c.stroke();
    // c.beginPath();
    // c.arc(x + dimensions.map.x - 7, y + dimensions.map.y, radius / 3, 0, Math.PI * 2);
    // c.stroke();
    // c.beginPath();
    // c.arc(x + dimensions.map.x, y + 7 + dimensions.map.y, radius / 3, 0, Math.PI * 2);
    // c.stroke();
    // c.beginPath();
    // c.arc(x + dimensions.map.x, y + 7 + dimensions.map.y, radius / 3, 0, Math.PI * 2);
    // c.stroke();
    // c.beginPath();
    // c.arc(x + dimensions.map.x, y - 7 + dimensions.map.y, radius / 3, 0, Math.PI * 2);
    // c.stroke();
}
