import { Sprite } from "../classes/Sprite.js";
import { Character } from "../newClases/Character.js";
import { dimensions } from "../variables.js";

export function camera(player: Character) {
  dimensions.map.x = player.x * -1 + dimensions.canvas.w / 2;
  dimensions.map.y = player.y * -1 + dimensions.canvas.h / 2;
}
