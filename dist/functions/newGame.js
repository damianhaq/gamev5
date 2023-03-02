import { gameoverDiv } from "../app.js";
import { game, instances, stats } from "../variables.js";
export function newGame() {
    //Reset
    instances.enemies.length = 0;
    instances.bullets.length = 0;
    instances.expBalls.length = 0;
    instances.grassArray.length = 0;
    instances.player = null;
    instances.appearingText.length = 0;
    instances.hearts.length = 0;
    instances.skills.magicField = null;
    instances.skills.circling.length = 0;
    // circling ball reset
    stats.skills.circlingBalls.lvl = 0;
    stats.skills.circlingBalls.damage = 30;
    stats.skills.circlingBalls.speed = 1;
    stats.skills.circlingBalls.numberBalls = 1;
    stats.skills.circlingBalls.radius = 80;
    stats.skills.circlingBalls.radiusElement = 10;
    //fireball reset
    stats.skills.fireBall.lvl = 0;
    stats.skills.fireBall.damage = 35;
    stats.skills.fireBall.attackSpeed = 2100;
    stats.skills.fireBall.movementSpeed = 0.7;
    stats.skills.fireBall.penetrationNumber = 5;
    stats.skills.fireBall.radius = 15;
    stats.skills.fireBall.burn = {
        damage: 5,
        speed: 300,
        times: 5,
    };
    // magic field reset
    stats.skills.magicField = {
        name: "Magic Field",
        id: "magicField",
        lvl: 0,
        attackSpeed: 500,
        damage: 3,
        radius: 100,
    };
    stats.player = {
        movementSpeed: 2,
        maxHP: 100,
        currentHP: 100,
        hpRegen: 0,
        armor: 1,
        lvl: 1,
        maxXP: 100,
        currentXP: 0,
        maxXpGrowPrecentage: 30,
        upgradePoints: 0,
        baseDamage: 10,
        pickupRange: 100,
    };
    stats.skills.baseAttack = {
        id: "baseAttack",
        speed: 700,
        movementSpeed: 3,
        radius: 5,
        penetrationNumber: 1,
    };
    stats.game = {
        AllDamageDone: 0,
        enemiesKilled: 0,
        heartDropChance: 5,
        healHeartValue: 10,
    };
    game.gameState = "playing";
    game.isGameOver = false;
    gameoverDiv.style.display = "none";
}
