import { exUnit } from "../classes/exUnit.js";
import { unitsArr } from "../main.js";

export function addExUnit(name, id, MyGame) {
  unitsArr.push(new exUnit(name, MyGame.exUnitId, MyGame))
}