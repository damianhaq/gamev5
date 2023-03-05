import { c } from "../../app.js";
import { game, instances } from "../../variables.js";
import { camera } from "../camera.js";
import { drawGrass } from "../draw/drawGrass.js";
import { drawMap } from "../drawMap.js";
import { guiPlaying } from "../GUIs/guiPlaying.js";
import { goldenSwordUpdate } from "../skills/goldenSword.js";
export function playing(deltaTime) {
    var _a;
    if (game.isGameOver)
        return;
    camera(instances.player);
    (_a = instances.skills.magicField) === null || _a === void 0 ? void 0 : _a.update();
    instances.skills.circling.forEach((el) => {
        el.update(c);
        el.collisionEnemy();
    });
    instances.grassArray.forEach((el) => el.update(c, drawGrass));
    drawMap(c);
    instances.projectiles.forEach((projectile, index) => {
        projectile.update(deltaTime, index);
    });
    instances.player.update(deltaTime);
    instances.expBalls.forEach((exp, index) => {
        exp.update(index, deltaTime);
    });
    instances.hearts.forEach((heart, index) => {
        heart.update(index);
    });
    instances.enemiesCh.forEach((el, index) => {
        el.update(deltaTime, index);
    });
    goldenSwordUpdate(deltaTime);
    instances.appearingText.forEach((el, index) => {
        el.update(index);
    });
    guiPlaying();
}
