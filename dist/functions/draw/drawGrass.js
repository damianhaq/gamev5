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
}
