import { keys } from "../variables.js";
export function controlls() {
    document.body.addEventListener("keydown", (ev) => {
        if (ev.code === "KeyW")
            keys.w = true;
        if (ev.code === "KeyS")
            keys.s = true;
        if (ev.code === "KeyA")
            keys.a = true;
        if (ev.code === "KeyD")
            keys.d = true;
        if (ev.code === "Space")
            keys.space = true;
        // console.log(keys);
    });
    document.body.addEventListener("keyup", (ev) => {
        if (ev.code === "KeyW")
            keys.w = false;
        if (ev.code === "KeyS")
            keys.s = false;
        if (ev.code === "KeyA")
            keys.a = false;
        if (ev.code === "KeyD")
            keys.d = false;
        if (ev.code === "Space")
            keys.space = false;
        // console.log(keys);
    });
}
