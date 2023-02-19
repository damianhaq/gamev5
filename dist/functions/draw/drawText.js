import { dimensions } from "../../variables.js";
export function drawText(x, y, text, c) {
    c.fillText(text, x + dimensions.map.x, y + dimensions.map.y);
}
