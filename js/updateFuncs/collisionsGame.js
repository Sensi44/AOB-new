import { throttle } from "./throt-deboun.js";

function collisions2() {}
collisions2 = throttle(checkCollisionAll, 48)


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ checkCollisionAll ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

// Составление пар отрядов для проверки их по функции столкновения (checkCollision)
function checkCollisionAll(squads, phase) {
  // Проходимся по всем активным отрядам кроме выбранного
  for (let squad in squads) {
    if (squads[squad].state === 1) {
      //if (squads[squad] === MyGame.curSquadInfo) continue;
      let first = squads[squad];

      // Проходимся по всем активным отрядам кроме  предыдущего
      // Получаем все возможные варианты пар отрядов, для которых вызываем основную логическую функцию
      for (let sq in squads) {
        if (squads[sq].state === 1 && squads[sq] !== squads[squad]) {
          let second = squads[sq];
          checkCollision(first, second, phase)
        }
      }
    }
  }
}

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ checkCollision ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

function checkCollision(f, s = MyGame.curSquadInfo, phase) {
  let first = f;
  let second = s;

  let firstLeftPrev = first.previosLeft;
  let firstTopPrev = first.previosTop;

  let secondLeftPrev = second.previosLeft;
  let secondTopPrev = second.previosTop;

  let firstLeft = first.left;
  let firstTop = first.top;
  let firstRight = first.left + first.width;
  let firstBottom = first.top + first.height;

  let secondLeft = second.left;
  let secondTop = second.top;
  let secondRight = second.left + second.width;
  let secondBottom = second.top + second.height;

  if (firstBottom > secondTop && firstTop < secondTop) {
    console.log('a')
    first.top = first.previosTop;
    second.top = second.previosTop;
  }


}

export default collisions2;