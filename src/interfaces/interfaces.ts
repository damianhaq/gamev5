export interface Keys {
  w: boolean;
  s: boolean;
  a: boolean;
  d: boolean;
  space: boolean;
  escape: boolean;
  mouse: {
    click: boolean;
    executeOnceFlag: boolean;
    x: number;
    y: number;
  };
}

export interface WidthHeight {
  w: number;
  h: number;
}

export interface xywh {
  x: number;
  y: number;
  w: number;
  h: number;
}
