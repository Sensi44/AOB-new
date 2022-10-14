import { throttle } from "./throt-deboun.js";
import { MyGame, squads } from "../main.js";

function fight() {}
fight = throttle(fightRules, 1000)


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Fight ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

// Составление пар отрядов для проверки их по функции столкновения (checkCollision)
function fightRules(MyGame, squads) {
  for (let squad in squads) {
      if (MyGame.curSquadInfo.state === 1 &&
        squads[squad].state === 1) {
        let first = MyGame.curSquadInfo;
        for (let sq in squads) {
          if (squads[sq].state === 1
            && squads[sq] !== MyGame.curSquadInfo
            && squads[sq].player !== squads[squad].player
          ) {
            let second = squads[sq];
            fightUpdate(first, second)
          }
        }
      }
  }
}

function fightUpdate(current, second) {
  let currentLeft = current.left;
  let currentTop = current.top;
  let currentRight = current.left + current.width;
  let currentBottom = current.top + current.height;

  let secondLeft = second.left;
  let secondTop = second.top;
  let secondRight = second.left + second.width;
  let secondBottom = second.top + second.height;

  if (currentTop === secondBottom) {
    MyGame.fight = true;
    console.log('бой')
    let count = 0;
    

    for (let unit1 of current.units) {
      unit1.health -= Math.floor(Math.random() * 13) + 1;
      if (unit1.health < 0) unit1.health = 0;
    }

    for (let unit2 of second.units) {
      unit2.health -= Math.floor(Math.random() * 13) + 1;
      if (unit2.health < 0) unit2.health = 0;
    }
  }

}

export default fight;