// import { enemies } from "../app.js";
import { Enemy } from "../classes/Enemy.js";
import { dimensions, game, instances } from "../variables.js";
import { randomNumber } from "./helpers.js";
// import { enemies } from "./initial/playing.js";
export function addEnemies(interval, maxEnemies) {
    let site;
    let iid;
    let counter = 0;
    let timesSpawn = 1;
    if (!iid) {
        iid = setInterval(() => {
            let x = 0;
            let y = 0;
            timesSpawn = 1 + Math.floor(counter / 10);
            // pick which site of screen spawn enemies
            site = getSite();
            // site = "down";
            if (!game.isPause) {
                // random coordinate according to site
                for (let i = 0; i < timesSpawn; i++) {
                    switch (site) {
                        case "left":
                            x = randomNumber(dimensions.map.x * -1, dimensions.map.x * -1 - 50);
                            y = randomNumber(dimensions.map.y * -1 < 0 ? 0 : dimensions.map.y * -1, dimensions.map.y * -1 + dimensions.canvas.h > dimensions.map.h
                                ? dimensions.map.h
                                : dimensions.map.y * -1 + dimensions.canvas.h);
                            break;
                        case "up":
                            x = randomNumber(dimensions.map.x * -1 < 0 ? 0 : dimensions.map.x * -1, dimensions.map.x * -1 + dimensions.canvas.w > dimensions.map.w
                                ? dimensions.map.w
                                : dimensions.map.x * -1 + dimensions.canvas.w);
                            y = randomNumber(dimensions.map.y * -1, dimensions.map.y * -1 - 50);
                            break;
                        case "right":
                            x = randomNumber(dimensions.map.x * -1 + dimensions.canvas.w, dimensions.map.x * -1 + dimensions.canvas.w + 50);
                            y = randomNumber(dimensions.map.y * -1 < 0 ? 0 : dimensions.map.y * -1, dimensions.map.y * -1 + dimensions.canvas.h > dimensions.map.h
                                ? dimensions.map.h
                                : dimensions.map.y * -1 + dimensions.canvas.h);
                            break;
                        case "down":
                            x = randomNumber(dimensions.map.x * -1 < 0 ? 0 : dimensions.map.x * -1, dimensions.map.x * -1 + dimensions.canvas.w > dimensions.map.w
                                ? dimensions.map.w
                                : dimensions.map.x * -1 + dimensions.canvas.w);
                            y = randomNumber(dimensions.map.y * -1 + dimensions.canvas.h, dimensions.map.y * -1 + dimensions.canvas.h + 50);
                            break;
                    }
                    if (instances.enemies.length < maxEnemies) {
                        if (randomNumber(1, 10) <= 1) {
                            instances.enemies.push(new Enemy(x, y, 8, 0.5, 40 + counter, 48, 5, "range", "enemyRange", 300, 500));
                        }
                        else {
                            instances.enemies.push(new Enemy(x, y, 12, 0.5, 40 + counter * 2, 48, 5, "mele", "enemyRange"));
                        }
                    }
                }
                counter++;
            }
            if (game.isGameOver) {
                clearInterval(iid);
                iid = null;
            }
        }, interval);
    }
}
function getSite() {
    let finalSite;
    if (randomNumber(1, 2) === 1) {
        // losuj strone X
        if (dimensions.map.x * -1 <= 0) {
            finalSite = "right";
        }
        else if (dimensions.map.x * -1 + dimensions.canvas.w > dimensions.map.w) {
            finalSite = "left";
        }
        else {
            randomNumber(1, 2) === 1 ? (finalSite = "right") : (finalSite = "left");
        }
    }
    else {
        // losuj strone Y
        if (dimensions.map.y * -1 <= 0) {
            finalSite = "down";
        }
        else if (dimensions.map.y * -1 + dimensions.canvas.h > dimensions.map.h) {
            finalSite = "up";
        }
        else {
            randomNumber(1, 2) === 1 ? (finalSite = "down") : (finalSite = "up");
        }
    }
    return finalSite;
}
