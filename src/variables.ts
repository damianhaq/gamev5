import { Keys, WidthHeight, xywh } from "./interfaces/interfaces.js";

export const keys: Keys = {
  w: false,
  s: false,
  a: false,
  d: false,
  space: false,
  mouse: {
    click: false,
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
  isGameOver: false,
};

export const stats = {
  player: {
    maxHP: 100,
    currentHP: 100,
    lvl: 1,
    maxXP: 100,
    currentXP: 0,
    maxXpGrowPrecentage: 20, // how much precent grow next lvl maxXp
  },
};
