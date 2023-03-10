// import { enemies } from "../app.js";
import { Enemy } from "../classes/Enemy.js";
import { EnemyCh } from "../newClases/extend/EnemyCh.js";
import { dimensions, game, instances, spriteSheetData } from "../variables.js";
import { randomNumber } from "./helpers.js";
// import { enemies } from "./initial/playing.js";

export function addEnemies(interval: number, maxEnemies: number) {
  let site: "left" | "right" | "up" | "down";
  let iid: number;
  let counter: number = 0;
  let timesSpawn = 1;

  if (!iid) {
    iid = setInterval(() => {
      let x: number = 0;
      let y: number = 0;
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
              y = randomNumber(
                dimensions.map.y * -1 < 0 ? 0 : dimensions.map.y * -1,
                dimensions.map.y * -1 + dimensions.canvas.h > dimensions.map.h
                  ? dimensions.map.h
                  : dimensions.map.y * -1 + dimensions.canvas.h
              );
              break;
            case "up":
              x = randomNumber(
                dimensions.map.x * -1 < 0 ? 0 : dimensions.map.x * -1,
                dimensions.map.x * -1 + dimensions.canvas.w > dimensions.map.w
                  ? dimensions.map.w
                  : dimensions.map.x * -1 + dimensions.canvas.w
              );
              y = randomNumber(dimensions.map.y * -1, dimensions.map.y * -1 - 50);
              break;
            case "right":
              x = randomNumber(
                dimensions.map.x * -1 + dimensions.canvas.w,
                dimensions.map.x * -1 + dimensions.canvas.w + 50
              );
              y = randomNumber(
                dimensions.map.y * -1 < 0 ? 0 : dimensions.map.y * -1,
                dimensions.map.y * -1 + dimensions.canvas.h > dimensions.map.h
                  ? dimensions.map.h
                  : dimensions.map.y * -1 + dimensions.canvas.h
              );
              break;
            case "down":
              x = randomNumber(
                dimensions.map.x * -1 < 0 ? 0 : dimensions.map.x * -1,
                dimensions.map.x * -1 + dimensions.canvas.w > dimensions.map.w
                  ? dimensions.map.w
                  : dimensions.map.x * -1 + dimensions.canvas.w
              );
              y = randomNumber(
                dimensions.map.y * -1 + dimensions.canvas.h,
                dimensions.map.y * -1 + dimensions.canvas.h + 50
              );
              break;
          }

          if (instances.enemiesCh.length < maxEnemies) {
            if (randomNumber(1, 10) <= 1) {
              // range enemies
            } else {
              instances.enemiesCh.push(
                new EnemyCh(
                  x,
                  y,
                  8,
                  0,
                  300,
                  0.5 + +(counter / 100).toFixed(3),
                  10,
                  40 + counter * 2,
                  spriteSheetData.tinyZombie,
                  "tinyZombie" + counter,
                  48
                )
              );
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

function getSite(): "left" | "right" | "up" | "down" {
  let finalSite: "left" | "right" | "up" | "down";
  if (randomNumber(1, 2) === 1) {
    // losuj strone X
    if (dimensions.map.x * -1 <= 0) {
      finalSite = "right";
    } else if (dimensions.map.x * -1 + dimensions.canvas.w > dimensions.map.w) {
      finalSite = "left";
    } else {
      randomNumber(1, 2) === 1 ? (finalSite = "right") : (finalSite = "left");
    }
  } else {
    // losuj strone Y
    if (dimensions.map.y * -1 <= 0) {
      finalSite = "down";
    } else if (dimensions.map.y * -1 + dimensions.canvas.h > dimensions.map.h) {
      finalSite = "up";
    } else {
      randomNumber(1, 2) === 1 ? (finalSite = "down") : (finalSite = "up");
    }
  }
  return finalSite;
}
