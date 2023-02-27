// import { addHtmlElement } from "../helpers.js";
import { pauseDiv } from "../../app.js";
import { NewGui } from "../../classes/NewGui.js";
import { stats } from "../../variables.js";
export function pauseDivInitial() {
    new NewGui("h1", "Pause", "", pauseDiv);
    const lvl = new NewGui("p", "Lvl: ", stats.player.lvl, pauseDiv);
    const up = new NewGui("p", "Upgrade points:", stats.player.upgradePoints, pauseDiv);
    const hr = new NewGui("p", "Hp regen: ", stats.player.hpRegen, pauseDiv);
    const add = new NewGui("p", "All damage done: ", stats.game.AllDamageDone, pauseDiv);
    // Base attack
    const baseAttackDiv = new NewGui("div", "", "", pauseDiv);
    new NewGui("h3", "Base attack", "", baseAttackDiv.newElement);
    const bd = new NewGui("p", "Damage: ", stats.player.baseDamage, baseAttackDiv.newElement);
    const as = new NewGui("p", "Attack speed: ", stats.skills.baseAttack.speed, baseAttackDiv.newElement);
    const pn = new NewGui("p", "Penetration number: ", stats.skills.baseAttack.penetrationNumber, baseAttackDiv.newElement);
    // Mystical Spheres
    const mysticalSpheresDiv = new NewGui("div", "", "", pauseDiv);
    let cbd;
    let cbs;
    let cbr;
    let cbns;
    // if (stats.skills.circlingBalls.lvl !== 0) {
    const cbl = new NewGui("h3", stats.skills.circlingBalls.name, stats.skills.circlingBalls.lvl, mysticalSpheresDiv.newElement);
    cbd = new NewGui("p", "Damage: ", stats.skills.circlingBalls.damage, mysticalSpheresDiv.newElement);
    cbs = new NewGui("p", "Speed: ", stats.skills.circlingBalls.speed, mysticalSpheresDiv.newElement);
    cbr = new NewGui("p", "Range: ", stats.skills.circlingBalls.radius, mysticalSpheresDiv.newElement);
    cbns = new NewGui("p", "Number spheres: ", stats.skills.circlingBalls.numberBalls, mysticalSpheresDiv.newElement);
    // Fire ball
    const fireBallDiv = new NewGui("div", "", "", pauseDiv);
    const fbl = new NewGui("h3", stats.skills.fireBall.name, stats.skills.fireBall.lvl, fireBallDiv.newElement);
    const fbd = new NewGui("p", "Damage: ", stats.skills.fireBall.damage, fireBallDiv.newElement);
    const fbms = new NewGui("p", "Movement speed: ", stats.skills.fireBall.movementSpeed, fireBallDiv.newElement);
    const fbas = new NewGui("p", "Attack speed: ", stats.skills.fireBall.attackSpeed, fireBallDiv.newElement);
    const fbpn = new NewGui("p", "Penetration number: ", stats.skills.fireBall.penetrationNumber, fireBallDiv.newElement);
    const fbbd = new NewGui("p", "Burn damage: ", stats.skills.fireBall.burn.damage, fireBallDiv.newElement);
    return [
        add,
        lvl,
        up,
        hr,
        bd,
        as,
        pn,
        cbd,
        cbs,
        cbr,
        cbns,
        mysticalSpheresDiv,
        cbl,
        fireBallDiv,
        fbl,
        fbd,
        fbms,
        fbas,
        fbpn,
        fbbd,
    ];
}
