import {
  add,
  lvl,
  up,
  hr,
  bd,
  as,
  pn,
  cbd,
  cbs,
  cbr,
  cbns,
  cbl,
  fbl,
  fbd,
  fbms,
  fbas,
  fbpn,
  mysticalSpheresDiv,
  fireBallDiv,
  mfas,
  mfd,
  mfl,
  mfr,
  magicFieldDiv,
  ek,
  ms,
  mh,
  a,
  mxgp,
  pr,
} from "../../app.js";
import { stats } from "../../variables.js";

export function interfaceDivUpdate() {
  add.update(stats.game.AllDamageDone);
  ek.update(stats.game.enemiesKilled);
  lvl.update(stats.player.lvl);
  up.update(stats.player.upgradePoints);
  hr.update(stats.player.hpRegen);
  mh.update(stats.player.maxHP);
  bd.update(stats.player.baseDamage);
  as.update(stats.skills.baseAttack.speed);
  pn.update(stats.skills.baseAttack.penetrationNumber);
  ms.update(stats.player.movementSpeed);
  a.update(stats.player.armor);
  mxgp.update(stats.player.maxXpGrowPrecentage);
  pr.update(stats.player.pickupRange);

  cbd.update(stats.skills.circlingBalls.damage);
  cbs.update(stats.skills.circlingBalls.speed);
  cbr.update(stats.skills.circlingBalls.radius);
  cbns.update(stats.skills.circlingBalls.numberBalls);
  cbl.update(stats.skills.circlingBalls.lvl);

  if (stats.skills.circlingBalls.lvl === 0) {
    mysticalSpheresDiv.newElement.style.display = "none";
  } else if (stats.skills.circlingBalls.lvl > 0) {
    mysticalSpheresDiv.newElement.style.display = "block";
  }

  fbl.update(stats.skills.goldenSword.lvl);
  fbd.update(stats.skills.goldenSword.damage);
  fbms.update(stats.skills.goldenSword.movementSpeed);
  fbas.update(stats.skills.goldenSword.attackSpeed);
  fbpn.update(stats.skills.goldenSword.penetrationNumber);

  if (stats.skills.goldenSword.lvl === 0) {
    fireBallDiv.newElement.style.display = "none";
  } else if (stats.skills.goldenSword.lvl > 0) {
    fireBallDiv.newElement.style.display = "block";
  }

  if (stats.skills.magicField.lvl === 0) {
    magicFieldDiv.newElement.style.display = "none";
  } else if (stats.skills.magicField.lvl > 0) {
    magicFieldDiv.newElement.style.display = "block";
  }
  mfl.update(stats.skills.magicField.lvl);
  mfd.update(stats.skills.magicField.damage);
  mfas.update(stats.skills.magicField.attackSpeed);
  mfr.update(stats.skills.magicField.radius);
}
