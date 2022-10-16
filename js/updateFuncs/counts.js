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

      for (let unit of squads[squad].units) {
        if (unit !== null && unit !== undefined) {
          if (unit.health === 0 && unit.dead === false) {
            unit.dead = true;
            MyGame.deadCount++;
            squads[squad].deads++;
            console.log(MyGame.deadCount, squads[squad].deads);
          }
        }


        // Функция смещения умирающих юнитов в отряде
        // displacementOfTheDead(squads[squad]);

      }
    }
  }
  deads.innerText = MyGame.deadCount;
}


// Функция смещения умирающих юнитов в отряде
export function displacementOfTheDead(squad, position) {
  if ( position === 'top') {
    for (let i = squad.row; i >= 0; i--) {
      let count = 0;
      let tempUnits = squad.units.slice(squad.sizeX * i, squad.sizeX * (i + 1));

      for (let unit of tempUnits) {
        count++;
        if (unit?.health === 0 || unit === null) {
          let prevRowUnits = squad.units.slice(squad.sizeX * (i - 1), squad.sizeX * (i));
          squad.units[squad.sizeX * i + count - 1] = (prevRowUnits[count - 1])
            ? prevRowUnits[count - 1]
            : unit;

          if (squad.units[squad.sizeX * i + count - 1]?.health > 0) {
            squad.units[squad.sizeX * i + count - 1].pos = (squad.sizeX * i + count - 1) % squad.sizeX;
            squad.units[squad.sizeX * i + count - 1].row = i;
            squad.units[squad.sizeX * (i - 1) + count - 1] = null
          }
        }
      }
    }
  }



  if ( position === 'bottom') {
    for (let i = 0; i <= squad.row; i++) {
      let count = 0;
      let tempUnits = squad.units.slice(squad.sizeX * i, squad.sizeX * (i + 1));

      for (let unit of tempUnits) {
        count++;
        if (unit?.health === 0 || unit === null) {
          let prevRowUnits = squad.units.slice(squad.sizeX * (i + 1), squad.sizeX * (i + 2));
          squad.units[squad.sizeX * i + count - 1] = (prevRowUnits[count - 1])
            ? prevRowUnits[count - 1]
            : unit;

          if (squad.units[squad.sizeX * i + count - 1]?.health > 0) {
            squad.units[squad.sizeX * i + count - 1].pos = (squad.sizeX * i + count - 1) % squad.sizeX;
            squad.units[squad.sizeX * i + count - 1].row = i;
            squad.units[squad.sizeX * (i + 1) + count - 1] = null

          }
        }
      }
    }
  }
}