import { add, lvl, up, hr, bd, as, pn, cbd, cbs, cbr, cbns, cbl, fbl, fbd, fbms, fbas, fbpn, fbbd, mysticalSpheresDiv, fireBallDiv, } from "../../app.js";
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
    cbl.update(stats.skills.circlingBalls.lvl);
    if (stats.skills.circlingBalls.lvl === 0) {
        mysticalSpheresDiv.newElement.style.display = "none";
    }
    else if (stats.skills.circlingBalls.lvl > 0) {
        mysticalSpheresDiv.newElement.style.display = "block";
    }
    fbl.update(stats.skills.fireBall.lvl);
    fbd.update(stats.skills.fireBall.damage);
    fbms.update(stats.skills.fireBall.movementSpeed);
    fbas.update(stats.skills.fireBall.attackSpeed);
    fbpn.update(stats.skills.fireBall.penetrationNumber);
    fbbd.update(stats.skills.fireBall.burn.damage);
    if (stats.skills.fireBall.lvl === 0) {
        fireBallDiv.newElement.style.display = "none";
    }
    else if (stats.skills.fireBall.lvl > 0) {
        fireBallDiv.newElement.style.display = "block";
    }
}
// TODO: jak to zrobić ?
