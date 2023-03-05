import { Heart } from "../../classes/Heart.js";
import { PlayerCh } from "../../newClases/extend/PlayerCh.js";
import { dimensions, game, instances, spriteSheetData, stats } from "../../variables.js";
import { addEnemies } from "../addEnemies.js";
import { addGrass } from "../addGrass.js";

// import { projectile, projectileLvlUp } from "../skills/goldenSword.js";

export function loadPlaying() {
  // Add grass
  instances.grassArray = addGrass(dimensions.map.w, dimensions.map.h, 100);

  // Projectiles
  instances.projectiles = [];

  instances.skills.circling = [];

  // New Enemies
  instances.enemiesCh = [];

  // NewClass Character
  addEnemies(1000, 100);

  // ExpBalls
  instances.expBalls = [];

  //New Player

  instances.player = new PlayerCh(100, 100, 16, 100, "playerCh", spriteSheetData.elf_m);

  instances.appearingText = [];

  instances.hearts = [];
  instances.hearts.push(new Heart(20, 500, spriteSheetData.heart));

  // skills
  // projectileLvlUp();
  // magicField(instances.player);
}
