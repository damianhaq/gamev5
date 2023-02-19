import { dimensions } from "../../variables.js";
export function drawText(x, y, text, color, c) {
    c.fillStyle = color;
    c.fillText(text, x + dimensions.map.x, y + dimensions.map.y);
}
