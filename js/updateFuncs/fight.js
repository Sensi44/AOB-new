import { throttle } from "./throt-deboun.js";
import { MyGame, squads } from "../main.js";

function fight() {}
fight = throttle(fightRules, 96)


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Fight ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

// Составление пар отрядов для проверки их по функции столкновения (checkCollision)
function fightRules(squads, phase) {
  for (let squad in squads) {
    if (phase) {
      if (squads[squad].state === 1) {
        let first = squads[squad];
        for (let sq in squads) {
          if (squads[sq].state === 1
            && squads[sq] !== squads[squad]
            && squads[sq].player !== squads[squad].player
          ) {
            let second = squads[sq];
            fightUpdate(first, second)
          }
        }
      }
    }

  }
}

function fightUpdate(first, second) {
  let firstLeft = first.left;
  let firstTop = first.top;
  let firstRight = first.left + first.width;
  let firstBottom = first.top + first.height;

  let secondLeft = second.left;
  let secondTop = second.top;
  let secondRight = second.left + second.width;
  let secondBottom = second.top + second.height;
  if (firstBottom === secondTop) {
    console.log('бой')
  }

}

export default fight;