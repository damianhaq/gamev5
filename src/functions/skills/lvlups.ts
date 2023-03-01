import { stats } from "../../variables.js";

export function attackSpeedLvlUp() {
  stats.skills.baseAttack.speed -= 100;
}
export function moveSpeedLvlUp() {
  stats.player.movementSpeed = +(stats.player.movementSpeed + 0.3).toFixed(1);
}
export function penNumLvlUp() {
  stats.skills.baseAttack.penetrationNumber += 1;
}
export function maxHpLvlUp() {
  stats.player.maxHP += 10;
  stats.player.currentHP += 10;
}
export function hpRegenLvlUp() {
  stats.player.hpRegen += 1;
}
export function armorLvlUp() {
  stats.player.armor += 1;
}
export function growMaxXpLvlUp() {
  stats.player.maxXpGrowPrecentage -= 2;
}
export function dmgLvlUp() {
  stats.player.baseDamage += 1;
}
export function pickupRangeLvlUp() {
  stats.player.pickupRange += 20;
}
