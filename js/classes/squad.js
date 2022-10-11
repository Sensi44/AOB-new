export class Squad {
  units = [];
  state = 1;
  row = 0;
  left = 0;
  top = 0;
  deads = 0;
  keyBind = '';
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

  static deleteSquad(MyGame, squads) {
    for (let squad in squads) {
      if (squads[squad] === MyGame.curSquadInfo) {
        squads[squad] = {state: 0};
        MyGame.curSquadInfo = squads.squad1;
      }
    }
  }

  moveTop()   {this.top  -= 16; } // correctPosition();
  moveDown()  {this.top  += 16; } // correctPosition();
  moveLeft()  {this.left -= 16;} // correctPosition();
  moveRight() {this.left += 16;} // correctPosition();
}