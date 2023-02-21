import { Player } from "../../classes/Player";
import { dimensions } from "../../variables";
import { addEnemies } from "../addEnemies";
import { addGrass } from "../addGrass";
export function loadPlaying() {
    // Add grass
    const grassArray = addGrass(dimensions.map.w, dimensions.map.h, 100);
    //Bullet
    const bullets = [];
    //Enemy
    addEnemies(1000, 100);
    const enemies = [];
    // ExpBalls
    const expBalls = [];
    // Player
    const player = new Player(300, 300, 20, enemies);
    return { grassArray, bullets, enemies, expBalls, player };
}
export const { grassArray, bullets, enemies, expBalls, player } = loadPlaying();
