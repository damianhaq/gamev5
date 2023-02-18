import { dimensions } from "../variables.js";
export function drawMap(c) {
    c.rect(dimensions.map.x, dimensions.map.y, dimensions.map.w, dimensions.map.h);
    c.stroke();
}
