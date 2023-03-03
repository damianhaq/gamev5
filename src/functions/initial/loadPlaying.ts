import { Enemy } from "../../classes/Enemy.js";
import { Heart } from "../../classes/Heart.js";
import { Player } from "../../classes/Player.js";
import { Character } from "../../newClases/Character.js";
import { EnemyCh } from "../../newClases/extend/EnemyCh.js";
import { dimensions, game, instances, spriteSheetData } from "../../variables.js";
import { addEnemies } from "../addEnemies.js";
import { addGrass } from "../addGrass.js";
import { circlingBall } from "../skills/circlingBall.js";
import { magicField } from "../skills/magicField.js";
import { projectile, projectileLvlUp } from "../skills/projectile.js";

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
