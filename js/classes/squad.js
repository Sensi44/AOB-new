import {rotateSquad} from "../functions/rotateSquad.js";

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
  headFlag = 'top';

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


  static rotate(MyGame, squads, nav) {
    for (let squad in squads) {
      if (squads[squad] === MyGame.curSquadInfo) {
        let current = Object.assign({}, squads[squad]);
        let middleLeft = current.left + squads[squad].width / 2;
        let middleTop = current.top + squads[squad].height / 2;
        current.sizeX = MyGame.curSquadInfo.sizeY;
        current.sizeY = MyGame.curSquadInfo.sizeX;
        current.width = current.sizeX * 32;
        current.height = current.sizeY * 32;

        current.units = [].concat(MyGame.curSquadInfo.units)
        current.units.length = MyGame.curSquadInfo.sizeX * MyGame.curSquadInfo.sizeY;

        let newArrUnits = [];
        if (nav === 'left') {
          if (current.headFlag === 'top') {
            current.headFlag = 'left'
          } else if (current.headFlag === 'left') {
            current.headFlag = 'bot'
          } else if (current.headFlag === 'bot') {
            current.headFlag = 'right'
          } else if (current.headFlag === 'right') {
            current.headFlag = 'top'
          }
          for (let j = 1; j <= current.sizeY; j++) {
            for (let i = 1; i <= current.sizeX; i++) {
              let unit = current.units[i * current.sizeY - j];
              unit.pos = i - 1;
              unit.row = j - 1;
              newArrUnits = newArrUnits.concat(unit)
            }
          }
        }

        if (nav === 'right') {
          if (current.headFlag === 'top') {
            current.headFlag = 'right'
          } else if (current.headFlag === 'right') {
            current.headFlag = 'bot'
          } else if (current.headFlag === 'bot') {
            current.headFlag = 'left'
          } else if (current.headFlag === 'left') {
            current.headFlag = 'top'
          }
          for (let j = current.sizeY; j >= 1; j--) {   // 3 2 1
            for (let i = current.sizeX; i >= 1; i--) { // 2 1
              let unit = current.units[i * current.sizeY - j];
              unit.pos = i - current.sizeX;
              if (unit.pos < 0) unit.pos = -unit.pos;
              unit.row = j - current.sizeY;
              if (unit.row < 0) unit.row = -unit.row;
              newArrUnits = newArrUnits.concat(unit)
            }
          }
        }

        current.top = middleTop - current.height / 2;
        current.left = middleLeft - current.width / 2;
        current.units = newArrUnits;
        MyGame.curSquadInfo = current;
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

  moveTop() {
    this.top -= 16;
    this.previosTop = this.top + 16
  } // correctPosition();
  moveDown() {
    this.top += 16;
    this.previosTop = this.top - 16
  } // correctPosition();
  moveLeft() {
    this.left -= 16;
    this.previosLeft = this.left + 16
  } // correctPosition();
  moveRight() {
    this.left += 16;
    this.previosLeft = this.left - 16
  } // correctPosition();
}