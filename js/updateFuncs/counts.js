import { MyGame, squads } from "../main.js";

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Вывод общего числа юнитов ▬▬▬▬▬▬▬▬▬

let count = document.querySelector('.unitsCount');
let deads = document.querySelector('.deadsCount');

export function countUnits() {
  count.innerText = MyGame.countUnitId;
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