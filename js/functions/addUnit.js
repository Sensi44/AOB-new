import { Unit } from "../classes/unit.js";

export function addUnit(squadName, MyGame, name) {
  let leng = 0;
  for (let unit of squadName.units) {
    if (unit !== undefined) leng++;
  }

  console.log(leng, squadName.size)
  if (leng === squadName.size) {
  console.log('1')
  let count = 0;
  for (let unit of squadName.units) {
    ++count;
    if (unit === null) {
      squadName.units[count - 1] = new Unit(`${name}`, 1, 100, MyGame.countUnitId++);
      squadName.units[count - 1].pos = (count - 1) % squadName.sizeX ;
      let row = Math.floor(count / squadName.sizeX) - 1;
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




