import { drawUnits } from "../renders/drawUnits.js";
import { drawSquads } from "../renders/drawSquads.js";
import { drawMini } from "../renders/drawMini.js";
import { drawSquadInfo } from "../renders/drawSquadInfo.js";
import { drawMountains } from "../renders/drawMountains.js";
import { drawExUnits } from "../renders/drawExUnits.js";
import { goplitSource, eliteGoplitSource, eliteGoplit2Source } from "../../img/goplit.js";
import { mountains } from "../../img/decoration.js";

const goplit = new Image();
const eliteGoplit = new Image();
const eliteGoplit2 = new Image();
const mount = new Image();

function init() {
  goplit.src = goplitSource;
  eliteGoplit.src = eliteGoplitSource;
  eliteGoplit2.src = eliteGoplit2Source;
  mount.src = mountains;
}
init();

export function render(q, m, MyGame, squads, width, height, width2, height2, units) {
  // console.log(units)
  // Очистка экрана
  q.clearRect(0, 0, width, height);
  m.clearRect(0, 0, width2, height2);

  drawExUnits(q, MyGame, units);

  // (MyGame.canStart) ? drawUnits(q, MyGame, squads, goplit, eliteGoplit, eliteGoplit2) : null;
  // (MyGame.canStart) ? drawSquads(q, MyGame, squads) : null;
  // (MyGame.showSquadInfo) ? drawSquadInfo(q, MyGame, squads) : null;
  // drawMini(m, squads, width2);
  // drawMountains(q, rocks, mount)
}

