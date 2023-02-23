import { Keys, WidthHeight, xywh } from "./interfaces/interfaces.js";

export const keys: Keys = {
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
  player: {
    maxHP: 100,
    currentHP: 100,
    hpRegen: 0,
    armor: 1,
    lvl: 1,
    maxXP: 100,
    currentXP: 0,
    maxXpGrowPrecentage: 20, // how much precent grow next lvl maxXp
    upgradePoints: 0,
    baseDamage: 10,
  },
  game: {
    AllDamageDone: 0,
  },
};

export const instances = {
  grassArray: null,
  bullets: null,
  enemies: null,
  expBalls: null,
  player: null,
  appearingText: null,
  skills: {
    magicField: null,
  },
};
