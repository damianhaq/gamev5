import { Character } from "../Character.js";

export class EnemyCh extends Character {
  constructor(public x: number, public y: number, public spriteSheetData) {
    super();
    this.x = x;
    this.y = y;
    this.spriteSheetData = spriteSheetData;
  }
}
