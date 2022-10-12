export function rotateSquad(MyGame, squad) {
  let sizeX = MyGame.curSquadInfo.sizeX;
  let sizeY = MyGame.curSquadInfo.sizeY;
  let current = Object.assign({}, squad);
  current.sizeX = sizeY;
  current.sizeY = sizeX;
  current.width = current.sizeX  * 32;
  current.height = current.sizeY  * 32;

  let units = [].concat(MyGame.curSquadInfo.units)
  units.length = sizeX * sizeY;
  console.log(MyGame.curSquadInfo.units, units)
  let newArrUnits = [];
  for (let i = 0; i < current.sizeY; i++) {
    for (let j = 0; j < current.sizeX; j++) {
      // let elem = tempUnits[j];
      // console.log(tempUnits);
      // console.log(elem);
      // newArrUnits.push(elem);
    }


  }
  // current.units = newArrUnits;
  // console.log(current)

  MyGame.curSquadInfo = current;
  return current;
}