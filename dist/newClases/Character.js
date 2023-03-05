import { c, spriteSheet } from "../app.js";
import { AppearingText } from "../classes/AppearingText.js";
import { drawText } from "../functions/draw/drawText.js";
import { calculateDirection, calculatePercentage, randomNumber, } from "../functions/helpers.js";
import { dimensions, game, instances, spriteSheetData, stats } from "../variables.js";
export class Character {
    // -----------------------------------------------
    constructor(hp, id, attackSpeed = 0) {
        this.hp = hp;
        this.id = id;
        this.attackSpeed = attackSpeed;
        this.x;
        this.y;
        this.radius;
        this.id = id;
        this.attackSpeed = attackSpeed;
        this.attackSpeedCounter = attackSpeed;
        this.hp = hp;
        this.maxHp = hp;
        this.spriteSheetData = {
            idle: {
                x: 0,
                y: 0,
                w: 0,
                h: 0,
                frames: 0,
            },
            run: {
                x: 0,
                y: 0,
                w: 0,
                h: 0,
                frames: 0,
            },
            duration: 0,
        };
        this.animData = {
            animState: "idle",
            frameInterval: 0,
            currentFrame: 1,
            xFlip: false,
            addX: 0,
            addY: 0,
        };
        this.showHitBox = false;
        this.knockback = { direction: { x: 0, y: 0 }, duration: 0, moveSpeed: 0 };
        this.immuneProjectilesId = [];
        this.showHpBar = true;
        this.hpBarSprite = spriteSheetData.hpBarEmpty;
        this.hpBarSpriteFull = spriteSheetData.hpBarFull;
        this.blink = 0;
    }
    update(deltaTime, index = null) {
        this.draw(deltaTime);
        this.toUpdate(deltaTime, index);
        this.makeKnockback(deltaTime);
        this.attackDelay(deltaTime);
        this.drawHpBar();
    }
    drawHpBar() {
        if (this.hp < this.maxHp) {
            c.drawImage(spriteSheet, this.hpBarSprite.x, this.hpBarSprite.y, this.hpBarSprite.w, this.hpBarSprite.h, this.x + dimensions.map.x - this.hpBarSprite.w, this.y + dimensions.map.y - this.hpBarSprite.h + this.radius + 12, this.hpBarSprite.w * 2, this.hpBarSprite.h * 2);
            const currentWidth = calculatePercentage(this.hp, this.maxHp, this.hpBarSpriteFull.w);
            c.drawImage(spriteSheet, this.hpBarSpriteFull.x, this.hpBarSpriteFull.y, currentWidth, this.hpBarSpriteFull.h, this.x + dimensions.map.x - this.hpBarSpriteFull.w, this.y + dimensions.map.y - this.hpBarSpriteFull.h + this.radius + 12, currentWidth * 2, this.hpBarSpriteFull.h * 2);
        }
    }
    attackDelay(deltaTime) {
        this.attackSpeedCounter -= deltaTime;
    }
    toUpdate(deltaTime, index) { }
    draw(deltaTime) {
        this.animData.frameInterval += deltaTime;
        if (this.blink > 0)
            this.blink -= deltaTime;
        if (!game.isPause && this.animData.frameInterval > this.spriteSheetData.duration) {
            this.animData.currentFrame++;
            if (this.animData.currentFrame >= this.spriteSheetData[this.animData.animState].frames) {
                this.animData.currentFrame = 0;
            }
            this.animData.frameInterval = 0;
        }
        c.save();
        if (this.blink > 0)
            c.filter = "brightness(2)";
        let fixedPosX = this.x +
            dimensions.map.x -
            this.spriteSheetData[this.animData.animState].w -
            this.animData.addX;
        if (this.animData.xFlip) {
            c.scale(-1, 1); // Odbija rysunek wzdłuż osi Y
            fixedPosX = -(this.x +
                dimensions.map.x +
                this.spriteSheetData[this.animData.animState].w +
                this.animData.addX);
        }
        c.drawImage(spriteSheet, this.spriteSheetData[this.animData.animState].x +
            this.animData.currentFrame * this.spriteSheetData[this.animData.animState].w, this.spriteSheetData[this.animData.animState].y, this.spriteSheetData[this.animData.animState].w, this.spriteSheetData[this.animData.animState].h, fixedPosX, // Przesunięcie wzdłuż osi X
        this.y +
            dimensions.map.y -
            this.spriteSheetData[this.animData.animState].h -
            this.animData.addY, this.spriteSheetData[this.animData.animState].w * 2, this.spriteSheetData[this.animData.animState].h * 2);
        c.restore();
        // HP
        drawText(this.x, this.y - 20, this.hp.toString(), 10, game.font.main, game.colors.grey);
        if (this.showHitBox) {
            c.beginPath();
            c.arc(this.x + dimensions.map.x, this.y + dimensions.map.y, this.radius, 0, Math.PI * 2);
            c.stroke();
        }
    }
    // in update
    makeKnockback(deltaTime) {
        if (this.knockback.duration > 0 && !game.isPause) {
            //  knockback
            this.x -= this.knockback.direction.x * this.knockback.moveSpeed;
            this.y -= this.knockback.direction.y * this.knockback.moveSpeed;
            this.knockback.duration -= deltaTime;
            if (this.knockback.duration < 0)
                this.knockback.duration = 0;
        }
        else {
            this.knockback.moveSpeed = 0;
        }
    }
    setKnockback(fromX, fromY, duration, speed) {
        this.knockback.direction = calculateDirection(this.x, this.y, fromX, fromY);
        this.knockback.duration += duration;
        this.knockback.moveSpeed = speed;
    }
    getDamage(value, color, id = null) {
        const dmgAfterArmor = value - stats.player.armor < 1 ? 1 : value - stats.player.armor;
        if (id /* not null */ && !this.immuneProjectilesId.includes(id)) {
            this.immuneProjectilesId.push(id);
            if (this.id === "playerCh") {
                this.hp -= dmgAfterArmor;
            }
            else {
                this.hp -= value;
            }
        }
        else if (id === null) {
            if (this.id === "playerCh") {
                this.hp -= dmgAfterArmor;
            }
            else {
                this.hp -= value;
            }
            // this.blink();
        }
        instances.appearingText.push(new AppearingText(this.x + randomNumber(-this.radius, this.radius), this.y, 500, this.id === "playerCh" ? dmgAfterArmor.toString() : value.toString(), 16, color));
        this.blink = 100;
    }
    heal(value) {
        this.hp += value;
        instances.appearingText.push(new AppearingText(this.x + randomNumber(-this.radius, this.radius), this.y, 500, value.toString(), 16, game.colors.greenHeal));
    }
}
