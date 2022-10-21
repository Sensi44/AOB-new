export function rotateSquad(MyGame, squad) {
  let sizeX = MyGame.curSquadInfo.sizeX;
  let sizeY = MyGame.curSquadInfo.sizeY;
  let current = Object.assign({}, squad);
  current.sizeX = sizeY;
  current.sizeY = sizeX;
  current.width = current.sizeX * 32;
  current.height = current.sizeY * 32;

  current.units = [].concat(MyGame.curSquadInfo.units)
  current.units.length = sizeX * sizeY;
  console.log(MyGame.curSquadInfo.units)
  let newArrUnits = [];
  console.log(current.sizeY, current.sizeX)
  for (let i = 0; i < current.sizeY; i++) {    // siseY = 2
    for (let j = 0; j < current.sizeX; j++) {  // siseY = 3
      newArrUnits.push()
    }
  }
  // current.units = units;
  // console.log(current)

  MyGame.curSquadInfo = current;
  return current;
}