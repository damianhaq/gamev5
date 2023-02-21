import { c } from "../../app.js";
import { dimensions } from "../../variables.js";
export function drawText(x, y, text, fontSize, font, color) {
    c.font = `${fontSize}px ${font}`;
    c.textAlign = "center";
    c.fillStyle = color;
    c.fillText(text, x + dimensions.map.x, y + dimensions.map.y);
}
