import { Bullet } from "../../classes/Bullet.js";
import { game, instances, stats } from "../../variables.js";
import { calculateDirection, findNearestEnemy } from "../helpers.js";
let projectileiid;
export function projectile() {
    let countId = 0;
    const data = {
        attackSpeed: stats.skills.fireBall.attackSpeed,
        movementSpeed: stats.skills.fireBall.movementSpeed,
        damage: stats.skills.fireBall.damage,
        radius: stats.skills.fireBall.radius,
        penetrationNumber: stats.skills.fireBall.penetrationNumber,
    };
    if (!projectileiid) {
        projectileiid = setInterval(() => {
            if (instances.enemies.length > 0 && !game.isPause && instances.player) {
                const nearestEnemy = findNearestEnemy(instances.player);
                // draw line to nearest enemy
                // drawLine(this.x, this.y, nearestEnemy.x, nearestEnemy.y, "#007acc", c);
                const direction = calculateDirection(instances.player.x, instances.player.y, nearestEnemy.x, nearestEnemy.y);
                countId++;
                instances.bullets.push(new Bullet(instances.player.x, instances.player.y, data.radius, data.movementSpeed, direction, data.damage, `${countId}projectile`, ["enemyRange"], data.penetrationNumber, true));
            }
            if (game.isGameOver) {
                clearInterval(projectileiid);
                projectileiid = null;
            }
        }, data.attackSpeed);
    }
}
export function projectileLvlUp() {
    if (stats.skills.fireBall.lvl === 0) {
        stats.skills.fireBall.lvl = 1;
        projectile();
    }
    else {
        // stats.skills.fireBall.numberBalls += 1;
        clearInterval(projectileiid);
        projectileiid = null;
        stats.skills.fireBall.lvl += 1;
        stats.skills.fireBall.damage += 3;
        projectile();
    }
}
