import { Player } from "../../classes/Player.js";
import { EnemyCh } from "../../newClases/extend/EnemyCh.js";
import { dimensions, instances, spriteSheetData } from "../../variables.js";
import { addGrass } from "../addGrass.js";
export function loadPlaying() {
    // Add grass
    instances.grassArray = addGrass(dimensions.map.w, dimensions.map.h, 100);
    //Bullet
    instances.bullets = [];
    instances.skills.circling = [];
    //Enemy
    instances.enemies = [];
    // NewClass Character
    instances.characters.push(new EnemyCh(100, 100, spriteSheetData.tinyZombie));
    // addEnemies(1000, 200);
    // ExpBalls
    instances.expBalls = [];
    // Player
    instances.player = new Player(300, 300, 20, instances.enemies);
    instances.appearingText = [];
    instances.hearts = [];
    // instances.hearts.push(new Heart(20, 500));
    // base attack
    instances.player.shoot();
    // skills
    // projectileLvlUp();
    // magicField(instances.player);
}
