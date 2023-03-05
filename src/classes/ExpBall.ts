// import { player } from "../app.js";
import { c, spriteSheet } from "../app.js";
import { addExp, calculateDirection, calculateDistance } from "../functions/helpers.js";
// import { player } from "../functions/initial/playing.js";
import { dimensions, game, instances, spriteSheetData, stats } from "../variables.js";
import { Sprite } from "./Sprite.js";

export class ExpBall {
  speed: number;
  animData: {
    frameInterval: number;
    currentFrame: number;
    addX: number;
    addY: number;
  };
  spriteSheetData: {
    x: number;
    y: number;
    w: number;
    h: number;
    frames: number;
    duration: number;
  };
  showHitBox: boolean;
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public expValue: number
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.speed = 2.5;
    this.expValue = expValue;
    this.animData = {
      frameInterval: 0,
      currentFrame: 1,
      addX: 0,
      addY: 0,
    };
    this.spriteSheetData = spriteSheetData.rune;

    this.showHitBox = false;
  }

  update(index: number, deltaTime: number) {
    this.moveToPlayer(index);
    this.draw(deltaTime);
  }

  draw(deltaTime: number) {
    this.animData.frameInterval += deltaTime;

    if (!game.isPause && this.animData.frameInterval > this.spriteSheetData.duration) {
      this.animData.currentFrame++;
      if (this.animData.currentFrame >= this.spriteSheetData.frames) {
        this.animData.currentFrame = 0;
      }
      this.animData.frameInterval = 0;
    }

    c.drawImage(
      spriteSheet,
      this.spriteSheetData.x + this.animData.currentFrame * this.spriteSheetData.w,
      this.spriteSheetData.y,
      this.spriteSheetData.w,
      this.spriteSheetData.h,
      this.x + dimensions.map.x - this.spriteSheetData.w - this.animData.addX,
      this.y + dimensions.map.y - this.spriteSheetData.h - this.animData.addY,
      this.spriteSheetData.w * 2,
      this.spriteSheetData.h * 2
    );

    if (this.showHitBox) {
      c.beginPath();
      c.arc(
        this.x + dimensions.map.x,
        this.y + dimensions.map.y,
        this.radius,
        0,
        Math.PI * 2
      );
      c.stroke();
    }
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
        // stats.player.currentXP += this.expValue;
        addExp(this.expValue);
        instances.expBalls.splice(index, 1);
      }
    }
  }
}
