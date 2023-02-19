import { dimensions } from "../variables.js";
export function camera(player) {
    dimensions.map.x = player.x * -1 + dimensions.canvas.w / 2;
    dimensions.map.y = player.y * -1 + dimensions.canvas.h / 2;
}
