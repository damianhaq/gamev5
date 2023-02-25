import { game, stats } from "../../variables.js";
import { randomNumber } from "../helpers.js";
export function upgradeGui(gui) {
    const d = {
        x: 400,
        y: 150,
        w: 730,
        h: 580,
        padding: 10,
        item: {
            h: 100,
            margin: 10,
        },
    };
    gui.frame(d.x, d.y, d.w, d.h, game.colors.blue, 2, false, "");
    for (let i = 0; i < stats.skills.upgrade.amount; i++) {
        item(d, gui, i, stats.skills.upgrade.skillsRandomPicked[i]);
    }
    if (stats.skills.upgrade.executeOnceFlag) {
        randomSkills();
        stats.skills.upgrade.executeOnceFlag = false;
    }
}
function item(d, gui, i, id) {
    // console.log(id);
    gui.clickFrame(d.x + d.padding, d.y + d.item.h * i + d.item.margin * i + d.padding, d.w - d.padding * 2, d.item.h, testf);
    gui.text(d.x + d.padding + 10, d.y + d.item.h * i + d.item.margin * i + d.padding + 30, id, 12, game.font.main, game.colors.blue, "left");
}
function randomSkills() {
    console.log("powinno sie wykonac raz random skills");
    const { skillList } = stats.skills.upgrade;
    for (let i = 0; i < stats.skills.upgrade.amount; i++) {
        stats.skills.upgrade.skillsRandomPicked.push(skillList[randomNumber(0, skillList.length - 1)]);
    }
    console.log(stats.skills.upgrade.skillsRandomPicked);
    // stats.skills.upgrade.pickSkillId = skillList[randomNumber(0, skillList.length - 1)];
}
function testf() {
    // console.log(id);
}
