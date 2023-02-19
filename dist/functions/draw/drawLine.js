import { dimensions } from "../../variables.js";
export function drawLine(fromX, fromY, toX, toY, color, c) {
    c.beginPath();
    c.strokeStyle = color;
    c.moveTo(fromX + dimensions.map.x, fromY + dimensions.map.y);
    c.lineTo(toX + dimensions.map.x, toY + dimensions.map.y);
    c.stroke();
}
