import { MagicField } from "../../classes/MagicField.js";
import { instances } from "../../variables.js";
export function magicField(who) {
    const data = {
        attackSpeed: 100,
        damage: 3,
        radius: 200,
    };
    instances.skills.magicField = new MagicField(who, data.radius, data.damage, data.attackSpeed);
}
