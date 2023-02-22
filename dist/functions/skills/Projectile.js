import { Bullet } from "../../classes/Bullet.js";
import { game, instances } from "../../variables.js";
import { calculateDirection, findNearestEnemy } from "../helpers.js";
export function projectile() {
    let iid;
    let countId = 0;
    const data = {
        attackSpeed: 2100,
        movementSpeed: 2,
        damage: 25,
        radius: 15,
        penetrationNumber: 5,
    };
    if (!iid) {
        iid = setInterval(() => {
            if (instances.enemies.length > 0 && !game.isPause) {
                const nearestEnemy = findNearestEnemy(instances.player);
                // draw line to nearest enemy
                // drawLine(this.x, this.y, nearestEnemy.x, nearestEnemy.y, "#007acc", c);
                const direction = calculateDirection(instances.player.x, instances.player.y, nearestEnemy.x, nearestEnemy.y);
                countId++;
                instances.bullets.push(new Bullet(instances.player.x, instances.player.y, data.radius, data.movementSpeed, direction, data.damage, `${countId}projectile`, data.penetrationNumber));
            }
            if (game.isGameOver) {
                clearInterval(iid);
                iid = null;
            }
        }, data.attackSpeed);
    }
}
