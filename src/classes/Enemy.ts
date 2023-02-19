import { enemies } from "../app.js";
import {
  calculateDirection,
  calculateDistance,
  collideCircleResolve,
} from "../functions/helpers.js";
import { Player } from "./Player.js";
import { Sprite } from "./Sprite.js";

export class Enemy extends Sprite {
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public speed: number,
    hp: number
  ) {
    super(x, y, radius);
    this.speed = speed;
    this.hp = hp;
  }

  moveTowardsPlayer(player: Player) {
    const direction = calculateDirection(this.x, this.y, player.x, player.y);

    this.x += direction.x * this.speed;
    this.y += direction.y * this.speed;

    const distance = calculateDistance(
      this.x,
      this.y,
      this.radius,
      player.x,
      player.y,
      player.radius
    );
    if (distance <= 0) {
      const { x, y } = collideCircleResolve(this, player);
      this.x = x;
      this.y = y;
    } else {
    }
  }

  die(index: number) {
    if (this.hp <= 0) enemies.splice(index, 1);
  }
}
