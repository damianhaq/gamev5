import { gameoverDiv } from "../app.js";
import { game, instances, stats } from "../variables.js";
export function newGame() {
    //Reset
    instances.characters.length = 0;
    instances.enemiesCh.length = 0;
    instances.enemies.length = 0;
    instances.projectiles.length = 0;
    // instances.bullets.length = 0;
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
    // golden sword
    stats.skills.goldenSword.lvl = 0;
    stats.skills.goldenSword.damage = 35;
    stats.skills.goldenSword.attackSpeed = 2100;
    stats.skills.goldenSword.attackSpeedCounter = 0;
    stats.skills.goldenSword.counterId = 0;
    stats.skills.goldenSword.movementSpeed = 0.7;
    stats.skills.goldenSword.penetrationNumber = 5;
    stats.skills.goldenSword.radius = 15;
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
