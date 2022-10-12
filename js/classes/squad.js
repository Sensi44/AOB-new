export class Squad {
  units = [];
  state = 1;
  row = 0;
  left = 0;
  top = 0;
  deads = 0;
  keyBind = '';
  previosTop = 0;
  previosLeft = 0;
  constructor(name, sizeX, sizeY, sqId, player) {
    this.name = name;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.size = sizeX * sizeY;
    this.player = player;
    this.squadId = sqId;
    this.width = 32 * sizeX;
    this.height = 32 * sizeY;
  }

  resize(x, y) { // максимально сыро, не обновляются положения юнитов
    this.sizeX = x;
    this.sizeY = y;
    this.width = 32 * this.sizeX;
    this.height = 32 * this.sizeY;
  };

  static rotate() {
    for (let squad in squads) {
      if (squads[squad] === MyGame.curSquadInfo) {
        let sizeX = MyGame.curSquadInfo.sizeX;
        let sizeY = MyGame.curSquadInfo.sizeY;
        let current = squads[squad];
        current.sizeX = sizeY;
        current.sizeY = sizeX;
        current.width = current.sizeX  * 32;
        current.height = current.sizeY  * 32;

        let tempUnits = MyGame.curSquadInfo.units;
        let newArrUnits = [];
        for (let i = 0; i < current.sizeY; i++) {
          for (let j = 0; j < current.sizeX; j++) {
            let elem = tempUnits[j];
            console.log(tempUnits);
            console.log(elem);
            // newArrUnits.push(elem);
          }


        }
        // current.units = newArrUnits;
        // console.log(current)


        squads[squad] = current;
      }
    }
  }

  static deleteSquad(MyGame, squads) {
    for (let squad in squads) {
      if (squads[squad] === MyGame.curSquadInfo) {
        squads[squad] = {state: 0};
        MyGame.curSquadInfo = squads.squad1;
      }
    }
  }

  moveTop()   {this.top  -= 16; this.previosTop = this.top + 16 } // correctPosition();
  moveDown()  {this.top  += 16; this.previosTop = this.top - 16 } // correctPosition();
  moveLeft()  {this.left -= 16; this.previosLeft = this.left + 16} // correctPosition();
  moveRight() {this.left += 16; this.previosLeft = this.left - 16} // correctPosition();
}