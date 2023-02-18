import { Enemy } from "../classes/Enemy.js";
import { Player } from "../classes/Player.js";
import { dimensions } from "../variables.js";
import { addGrass } from "./addGrass.js";
export function create() {
    // Add grass
    const grassArray = addGrass(0, 0, dimensions.map.w, dimensions.map.h, 100);
    // Bullets
    const bulletsArray = null;
    // Player
    const player = new Player(dimensions.canvas.w / 2, dimensions.canvas.h / 2, 20);
    //Enemy
    const enemy = new Enemy(100, 100, 12);
    return [grassArray, bulletsArray, player, enemy];
}
