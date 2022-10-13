import {MyGame, squads} from "../main.js";

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Вывод общего числа юнитов ▬▬▬▬▬▬▬▬▬

let count = document.querySelector('.unitsCount');
let countLive = document.querySelector('.unitslive');
let deads = document.querySelector('.deadsCount');

export function countUnits() {
  let countUnits = 0;
  for (let squad in squads) {
    if (squads[squad].state === 1) {
      for (let unit of squads[squad].units) {
        if (unit?.name) {
          countUnits++;
        }
      }
    }
  }
  count.innerText = countUnits;
  countLive.innerText = countUnits - MyGame.deadCount;
}


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Подсчёт умирающих ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
export function unitsDeaths() {
  for (let squad in squads) {
    if (squads[squad].state === 1) {
      let count = MyGame.deadCount;

      for (let unit of squads[squad].units) {
        if (unit !== null && unit !== undefined) {
          if (unit.health === 0 && unit.dead === false) {
            unit.dead = true;
            MyGame.deadCount++;
            squads[squad].deads++;
            console.log(MyGame.deadCount, squads[squad].deads);
          }
        }
      }
    }
  }
  deads.innerText = MyGame.deadCount;
}