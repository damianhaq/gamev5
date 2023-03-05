import { ExpBall } from "../../classes/expBall.js";
import { Heart } from "../../classes/Heart.js";
import { calculateDirection, calculateDistance, collideCircleResolve, randomNumber, } from "../../functions/helpers.js";
import { game, instances, spriteSheetData, stats } from "../../variables.js";
import { Character } from "../Character.js";
export class EnemyCh extends Character {
    constructor(x, y, radius, attackRange, attackSpeed, movementSpeed, damage, hp, spriteSheetData, id, expDropValue) {
        super(hp, id, attackSpeed);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.attackRange = attackRange;
        this.attackSpeed = attackSpeed;
        this.movementSpeed = movementSpeed;
        this.damage = damage;
        this.spriteSheetData = spriteSheetData;
        this.expDropValue = expDropValue;
        this.radius = radius;
        this.attackRange = attackRange;
        this.movementSpeed = movementSpeed;
        this.damage = damage;
        this.expDropValue = expDropValue;
        this.spriteSheetData = spriteSheetData;
    }
    toUpdate(deltaTime, index) {
        this.moveTowardsPlayer(deltaTime);
        this.die(index);
        this.collideEnemies();
    }
    collideEnemies() {
        instances.enemiesCh.forEach((enemy) => {
            const distance = calculateDistance(this.x, this.y, this.radius, enemy.x, enemy.y, enemy.radius);
            if (distance <= 0) {
                const { x, y } = collideCircleResolve(this, enemy);
                this.x = x;
                this.y = y;
            }
        });
    }
    moveTowardsPlayer(deltaTime) {
        if (!game.isPause) {
            const direction = calculateDirection(this.x, this.y, instances.player.x, instances.player.y);
            if (direction.x > 0) {
                if (this.animData.xFlip === true)
                    this.animData.xFlip = false;
            }
            else if (direction.x < 0) {
                if (this.animData.xFlip === false)
                    this.animData.xFlip = true;
            }
            // const distance = calculateDistance(
            //   this.x,
            //   this.y,
            //   this.radius,
            //   instances.player.x,
            //   instances.player.y,
            //   instances.player.radius
            // );
            // if (this.type === "range") {
            const distanceAttack = calculateDistance(this.x, this.y, this.radius + this.attackRange, instances.player.x, instances.player.y, instances.player.radius);
            // } else if (this.type === "mele") {
            // distanceAttack = calculateDistance(
            //   this.x,
            //   this.y,
            //   this.radius,
            //   player.x,
            //   player.y,
            //   player.radius
            // );
            // }
            if (distanceAttack > 0) {
                // if not knockback
                if (this.knockback.duration === 0) {
                    // idź
                    this.x += direction.x * this.movementSpeed;
                    this.y += direction.y * this.movementSpeed;
                }
                if (this.animData.animState !== "run")
                    this.animData.animState = "run";
            }
            else {
                //  atak
                if (this.attackRange === 0) {
                    if (this.attackSpeedCounter <= 0) {
                        console.log("enemy player.getDamage");
                        // instances.player.getDamage(this.damage, this);
                        instances.player.getDamage(this.damage, game.colors.blue);
                        this.attackSpeedCounter = this.attackSpeed;
                    }
                }
                else if (this.attackRange > 0) {
                    // this.rangeAttack();
                }
                if (this.animData.animState !== "idle")
                    this.animData.animState = "idle";
            }
            // if (distance <= 0) {
            //   //  resolve
            //   const { x, y } = collideCircleResolve(this, instances.player);
            //   this.x = x;
            //   this.y = y;
            // }
        }
    }
    die(index) {
        if (this.hp <= 0) {
            const rannum = randomNumber(0, 100);
            console.log("rannum ", rannum);
            if (rannum <= stats.game.heartDropChance) {
                instances.hearts.push(new Heart(this.x, this.y, spriteSheetData.heart));
            }
            instances.expBalls.push(new ExpBall(this.x, this.y, 3, this.expDropValue));
            instances.enemiesCh.splice(index, 1);
            stats.game.enemiesKilled += 1;
        }
    }
}
