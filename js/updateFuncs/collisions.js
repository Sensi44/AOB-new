import { throttle } from "./throt-deboun.js";

function collisions() {}
collisions = throttle(checkCollisionAll, 48)


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ checkCollisionAll ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

// Составление пар отрядов для проверки их по функции столкновения (checkCollision)
function checkCollisionAll(squads, phase) {
  // Проходимся по всем активным отрядам кроме выбранного
  for (let squad in squads) {
    if (squads[squad].state === 1) {
      //if (squads[squad] === MyGame.curSquadInfo) continue;
      let cur = squads[squad];

      // Проходимся по всем активным отрядам кроме  предыдущего
      // Получаем все возможные варианты пар отрядов, для которых вызываем основную логическую функцию
      for (let sq in squads) {
        if (squads[sq].state === 1 && squads[sq] !== squads[squad]) {
          //if (squads[sq] === MyGame.curSquadInfo) continue;
          let cur2 = squads[sq];

          // if ((cur2.left + cur2.width > cur.left) && cur2.left < cur.left) {
          //     cur.left += 16;
          //     cur2.left -= 16;
          // }
          checkCollision(cur, cur2, phase)
        }
      }
    }
  }
}

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ checkCollision ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

function checkCollision(first, second = MyGame.curSquadInfo, phase) {
  let cur = first;
  let sec = second;
  let left = sec.left;
  let top = sec.top;
  let right = sec.left + sec.width;
  let bottom = sec.top + sec.height;

  let curLeft = cur.left;
  let curTop = cur.top;
  let curRight = cur.left + cur.width;
  let curBottom = cur.top + cur.height;

  // Если выбранный отряд со всех сторон больше статичного) (статик внутри выбранного)
  if ( (curLeft <= left && curRight >= right) &&
    (curTop <= top && curBottom >= bottom) ) {
    if (width - curRight < curLeft) {
      cur.left -= 16;
    }
    if (width - curRight > curLeft) {
      cur.left += 16;
    }
    console.log(`Один внутри другого`)
  }

  // Если выбранный отряд со всех сторон меньше статичного (выбранный внутри статика)
  if (  (curLeft >= left && curRight <= right) && (curTop >= top && curBottom <= bottom)) {
    cur.left += 16;
  }
  // Если пересеклись 2 длинных отряда - 1
  if ( (curLeft < left && curRight > right) && (top < curTop && bottom > curBottom) ) {
    cur.left += 16;
  }
  // Если пересеклись 2 длинных отряда - 2
  if ( (curTop < top && curBottom > bottom) && (curLeft > left && curRight < right) ) {
    cur.left += 16;
  }


  // Правый нижний угол
  if ( ((right + 16) > curLeft && left < curLeft) && (top <= curTop && bottom >= curTop) ) {
    cur.left += 16;
    sec.left -= 16;
    console.log(`Правый нижний угол`)
  };
  //  Правый верхний угол
  if ( ((right + 16)> curLeft && left < curLeft) && (bottom >= curBottom && top <= curBottom )) {
    cur.left += 16;
    sec.left -= 16;
    console.log(`Правый верхний угол`)
  }
  // Левый нижний
  if ( ((left - 16) < curRight && right > curRight) && (top <= curTop && bottom >= curTop) ) {
    cur.left -= 16;
    sec.left += 16;
    console.log(`Левый нижний`)
  };
  // Левый верхний
  if ( ((left - 16)< curRight && right > curRight) && (bottom >= curBottom && top <= curBottom) ) {
    cur.left -= 16;
    sec.left += 16;
    console.log(`Левый верхний`)
  };


  // Только боковые вхождения когда текущий отряд больше статичного
  // Заход справа
  if ((curLeft <= right && left <= curLeft) && (top >= curTop && bottom <= curBottom)) {
    console.log(`right`);
    sec.left -= 16;
    cur.left += 16;
  }
  // Заход слева
  if ((curRight >= left && curRight <= right) && (top >= curTop && bottom <= curBottom)) {
    console.log(`left`);
    sec.left += 16;
    cur.left -= 16;
  }
  // Заход сверху
  if ((top <= curBottom && bottom >= curBottom) && (left >= curLeft && right <= curRight)) {
    console.log(`top`);
    sec.top += 16;
    cur.top -= 16;
  }
  // Заход снизу
  if ((bottom >= curTop && top <= curTop) && (left >= curLeft && right <= curRight)) {
    console.log(`bottom`);
    sec.top -= 16;
    cur.top += 16;
  }


  // Только боковые вхождения когда текущий отряд меньше статичного
  // Заход справа
  if ((curLeft <= right && left <= curLeft) && (top <= curTop && bottom >= curBottom)) {
    console.log(`right 2`);
    sec.left -= 16;
    cur.left -= 16;
  }
  // Заход слева
  if ((curRight >= left && curRight <= right) && (top <= curTop && bottom >= curBottom)) {
    console.log(`left 2`);
    sec.left += 16;
    cur.left += 16;
  }
  // Заход сверху
  if ((top <= curBottom && bottom >= curBottom) && (left <= curLeft && right >= curRight)) {
    console.log(`top 2`);
    sec.top += 16;
    cur.top -= 16;
  }
  // Заход снизу
  if ((bottom >= curTop && top <= curTop) && (left <= curLeft && right >= curRight)) {
    console.log(`bottom 2`);
    sec.top -= 16;
    cur.top += 16;
  }
}

export default collisions;