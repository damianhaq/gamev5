import { Grass } from "../classes/Grass.js";
export function addGrass(x, y, w, h, grassNumber) {
    const array = [];
    for (let i = 0; i < grassNumber; i++) {
        array.push(new Grass(Math.random() * w, Math.random() * h, "#669900"));
    }
    return array;
}
