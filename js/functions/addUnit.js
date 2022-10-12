import { Unit } from "../classes/unit.js";

export function addUnit(squadName, MyGame, name) {
  let leng = 0;
  for (let unit of squadName.units) {
    if (unit !== undefined) leng++;
  }

  if (leng === squadName.size) return
  squadName.units.splice(
    leng, 1,
    new Unit(`${name}`, 1, 100, MyGame.countUnitId++));

  for (let i = 0; i < 20; i++) {
    if (leng === squadName.sizeX * i) {
      squadName.row = i;
    }
  }

  let currentUnit = squadName.units[leng]
  currentUnit.pos  = leng % squadName.sizeX;
  currentUnit.row  = squadName.row;
}