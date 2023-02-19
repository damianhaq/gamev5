import { enemies } from "../app.js";
import { calculateDirection, calculateDistance } from "../functions/helpers.js";
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
      this.resolveCircle(player);
    } else {
    }
  }

  resolveCircle(player) {
    let distance_x = this.x - player.x;
    let distance_y = this.y - player.y;
    let radii_sum = this.radius + player.radius;
    let length = Math.sqrt(distance_x * distance_x + distance_y * distance_y) || 1;
    let unit_x = distance_x / length;
    let unit_y = distance_y / length;

    this.x = player.x + (radii_sum + 1) * unit_x;
    this.y = player.y + (radii_sum + 1) * unit_y;
  }

  die(index: number) {
    if (this.hp <= 0) enemies.splice(index, 1);
  }
}
