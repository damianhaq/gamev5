import { c } from "../app.js";
import { calculateDirection, calculateDistance } from "../functions/helpers.js";
import { dimensions, game, instances, stats } from "../variables.js";

export class Heart {
  radius: number;
  speed: number;
  constructor(public x: number, public y: number) {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.speed = 5;
  }

  update(index: number) {
    this.draw();
    this.moveToPlayer(index);
  }

  draw() {
    c.save();

    c.fillStyle = "red";
    c.beginPath();

    const shift = 5;

    c.moveTo(
      5 + this.x + dimensions.map.x - shift,
      2 + this.y + dimensions.map.y - shift
    );
    c.lineTo(
      7 + this.x + dimensions.map.x - shift,
      0 + this.y + dimensions.map.y - shift
    );
    c.lineTo(
      10 + this.x + dimensions.map.x - shift,
      0 + this.y + dimensions.map.y - shift
    );
    c.lineTo(
      10 + this.x + dimensions.map.x - shift,
      5 + this.y + dimensions.map.y - shift
    );
    c.lineTo(
      5 + this.x + dimensions.map.x - shift,
      10 + this.y + dimensions.map.y - shift
    );

    c.lineTo(
      0 + this.x + dimensions.map.x - shift,
      5 + this.y + dimensions.map.y - shift
    );
    c.lineTo(
      0 + this.x + dimensions.map.x - shift,
      0 + this.y + dimensions.map.y - shift
    );
    c.lineTo(
      3 + this.x + dimensions.map.x - shift,
      0 + this.y + dimensions.map.y - shift
    );
    c.lineTo(
      5 + this.x + dimensions.map.x - shift,
      2 + this.y + dimensions.map.y - shift
    );
    c.closePath();
    c.fill();

    // c.strokeStyle = color;

    // c.beginPath();
    // c.arc(
    //   this.x + dimensions.map.x,
    //   this.y + dimensions.map.y,
    //   this.radius,
    //   0,
    //   Math.PI * 2
    // );
    // c.stroke();
    c.restore();
  }

  moveToPlayer(index: number): void {
    const distance = calculateDistance(
      this.x,
      this.y,
      this.radius,
      instances.player.x,
      instances.player.y,
      instances.player.radius
    );

    if (distance < stats.player.pickupRange) {
      const direction = calculateDirection(
        this.x,
        this.y,
        instances.player.x,
        instances.player.y
      );

      if (!game.isPause) {
        this.x += direction.x * this.speed;
        this.y += direction.y * this.speed;
      }

      if (distance <= 0) {
        instances.player.heal(stats.game.healHeartValue);
        instances.hearts.splice(index, 1);
      }
    }
  }
}
