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

export const dimensions: { canvas: WidthHeight; map: xywh } = {
  canvas: {
    w: 800,
    h: 600,
  },
  map: {
    x: 0,
    y: 0,
    w: 3200,
    h: 2400,
  },
};

export const game = {
  isGameOver: false,
};
