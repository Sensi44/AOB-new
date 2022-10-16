import { throttle } from "./throt-deboun.js";
import { MyGame, squads } from "../main.js";
import { displacementOfTheDead } from "./displacementOfTheDead.js";

function fight() {}
fight = throttle(pairsOfSquads, 100)

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Fight ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// Составление пар отрядов для проверки их по функции столкновения (checkCollision)
function pairsOfSquads(MyGame, squads) {
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
            checkingCollisionConditions(first, second)
          }
        }
      }
  }
}

// Условия столкновения выбранных пар отрядов
function checkingCollisionConditions(current, second) {
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
    getPairsOfUnits(current, second)
  }
}


// определяем подотряды и способ их столкновения
function getPairsOfUnits(current, second) {
  // displacementOfTheDead(current)
  // displacementOfTheDead(second)
  let leftBorder = null;
  let leftSquad = null;
  let rightSquad = null;
  let diffStart = current.left - second.left;
  let diffEnd = (current.left + current.width) - (second.left + second.width);

  if (diffStart > 0) {
    leftSquad = current.left;
    leftBorder = second.left;
  } else {
    diffStart = -diffStart;
    leftSquad = second.left;
    leftBorder = current.left;
  }

  if (diffEnd > 0) {
    rightSquad = second.left + second.width + 16;
  } else {
    rightSquad = current.left + current.width + 16;
  }

  // Счётчик пар (сколько будет столкновений, даже если один из юнитов undefined/null пара есть
  // просто с предыдущим из вражеского отряда второй раз типа два на одного
  let countOfPairs = (rightSquad - leftSquad) / 32;

  // Определение пар на основе подотрядов
  let startCurrentPos = (leftBorder - current.left + diffStart) / 32;
  if (startCurrentPos < 0 ) startCurrentPos = -startCurrentPos;
  let endCurrentPos =  Math.trunc(startCurrentPos + ((rightSquad - leftSquad) / 32));
  if (endCurrentPos < 0 ) endCurrentPos = -endCurrentPos;
  let startSecondPos = (leftBorder - second.left + diffStart) / 32;
  if (startSecondPos < 0 ) startSecondPos = -startSecondPos;
  let endSecondPos = Math.trunc(startSecondPos + ((rightSquad - leftSquad) / 32));
  if (endSecondPos < 0 ) endSecondPos = -endSecondPos;


  // Определение исходных сопоставляемых отрядов
  let curUnits = current.units.slice(startCurrentPos, endCurrentPos);
  // если отряд имеет больше одной строки
  let tempSecUnits = second.units.slice(second.sizeX * second.row);
  let secUnits = tempSecUnits.slice(startSecondPos, endSecondPos);

  console.log(curUnits, secUnits)
  // console.log(startSecondPos, endSecondPos)
  // console.log(`diffs`, diffStart, diffEnd);
  // console.log('left', leftBorder, 'leftPart',leftSquad, 'rightPart', rightSquad)
  // console.log('количество пар -', countOfPairs)

  // весь дальнейший код необходимо вынести в следующую функцию, описывающую бой для каждой пары.
  for (let i = 0; i < countOfPairs; i++) {
    console.log([curUnits[i]?.name, secUnits[i]?.name])
    if ((curUnits[i]) && (secUnits[i]) ) {
      curUnits[i].health -= (hit(secUnits[i].hitChance))
        ? secUnits[i].attack - curUnits[i].defense : null;
      secUnits[i].health -= (hit(curUnits[i].hitChance))
        ? curUnits[i].attack - secUnits[i].defense : null;
    };

    // Функция рандома
    function hit(unitHitChance) {
      return Math.random() < unitHitChance/100;
    }

    if (curUnits[i]?.health < 0) curUnits[i].health = 0;
    if (secUnits[i]?.health < 0) secUnits[i].health = 0;
  }

}

export default fight;