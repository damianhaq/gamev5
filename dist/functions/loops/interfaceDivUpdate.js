import { add, lvl, up, hr, bd, as, pn, cbd, cbs, cbr, cbns } from "../../app.js";
import { stats } from "../../variables.js";
export function interfaceDivUpdate() {
    add.update(stats.game.AllDamageDone);
    lvl.update(stats.player.lvl);
    up.update(stats.player.upgradePoints);
    hr.update(stats.player.hpRegen);
    bd.update(stats.player.baseDamage);
    as.update(stats.skills.baseAttack.speed);
    pn.update(stats.skills.baseAttack.penetrationNumber);
    cbd.update(stats.skills.circlingBalls.damage);
    cbs.update(stats.skills.circlingBalls.speed);
    cbr.update(stats.skills.circlingBalls.radius);
    cbns.update(stats.skills.circlingBalls.numberBalls);
}
// TODO: jak to zrobić ?
