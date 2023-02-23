import { Player } from "../../classes/Player.js";
import { dimensions, instances } from "../../variables.js";
import { addEnemies } from "../addEnemies.js";
import { addGrass } from "../addGrass.js";
export function loadPlaying() {
    // Add grass
    instances.grassArray = addGrass(dimensions.map.w, dimensions.map.h, 100);
    //Bullet
    instances.bullets = [];
    instances.skills.circling = [];
    //Enemy
    instances.enemies = [];
    addEnemies(1000, 100);
    // ExpBalls
    instances.expBalls = [];
    // Player
    instances.player = new Player(300, 300, 20, instances.enemies);
    instances.appearingText = [];
}
