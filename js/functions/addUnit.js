import { Unit } from "../classes/unit.js";

export function addUnit(squadName, MyGame) {
  let leng = squadName.units.length;

  if (leng === squadName.size) return

  squadName.units.push(
    new Unit(`Goplit`, 1, 100, MyGame.countUnitId++));

  // Не думаю что будет больше 20 строк в высоту отряд, поэтому хватит
  for (let i = 0; i < 20; i++) {
    if (leng === squadName.sizeX * i) {
      squadName.row = i;
    }
  }


  let currentUnit = squadName.units[squadName.units.length - 1]
  currentUnit.pos  = leng % squadName.sizeX;
  currentUnit.row  = squadName.row;
}