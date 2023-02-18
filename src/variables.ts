import { Keys, WidthHeight } from "./interfaces/interfaces.js";

export const keys: Keys = {
  w: false,
  s: false,
  a: false,
  d: false,
  space: false,
};

export const dimensions: { canvas: WidthHeight; map: WidthHeight } = {
  canvas: {
    w: 800,
    h: 600,
  },
  map: {
    w: 3200,
    h: 2400,
  },
};
