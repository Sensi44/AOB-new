import { Unit } from "../classes/Unit.js";
import { unitsArr } from "../main.js";

export function addUnit(name, units, MyGame, unitType) {
  if (units.length === 0) {
    units.push(new Unit(name, MyGame.exUnitId++, MyGame, unitType))
    MyGame.curExUnit = units[0];
  } else {
    units[units.length] = new Unit(name, MyGame.exUnitId++, MyGame, unitType);
  }

  MyGame.left += 160;
  MyGame.top += 32;
}