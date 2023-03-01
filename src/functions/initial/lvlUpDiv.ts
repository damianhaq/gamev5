// import { addHtmlElement } from "../helpers.js";
import { gui, lvlupDiv } from "../../app.js";
import { NewGui } from "../../classes/NewGui.js";
import { stats } from "../../variables.js";
import { returnToGameAfterLvlup } from "../returnToGameAfterLvlup.js";
import { circlingBallLvlUp } from "../skills/circlingBall.js";
import {
  armorLvlUp,
  attackSpeedLvlUp,
  dmgLvlUp,
  growMaxXpLvlUp,
  hpRegenLvlUp,
  maxHpLvlUp,
  moveSpeedLvlUp,
  penNumLvlUp,
} from "../skills/lvlups.js";
import { magicFieldLvlUp } from "../skills/magicField.js";
import { projectileLvlUp } from "../skills/projectile.js";

export function lvlUpDiv() {
  new NewGui("h2", "Level up!", "", lvlupDiv);

  const upgradeSkillsContainer = new NewGui("div", "", "", lvlupDiv);
  new NewGui("h3", "Umiejętności", "", upgradeSkillsContainer.newElement);

  const skillsWrapper = new NewGui("div", "", "", upgradeSkillsContainer.newElement);
  skillsWrapper.newElement.style.display = "flex";

  const upgrade1div = new NewGui("div", "", "", skillsWrapper.newElement);
  upgrade1div.newElement.style.border = "1px solid black";
  new NewGui("h4", stats.skills.fireBall.name, "", upgrade1div.newElement);
  new NewGui("p", "damage +3", "", upgrade1div.newElement);
  const fireBallButton = new NewGui("button", "upgrade", "", upgrade1div.newElement);
  fireBallButton.newElement.addEventListener("click", (ev) => {
    projectileLvlUp();
    stage2();
    // returnToGameAfterLvlup();
  });

  const upgrade2div = new NewGui("div", "", "", skillsWrapper.newElement);
  upgrade2div.newElement.style.border = "1px solid black";
  new NewGui("h4", stats.skills.circlingBalls.name, "", upgrade2div.newElement);
  new NewGui("p", "ball +1", "", upgrade2div.newElement);

  const mysticalButton = new NewGui("button", "upgrade", "", upgrade2div.newElement);
  mysticalButton.newElement.addEventListener("click", (ev) => {
    circlingBallLvlUp();
    stage2();
    // returnToGameAfterLvlup();
  });

  const upgrade3div = new NewGui("div", "", "", skillsWrapper.newElement);
  upgrade3div.newElement.style.border = "1px solid black";
  new NewGui("h4", stats.skills.magicField.name, "", upgrade3div.newElement);
  new NewGui("p", "damage +1", "", upgrade3div.newElement);
  new NewGui("p", "range +10", "", upgrade3div.newElement);

  const magicfieldButton = new NewGui("button", "upgrade", "", upgrade3div.newElement);
  magicfieldButton.newElement.addEventListener("click", (ev) => {
    magicFieldLvlUp();
    stage2();
    // returnToGameAfterLvlup();
  });

  // Stats upgrade

  const upgradeStatsContainer = new NewGui("div", "", "", lvlupDiv);
  upgradeStatsContainer.newElement.style.display = "none";
  new NewGui("h3", "Staty", "", upgradeStatsContainer.newElement);

  const statsWrapper = new NewGui("div", "", "", upgradeStatsContainer.newElement);
  // statsWrapper.newElement.style.display = "flex";

  // ---------------------
  const statsUpgrade1div = new NewGui("div", "", "", statsWrapper.newElement);
  statsUpgrade1div.newElement.style.display = "flex";
  statsUpgrade1div.newElement.style.border = "1px solid black";
  new NewGui("p", "szybkość ataku +100ms", "", statsUpgrade1div.newElement);

  const attackSpeedButton = new NewGui(
    "button",
    "ulepsz",
    "",
    statsUpgrade1div.newElement
  );
  attackSpeedButton.newElement.addEventListener("click", (ev) => {
    attackSpeedLvlUp();

    returnToGameAfterLvlup();
    upgradeSkillsContainer.newElement.style.display = "block";
    upgradeStatsContainer.newElement.style.display = "none";
  });

  // ----------------------
  const statsUpgrade2div = new NewGui("div", "", "", statsWrapper.newElement);
  statsUpgrade2div.newElement.style.display = "flex";
  statsUpgrade2div.newElement.style.border = "1px solid black";
  new NewGui("p", "szybkość poruszania +0.3", "", statsUpgrade2div.newElement);

  const moveSpeedButton = new NewGui("button", "ulepsz", "", statsUpgrade2div.newElement);
  moveSpeedButton.newElement.addEventListener("click", (ev) => {
    moveSpeedLvlUp();

    returnToGameAfterLvlup();
    upgradeSkillsContainer.newElement.style.display = "block";
    upgradeStatsContainer.newElement.style.display = "none";
  });

  // ----------------------
  const statsUpgrade3div = new NewGui("div", "", "", statsWrapper.newElement);
  statsUpgrade3div.newElement.style.display = "flex";
  statsUpgrade3div.newElement.style.border = "1px solid black";
  new NewGui("p", "przebicie przeciwnika +1", "", statsUpgrade3div.newElement);

  const penNumButton = new NewGui("button", "ulepsz", "", statsUpgrade3div.newElement);
  penNumButton.newElement.addEventListener("click", (ev) => {
    penNumLvlUp();

    returnToGameAfterLvlup();
    upgradeSkillsContainer.newElement.style.display = "block";
    upgradeStatsContainer.newElement.style.display = "none";
  });

  // ----------------------
  const statsUpgrade4div = new NewGui("div", "", "", statsWrapper.newElement);
  statsUpgrade4div.newElement.style.display = "flex";
  statsUpgrade4div.newElement.style.border = "1px solid black";
  new NewGui("p", "max hp +10", "", statsUpgrade4div.newElement);

  const maxHpButton = new NewGui("button", "ulepsz", "", statsUpgrade4div.newElement);
  maxHpButton.newElement.addEventListener("click", (ev) => {
    maxHpLvlUp();

    returnToGameAfterLvlup();
    upgradeSkillsContainer.newElement.style.display = "block";
    upgradeStatsContainer.newElement.style.display = "none";
  });

  // ----------------------
  const statsUpgrade5div = new NewGui("div", "", "", statsWrapper.newElement);
  statsUpgrade5div.newElement.style.display = "flex";
  statsUpgrade5div.newElement.style.border = "1px solid black";
  new NewGui("p", "hp regen +1", "", statsUpgrade5div.newElement);

  const hpRegenButton = new NewGui("button", "ulepsz", "", statsUpgrade5div.newElement);
  hpRegenButton.newElement.addEventListener("click", (ev) => {
    hpRegenLvlUp();

    returnToGameAfterLvlup();
    upgradeSkillsContainer.newElement.style.display = "block";
    upgradeStatsContainer.newElement.style.display = "none";
  });

  // ----------------------
  const statsUpgrade6div = new NewGui("div", "", "", statsWrapper.newElement);
  statsUpgrade6div.newElement.style.display = "flex";
  statsUpgrade6div.newElement.style.border = "1px solid black";
  new NewGui("p", "armor +1", "", statsUpgrade6div.newElement);

  const armorButton = new NewGui("button", "ulepsz", "", statsUpgrade6div.newElement);
  armorButton.newElement.addEventListener("click", (ev) => {
    armorLvlUp();

    returnToGameAfterLvlup();
    upgradeSkillsContainer.newElement.style.display = "block";
    upgradeStatsContainer.newElement.style.display = "none";
  });

  // ----------------------
  const statsUpgrade7div = new NewGui("div", "", "", statsWrapper.newElement);
  statsUpgrade7div.newElement.style.display = "flex";
  statsUpgrade7div.newElement.style.border = "1px solid black";
  new NewGui("p", "przyrost xp -2%", "", statsUpgrade7div.newElement);

  const xpButton = new NewGui("button", "ulepsz", "", statsUpgrade7div.newElement);
  xpButton.newElement.addEventListener("click", (ev) => {
    growMaxXpLvlUp();

    returnToGameAfterLvlup();
    upgradeSkillsContainer.newElement.style.display = "block";
    upgradeStatsContainer.newElement.style.display = "none";
  });

  // ----------------------
  const statsUpgrade8div = new NewGui("div", "", "", statsWrapper.newElement);
  statsUpgrade8div.newElement.style.display = "flex";
  statsUpgrade8div.newElement.style.border = "1px solid black";
  new NewGui("p", "bazowe obrażenia + 1", "", statsUpgrade8div.newElement);

  const dmgButton = new NewGui("button", "ulepsz", "", statsUpgrade8div.newElement);
  dmgButton.newElement.addEventListener("click", (ev) => {
    dmgLvlUp();

    returnToGameAfterLvlup();
    upgradeSkillsContainer.newElement.style.display = "block";
    upgradeStatsContainer.newElement.style.display = "none";
  });

  // ----------------------

  function stage2() {
    upgradeSkillsContainer.newElement.style.display = "none";
    upgradeStatsContainer.newElement.style.display = "block";

    if (stats.skills.baseAttack.speed > 101) {
      (attackSpeedButton.newElement as HTMLButtonElement).disabled = false;
    } else {
      (attackSpeedButton.newElement as HTMLButtonElement).disabled = true;
    }

    if (stats.player.maxXpGrowPrecentage > 10) {
      (xpButton.newElement as HTMLButtonElement).disabled = false;
    } else {
      (xpButton.newElement as HTMLButtonElement).disabled = true;
    }
  }
}
