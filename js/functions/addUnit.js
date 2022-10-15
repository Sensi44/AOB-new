import { Unit } from "../classes/unit.js";


export function addUnit(squadName, MyGame, unitType) {
  let leng = 0;
  for (let unit of squadName.units) {
    if (unit !== undefined) leng++;
  }

  if (leng === squadName.size) {
  let count = 0;
  for (let unit of squadName.units) {
    ++count;
    if (unit === null) {
      console.log('add unit')
      squadName.units[count - 1] = new Unit(unitType, MyGame.countUnitId++, MyGame.curSquadInfo.name);
      squadName.units[count - 1].pos = (count - 1) % squadName.sizeX ;
      let row = Math.ceil(count / squadName.sizeX) - 1;
      console.log(count, squadName.sizeX, row)
      if ( row < 0) row = 0;
      squadName.units[count - 1].row = row;
      console.log(squadName.units[count - 1].row)
    return
    };
  }
  return
}


  squadName.units.splice(
    leng, 1,
    new Unit(unitType, MyGame.countUnitId++, MyGame.curSquadInfo.name));

  for (let i = 0; i < 20; i++) {
    if (leng === squadName.sizeX * i) {
      squadName.row = i;
    }
  }

  let currentUnit = squadName.units[leng]
  currentUnit.pos  = leng % squadName.sizeX;
  squadName.units.length = squadName.size;
  squadName.count = squadName.units.length
  currentUnit.row  = squadName.row;
}




