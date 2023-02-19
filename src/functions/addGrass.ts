import { Grass } from "../classes/Grass.js";

export function addGrass(w: number, h: number, grassNumber: number) {
  const array: Grass[] = [];
  for (let i = 0; i < grassNumber; i++) {
    array.push(new Grass(Math.random() * w, Math.random() * h, 10));
  }
  return array;
}
