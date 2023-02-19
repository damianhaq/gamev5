import { enemies } from "../app.js";
import { Enemy } from "../classes/Enemy.js";
import { dimensions } from "../variables.js";
import { randomNumber } from "./helpers.js";
export function addEnemies(interval, maxEnemies) {
    let site;
    const iid = setInterval(() => {
        let x = 0;
        let y = 0;
        // pick which site of screen spawn enemies
        const site = getSite();
        // random coordinate according to site
        switch (site) {
            case "left":
                x = randomNumber(dimensions.map.x * -1, dimensions.map.x * -1 - 50);
                y = randomNumber(dimensions.map.y * -1, dimensions.map.y * -1 + dimensions.canvas.h);
                break;
            case "up":
                x = randomNumber(dimensions.map.x * -1, dimensions.map.x * -1 + dimensions.canvas.w);
                y = randomNumber(dimensions.map.y * -1, dimensions.map.y * -1 - 50);
                break;
            case "right":
                x = randomNumber(dimensions.map.x * -1 + dimensions.canvas.w, dimensions.map.x * -1 + dimensions.canvas.w + 50);
                y = randomNumber(dimensions.map.y * -1, dimensions.map.y * -1 + dimensions.canvas.h);
                break;
            case "down":
                x = randomNumber(dimensions.map.x * -1, dimensions.map.x * -1 + dimensions.canvas.w);
                y = randomNumber(dimensions.map.y * -1 + dimensions.canvas.h, dimensions.map.y * -1 + dimensions.canvas.h + 50);
                break;
        }
        // if (x < 0 || x > dimensions.map.w) {
        //   console.log("poza mapą x");
        // }
        // console.log("site:", site, "x: ", x, "y: ", y);
        enemies.push(new Enemy(x, y, 12, 0.5));
    }, interval);
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
