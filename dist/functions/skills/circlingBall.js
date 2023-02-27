import { Circling } from "../../classes/Circling.js";
import { game, instances, stats } from "../../variables.js";
export function circlingBall(who) {
    const { radius, radiusElement, speed, numberBalls } = stats.skills.circlingBalls;
    const angle = Math.round(360 / numberBalls);
    for (let i = 0; i < numberBalls; i++) {
        instances.skills.circling.push(new Circling(who, radius, radiusElement, speed, angle * i, i + "circleBall", "fill", game.colors.blue));
    }
}
export function circlingBallLvlUp() {
    if (stats.skills.circlingBalls.lvl === 0) {
        stats.skills.circlingBalls.lvl = 1;
        circlingBall(instances.player);
    }
    else {
        instances.skills.circling.length = 0;
        stats.skills.circlingBalls.numberBalls += 1;
        stats.skills.circlingBalls.lvl += 1;
        circlingBall(instances.player);
    }
}
