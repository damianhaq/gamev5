import { MagicField } from "../../classes/MagicField.js";
import { Sprite } from "../../classes/Sprite.js";
import { instances } from "../../variables.js";

export function magicField(who: Sprite) {
  const data = {
    attackSpeed: 100,
    damage: 3,
    radius: 100,
  };

  instances.skills.magicField = new MagicField(
    who,
    data.radius,
    data.damage,
    data.attackSpeed
  );
}
