import { calculateDirection } from "../functions/helpers.js";
import { dimensions } from "../variables.js";
import { Player } from "./Player.js";
import { Sprite } from "./Sprite.js";

export class Enemy extends Sprite {
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public speed: number
  ) {
    super(x, y, radius);
    this.speed = speed;
  }

  moveTowardsPlayer(player: Player) {
    const direction = calculateDirection(
      this.x,
      this.y,
      player.x - dimensions.map.x,
      player.y - dimensions.map.y
    );

    this.x += direction.x * this.speed;
    this.y += direction.y * this.speed;
  }
}
