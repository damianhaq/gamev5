import { c } from "../../app.js";
import { dimensions } from "../../variables.js";
export function drawText(x, y, text, fontSize, font, color, stroke = {
    stroke: false,
    color: "",
    lineWidth: 0,
}) {
    c.save();
    c.font = `${fontSize}px ${font}`;
    if (stroke.stroke) {
        c.strokeStyle = stroke.color;
        c.lineWidth = stroke.lineWidth;
        c.strokeText(text, x + dimensions.map.x, y + dimensions.map.y);
    }
    c.textAlign = "center";
    c.fillStyle = color;
    c.fillText(text, x + dimensions.map.x, y + dimensions.map.y);
    c.restore();
}
