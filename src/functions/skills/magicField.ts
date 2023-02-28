import { MagicField } from "../../classes/MagicField.js";
import { Sprite } from "../../classes/Sprite.js";
import { instances, stats } from "../../variables.js";

export function magicField(who: Sprite) {
  instances.skills.magicField = new MagicField(who);
}

export function magicFieldLvlUp() {
  if (stats.skills.magicField.lvl === 0) {
    stats.skills.magicField.lvl = 1;
    magicField(instances.player);
  } else {
    // instances.skills.magicField = null;

    stats.skills.magicField.damage += 1;
    stats.skills.magicField.radius += 10;
    stats.skills.magicField.lvl += 1;

    // magicField(instances.player);
  }
}
