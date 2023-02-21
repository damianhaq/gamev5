import { Player } from "../../classes/Player.js";
import { dimensions, instances } from "../../variables.js";
import { addEnemies } from "../addEnemies.js";
import { addGrass } from "../addGrass.js";
export function loadPlaying() {
    // Add grass
    instances.grassArray = addGrass(dimensions.map.w, dimensions.map.h, 100);
    //Bullet
    instances.bullets = [];
    //Enemy
    addEnemies(1000, 100);
    instances.enemies = [];
    // ExpBalls
    instances.expBalls = [];
    // Player
    instances.player = new Player(300, 300, 20, instances.enemies);
}
