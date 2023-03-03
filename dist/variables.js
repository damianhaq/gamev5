export const keys = {
    w: false,
    s: false,
    a: false,
    d: false,
    space: false,
    escape: false,
    mouse: {
        click: false,
        executeOnceFlag: true,
        x: 0,
        y: 0,
    },
};
export const dimensions = {
    canvas: {
        w: window.innerWidth,
        h: window.innerHeight,
        sw: "100vw",
        sh: "100vh",
    },
    map: {
        x: 0,
        y: 0,
        w: 3200,
        h: 2400,
    },
    gui: {},
};
export const game = {
    gameState: "mainMenu",
    initialPlayingFlag: true,
    pauseFlag: true,
    isPause: false,
    isGameOver: false,
    localStorageKey: "gamev5",
    font: {
        main: "Minecraftia",
        secondary: "Retro gaming",
    },
    colors: {
        blue: "#1a73e8",
        blue2: "#0098ff",
        greenHeal: "#24c927",
        red: "#bd173c",
        grey: "#202124",
    },
};
export const stats = {
    skills: {
        baseAttack: {
            id: "baseAttack",
            speed: 700,
            movementSpeed: 3,
            radius: 5,
            penetrationNumber: 1,
        },
        // remember to change also in lvlup reset
        circlingBalls: {
            // Mistyczne sfery po polsku
            name: "Kule",
            id: "circlingBalls",
            lvl: 0,
            damage: 8,
            speed: 1,
            numberBalls: 1,
            radius: 80,
            radiusElement: 10,
        },
        fireBall: {
            name: "Fire Ball",
            id: "fireBall",
            lvl: 0,
            damage: 35,
            attackSpeed: 2100,
            movementSpeed: 0.7,
            penetrationNumber: 5,
            radius: 15,
            burn: {
                damage: 5,
                speed: 300,
                times: 5,
            },
        },
        magicField: {
            name: "Pole",
            id: "magicField",
            lvl: 0,
            attackSpeed: 500,
            damage: 3,
            radius: 100,
        },
        upgrade: {
            skillList: ["circlingBalls", "baseAttack", "fireBall", "magicField"],
            skillsRandomPicked: [],
            executeOnceFlag: true,
            pickSkillId: "",
            amount: 3,
        },
    },
    player: {
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
    },
    game: {
        AllDamageDone: 0,
        enemiesKilled: 0,
        heartDropChance: 5,
        healHeartValue: 10,
    },
};
export const instances = {
    characters: [],
    grassArray: [],
    hearts: [],
    bullets: [],
    enemies: [],
    expBalls: [],
    player: null,
    appearingText: [],
    skills: {
        magicField: null,
        circling: [],
    },
};
export const spriteSheetData = {
    tinyZombie: {
        idle: {
            x: 368,
            y: 16,
            w: 16,
            h: 16,
            frames: 4,
        },
        run: {
            x: 432,
            y: 16,
            w: 16,
            h: 16,
            frames: 4,
        },
        duration: 100,
    },
};
