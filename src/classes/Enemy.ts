// import { enemies, expBalls } from "../app.js";
import {
  calculateDirection,
  calculateDistance,
  collideCircleResolve,
  randomNumber,
} from "../functions/helpers.js";
import { game, instances, stats } from "../variables.js";
import { AppearingText } from "./AppearingText.js";
import { Bullet } from "./Bullet.js";
// import { enemies, expBalls } from "../functions/initial/playing.js";
import { ExpBall } from "./expBall.js";
import { Heart } from "./Heart.js";
import { Player } from "./Player.js";
import { Sprite } from "./Sprite.js";

export class Enemy extends Sprite {
  immuneProjectilesId: string[];

  knockback: {
    direction: {
      x: number;
      y: number;
    };
    duration: number;
    moveSpeed: number;
  };

  buffCount: number;
  buffTimeout: number;
  buffFlag: boolean;

  burnDamage: number;
  canAttack: boolean;
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public speed: number,
    hp: number,
    public expDropValue: number,
    public dmg: number,

    public type: "mele" | "range",

    public id: string,
    public attackRange: number = 0,
    public attackSpeed: number = 0
  ) {
    super(x, y, radius);
    this.speed = speed;
    this.hp = hp;
    this.dmg = dmg;
    this.type = type;
    this.id = id;
    this.expDropValue = expDropValue;
    this.immuneProjectilesId = [];
    this.attackSpeed = attackSpeed;
    this.canAttack = true;

    this.buffCount = 0;
    this.buffTimeout = 0;
    this.buffFlag = true;

    this.burnDamage = 0;

    this.knockback = { direction: { x: 0, y: 0 }, duration: 0, moveSpeed: 0 };
  }

  setKnockback(fromX: number, fromY: number, duration: number, speed: number) {
    this.knockback.direction = calculateDirection(this.x, this.y, fromX, fromY);
    this.knockback.duration = duration;
    this.knockback.moveSpeed = speed;
  }

  moveTowardsPlayer(player: Player) {
    if (!game.isPause) {
      const direction = calculateDirection(this.x, this.y, player.x, player.y);
      const distance = calculateDistance(
        this.x,
        this.y,
        this.radius,
        player.x,
        player.y,
        player.radius
      );
      let distanceAttack = 0;

      if (this.type === "range") {
        distanceAttack = calculateDistance(
          this.x,
          this.y,
          this.radius + this.attackRange,
          player.x,
          player.y,
          player.radius
        );
      } else if (this.type === "mele") {
        distanceAttack = calculateDistance(
          this.x,
          this.y,
          this.radius,
          player.x,
          player.y,
          player.radius
        );
      }

      if (distanceAttack > 0) {
        // if not knockback
        if (this.knockback.duration === 0) {
          // idź
          this.x += direction.x * this.speed;
          this.y += direction.y * this.speed;
        }
      } else {
        //  atak
        if (this.type === "mele") {
          if (!player.isImmune) player.getDamage(this.dmg, this);
        } else if (this.type === "range") {
          this.rangeAttack();
        }
      }

      if (distance <= 0) {
        //  resolve
        const { x, y } = collideCircleResolve(this, player);
        this.x = x;
        this.y = y;
      }

      if (this.knockback.duration > 0) {
        //  knockback
        this.x -= this.knockback.direction.x * this.knockback.moveSpeed;
        this.y -= this.knockback.direction.y * this.knockback.moveSpeed;
        setTimeout(() => {
          this.knockback.duration = 0;
          this.knockback.direction = { x: 0, y: 0 };
        }, this.knockback.duration);
      }
    }
  }

  rangeAttack() {
    let countId: number = 0;

    if (!game.isPause) {
      if (this.canAttack) {
        this.canAttack = false;

        const direction = calculateDirection(
          this.x,
          this.y,
          instances.player.x,
          instances.player.y
        );

        countId++;
        instances.bullets.push(
          new Bullet(
            this.x,
            this.y,
            2,
            2,
            direction,
            7,
            `${countId}bulletfromenemy`,
            ["player"],
            1
          )
        );

        setTimeout(() => {
          this.canAttack = true;
        }, this.attackSpeed);
      }
    }
  }

  collideEnemies(enemies: Enemy[], index: number) {
    enemies.forEach((enemy) => {
      const distance = calculateDistance(
        this.x,
        this.y,
        this.radius,
        enemy.x,
        enemy.y,
        enemy.radius
      );

      if (distance <= 0) {
        const { x, y } = collideCircleResolve(this, enemy);
        this.x = x;
        this.y = y;
      }
    });
  }

  die(index: number) {
    if (this.hp <= 0) {
      if (randomNumber(0, 100) <= stats.game.heartDropChance) {
        console.log("Serce");

        instances.hearts.push(new Heart(this.x, this.y));
      }
      instances.expBalls.push(new ExpBall(this.x, this.y, 3, this.expDropValue));
      instances.enemies.splice(index, 1);
      stats.game.enemiesKilled += 1;
    }
  }

  getDamage(
    value: number,
    id: { id?: string | null; color?: string } = { id: null, color: game.colors.blue }
  ) {
    if (id && !this.immuneProjectilesId.includes(id.id)) {
      this.immuneProjectilesId.push(id.id);
      this.hp -= value;
      this.blink();
    }
    if (id.id === null) {
      this.hp -= value;
      this.blink();
    }

    instances.appearingText.push(
      new AppearingText(
        this.x + randomNumber(-this.radius, this.radius),
        this.y,
        500,
        value.toString(),
        16,
        id.color
      )
    );
    // console.log(id);
    // console.log(this.immuneProjectilesId);
  }

  blink() {
    this.color = game.colors.red;
    setTimeout(() => {
      this.color = game.colors.grey;
    }, 100);
  }

  burnMe() {
    if (this.buffCount > 0 && this.buffFlag) {
      this.buffFlag = false;
      this.buffCount--;
      setTimeout(() => {
        this.buffFlag = true;
        this.getDamage(this.burnDamage, { color: "#e42525" });
      }, this.buffTimeout);
    }
  }

  // moving is only for update
  moving(): void {
    if (!game.isPause) {
      this.burnMe();
    }
  }
}
