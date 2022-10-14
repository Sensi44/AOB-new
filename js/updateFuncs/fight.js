import { throttle } from "./throt-deboun.js";
import { MyGame, squads } from "../main.js";

function fight() {}
fight = throttle(pairsOfSquads, 1000)


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
            pairOfSquadParts(first, second)
          }
        }
      }
  }
}

function pairOfSquadParts(current, second) {
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
    pairsOfUnits(current, second)
    // for (let unit1 of current.units) {
    //   unit1.health -= Math.floor(Math.random() * 13) + 1;
    //   if (unit1.health < 0) unit1.health = 0;
    // }
    //
    // for (let unit2 of second.units) {
    //   unit2.health -= Math.floor(Math.random() * 13) + 1;
    //   if (unit2.health < 0) unit2.health = 0;
    // }
  }
}

function pairsOfUnits(current, second) {
  // определяем подотряды
  let leftBorder = null;
  let rightBorder = null;
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
    rightBorder = current.left + current.width
    rightSquad = second.left + second.width;
  } else {
    // diffEnd = -diffEnd;
    rightSquad = current.left + current.width;
  }

  // Счётчик пар
  let countOfPairs = (rightSquad - leftSquad) / 32;

  // Определение пар на основе подотрядов
  let startCurrentPos = (leftBorder - current.left + diffStart) / 32;
  if (startCurrentPos < 0 ) startCurrentPos = -startCurrentPos;

  let endCurrentPos = startCurrentPos + ((rightSquad - leftSquad) / 32);
  if (endCurrentPos < 0 ) endCurrentPos = -endCurrentPos;

  let startSecondPos = (leftBorder - second.left + diffStart) / 32;
  if (startSecondPos < 0 ) startSecondPos = -startSecondPos;

  let endSecondPos = startSecondPos + ((rightSquad - leftSquad) / 32);
  if (endSecondPos < 0 ) endSecondPos = -endSecondPos;


  let curUnits = current.units.slice(startCurrentPos, endCurrentPos);
  let secUnits = second.units.slice(startSecondPos, endSecondPos);
  // console.log(startSecondPos, endSecondPos)
  console.log(curUnits, secUnits)

  // console.log(`diffs`, diffStart, diffEnd);
  // console.log('left', leftBorder, 'right', rightBorder, 'leftPart',leftSquad, 'rightPart', rightSquad)
  // console.log('количество пар -', countOfPairs)

  for (let i = 0; i < countOfPairs; i++) {
    console.log(curUnits[i], secUnits[i])

    if (curUnits[i]) curUnits[i].health -= 10;
    if (curUnits[i]?.health < 0) curUnits[i].health = 0;
    if (secUnits[i]) secUnits[i].health -= 10;
    if (secUnits[i]?.health < 0) secUnits[i].health = 0;
  }


}

export default fight;