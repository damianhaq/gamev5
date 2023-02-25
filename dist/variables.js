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
        w: 1200,
        h: 800,
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
    },
};
export const stats = {
    skills: {
        baseAttack: {
            id: "baseAttack",
            speed: 2,
            radius: 5,
            penetrationNumber: 2,
        },
        circlingBalls: {
            id: "circlingBalls",
            lvl: 0,
            damage: 8,
            speed: 1,
            numberBalls: 1,
            radius: 80,
            radiusElement: 10,
        },
        upgrade: {
            skillList: ["circlingBalls", "baseAttack"],
            skillsRandomPicked: [],
            executeOnceFlag: true,
            pickSkillId: "",
            amount: 3,
        },
    },
    player: {
        maxHP: 100,
        currentHP: 100,
        hpRegen: 1,
        armor: 1,
        lvl: 1,
        maxXP: 100,
        currentXP: 0,
        maxXpGrowPrecentage: 50,
        upgradePoints: 1,
        baseDamage: 10,
    },
    game: {
        AllDamageDone: 0,
    },
};
export const instances = {
    grassArray: [],
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
