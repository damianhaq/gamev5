import { gameOver } from "../../functions/gameOver.js";
import { calculateDirection, findNearestEnemy } from "../../functions/helpers.js";
import { dimensions, game, instances, keys, spriteSheetData, stats, } from "../../variables.js";
import { Character } from "../Character.js";
import { Projectile } from "../Projectile.js";
export class PlayerCh extends Character {
    constructor(x, y, radius, hp, id, 
    // attackSpeed: number,
    spriteSheetData) {
        super(hp, id /*, attackSpeed */);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.spriteSheetData = spriteSheetData;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.spriteSheetData = spriteSheetData;
        this.animData.addY = 10;
        this.countId = 0;
        this.hpRegenCounter = 0;
    }
    toUpdate(deltaTime) {
        this.moving();
        this.attack();
        this.hpRegen(deltaTime);
        this.die();
    }
    die() {
        if (this.hp < 1) {
            gameOver();
        }
    }
    hpRegen(deltaTime) {
        if (this.hpRegenCounter < 0) {
            if (this.hp < stats.player.maxHP) {
                if (this.hp + stats.player.hpRegen <= stats.player.maxHP) {
                    this.hp += stats.player.hpRegen;
                }
                else {
                    this.hp = stats.player.maxHP;
                }
            }
            this.hpRegenCounter = 1000;
        }
        else {
            this.hpRegenCounter -= deltaTime;
        }
    }
    attack() {
        if (instances.enemiesCh.length > 0 && !game.isPause) {
            if (this.attackSpeedCounter < 0) {
                const nearestEnemy = findNearestEnemy(this);
                const direction = calculateDirection(this.x, this.y, nearestEnemy.x, nearestEnemy.y);
                this.countId++;
                instances.projectiles.push(new Projectile(this.x, this.y, stats.skills.baseAttack.radius, stats.skills.baseAttack.movementSpeed, direction, stats.player.baseDamage, `${this.countId}projectile`, ["enemyCh"], stats.skills.baseAttack.penetrationNumber, spriteSheetData.weapons.arrow)
                // new Bullet(
                //   this.x,
                //   this.y,
                //   stats.skills.baseAttack.radius,
                //   stats.skills.baseAttack.movementSpeed,
                //   direction,
                //   stats.player.baseDamage,
                //   `${this.countId}bullet`,
                //   ["enemyCh"],
                //   stats.skills.baseAttack.penetrationNumber
                // )
                );
                this.attackSpeedCounter = stats.skills.baseAttack.speed;
            }
        }
    }
    moving() {
        if (!game.isPause) {
            const diagonalSpeed = stats.player.movementSpeed / Math.sqrt(2); // prędkość na ukos
            if (keys.a || keys.d || keys.w || keys.s) {
                if (this.animData.animState !== "run")
                    this.animData.animState = "run";
            }
            else {
                if (this.animData.animState !== "idle")
                    this.animData.animState = "idle";
            }
            if (keys.d) {
                if (this.animData.xFlip === true)
                    this.animData.xFlip = false;
            }
            else if (keys.a) {
                if (this.animData.xFlip === false)
                    this.animData.xFlip = true;
            }
            if (keys.a &&
                keys.w &&
                !this.isCollideBorderMap("left") &&
                !this.isCollideBorderMap("up")) {
                this.x -= diagonalSpeed;
                this.y -= diagonalSpeed;
            }
            else if (keys.a &&
                keys.s &&
                !this.isCollideBorderMap("left") &&
                !this.isCollideBorderMap("bot")) {
                this.x -= diagonalSpeed;
                this.y += diagonalSpeed;
            }
            else if (keys.d &&
                keys.w &&
                !this.isCollideBorderMap("right") &&
                !this.isCollideBorderMap("up")) {
                this.x += diagonalSpeed;
                this.y -= diagonalSpeed;
            }
            else if (keys.d &&
                keys.s &&
                !this.isCollideBorderMap("right") &&
                !this.isCollideBorderMap("bot")) {
                this.x += diagonalSpeed;
                this.y += diagonalSpeed;
            }
            else if (keys.a && !this.isCollideBorderMap("left")) {
                this.x -= stats.player.movementSpeed;
            }
            else if (keys.d && !this.isCollideBorderMap("right")) {
                this.x += stats.player.movementSpeed;
            }
            else if (keys.w && !this.isCollideBorderMap("up")) {
                this.y -= stats.player.movementSpeed;
            }
            else if (keys.s && !this.isCollideBorderMap("bot")) {
                this.y += stats.player.movementSpeed;
            }
        }
    }
    isCollideBorderMap(side) {
        switch (side) {
            case "left":
                if (this.x - this.radius <= 0)
                    return true;
                break;
            case "right":
                if (this.x + this.radius >= dimensions.map.w)
                    return true;
                break;
            case "up":
                if (this.y - this.radius <= 0)
                    return true;
                break;
            case "bot":
                if (this.y + this.radius >= dimensions.map.h)
                    return true;
                break;
        }
    }
}
