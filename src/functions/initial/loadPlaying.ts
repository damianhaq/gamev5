import { Player } from "../../classes/Player.js";
import { dimensions, game, instances } from "../../variables.js";
import { addEnemies } from "../addEnemies.js";
import { addGrass } from "../addGrass.js";
import { circlingBall } from "../skills/circlingBall.js";
import { magicField } from "../skills/magicField.js";
import { projectile } from "../skills/projectile.js";

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

  // base attack
  instances.player.shoot();
  // skills
  projectile();
  // magicField(instances.player);
}
