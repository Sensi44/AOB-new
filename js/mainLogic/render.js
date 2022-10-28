import { drawUnits } from "../renders/drawUnits.js";
import { drawSquads } from "../renders/drawSquads.js";
import { drawMini } from "../renders/drawMini.js";
import { drawUnitInfo } from "../renders/drawUnitInfo.js";
import { drawExUnits } from "../renders/drawExUnits.js";
import { goplitSource } from "../../img/goplit.js";

const goplit = new Image();

// Инициализация картинок для канваса
function init() {
  goplit.src = goplitSource;
}
init();

export function render(q, m, MyGame, units, width, height, width2, height2) {
  q.clearRect(0, 0, width, height);
  m.clearRect(0, 0, width2, height2);

  drawExUnits(q, MyGame, units);
  // (MyGame.canStart) ? drawUnits(q, MyGame, squads, goplit, eliteGoplit, eliteGoplit2) : null;
  // (MyGame.canStart) ? drawSquads(q, MyGame, squads) : null;
  (MyGame.showUnitInfo) ? drawUnitInfo(q, MyGame) : null;
  // drawMini(m, squads, width2);
  // drawMountains(q, rocks, mount)
}

