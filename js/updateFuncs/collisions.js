import { throttle } from "./throt-deboun.js";

function collisions() {}
collisions = throttle(checkCollisionAll, 96)


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ checkCollisionAll ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

// Составление пар отрядов для проверки их по функции столкновения (checkCollision)
function checkCollisionAll(squads, phase) {
  for (let squad in squads) {
    if (squads[squad].state === 1) {
      let first = squads[squad];
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
      if (phase) {
        cur.left = cur.previosLeft;
        return
      }
      cur.left -= 16;
    }
    if (width - curRight > curLeft) {
      if (phase) {
        cur.left = cur.previosLeft;
        return
      }
      cur.left += 16;
    }
    console.log(`Один внутри другого`)
  }

  // Если выбранный отряд со всех сторон меньше статичного (выбранный внутри статика)
  if (  (curLeft >= left && curRight <= right) && (curTop >= top && curBottom <= bottom)) {
    if (phase) {
      cur.left = cur.previosLeft;
      return
    }
    cur.left += 16;
  }
  // Если пересеклись 2 длинных отряда - 1
  if ( (curLeft < left && curRight > right) && (top < curTop && bottom > curBottom) ) {
    if (phase) {
      cur.left = cur.previosLeft;
      return
    }
    cur.left += 16;
  }
  // Если пересеклись 2 длинных отряда - 2
  if ( (curTop < top && curBottom > bottom) && (curLeft > left && curRight < right) ) {
    if (phase) {
      cur.left = cur.previosLeft;
      return
    }
    cur.left += 16;
  }


  // Правый нижний угол
  if ( ((right + 16) > curLeft && left < curLeft) && (top <= curTop && bottom >= curTop) ) {
    console.log(`Правый нижний угол`)
    if (phase) {
      cur.left = cur.previosLeft;
      sec.left = sec.previosLeft;
      cur.top = cur.previosTop;
      sec.top = sec.previosTop;
      return
    }
    cur.left += 16;
    sec.left -= 16;
  };

  //  Правый верхний угол
  if ( ((right + 16)> curLeft && left < curLeft) && (bottom >= curBottom && top <= curBottom )) {
    console.log(`Правый верхний угол`)
    if (phase) {
      cur.left = cur.previosLeft;
      sec.left = sec.previosLeft;
      cur.top = cur.previosTop;
      sec.top = sec.previosTop;
      return
    }
    cur.left += 16;
    sec.left -= 16;
  }
  // Левый нижний
  if ( ((left - 16) < curRight && right > curRight) && (top <= curTop && bottom >= curTop) ) {
    console.log(`Левый нижний`)
    if (phase) {
      cur.left = cur.previosLeft;
      sec.left = sec.previosLeft;
      cur.top = cur.previosTop;
      sec.top = sec.previosTop;
      return
    }
    cur.left -= 16;
    sec.left += 16;
  };

  // Левый верхний
  if ( ((left - 16)< curRight && right > curRight) && (bottom >= curBottom && top <= curBottom) ) {
    console.log(`Левый верхний`)
    if (phase) {
      cur.left = cur.previosLeft;
      sec.left = sec.previosLeft;
      cur.top = cur.previosTop;
      sec.top = sec.previosTop;
      return
    }
    cur.left -= 16;
    sec.left += 16;
  };


  // Только боковые вхождения когда текущий отряд больше статичного
  // Заход справа
  if ((curLeft <= right && left <= curLeft) && (top >= curTop && bottom <= curBottom)) {
    console.log(`right`);
    if (phase) {
      sec.left = sec.previosLeft;
      cur.left = cur.previosLeft;
      return
    }
    sec.left -= 16;
    cur.left += 16;
  }
  // Заход слева
  if ((curRight >= left && curRight <= right) && (top >= curTop && bottom <= curBottom)) {
    console.log(`left`);
    if (phase) {
      sec.left = sec.previosLeft;
      cur.left = cur.previosLeft;
      return
    }
    sec.left += 16;
    cur.left -= 16;
  }
  // Заход сверху
  if ((top <= curBottom && bottom >= curBottom) && (left >= curLeft && right <= curRight)) {
    console.log(`top`);
    if (phase) {
      sec.top = sec.previosTop;
      cur.top = cur.previosTop;
      return
    }
    sec.top += 16;
    cur.top -= 16;
  }

  // Заход снизу
  if ((bottom >= curTop && top <= curTop) && (left >= curLeft && right <= curRight)) {
    console.log(`bottom`);
    if (phase) {
      sec.top = sec.previosTop;
      cur.top = cur.previosTop;
      return
    }
    sec.top -= 16;
    cur.top += 16;
  }


  // Только боковые вхождения когда текущий отряд меньше статичного
  // Заход справа
  if ((curLeft <= right && left <= curLeft) && (top <= curTop && bottom >= curBottom)) {
    console.log(`right 2`);
    if (phase) {
      sec.left = sec.previosLeft;
      cur.left = cur.previosLeft;
      return
    }
    sec.left -= 16;
    cur.left -= 16;
  }
  // Заход слева
  if ((curRight >= left && curRight <= right) && (top <= curTop && bottom >= curBottom)) {
    console.log(`left 2`);
    if (phase) {
      sec.left = sec.previosLeft;
      cur.left = cur.previosLeft;
      return
    }
    sec.left += 16;
    cur.left += 16;
  }
  // Заход сверху
  if ((top <= curBottom && bottom >= curBottom) && (left <= curLeft && right >= curRight)) {
    console.log(`top 2`);
    if (phase) {
      sec.top = sec.previosTop;
      cur.top = cur.previosTop;
      return
    }
    sec.top += 16;
    cur.top -= 16;
  }
  // Заход снизу
  if ((bottom >= curTop && top <= curTop) && (left <= curLeft && right >= curRight)) {
    console.log(`bottom 2`);
    if (phase) {
      sec.top = sec.previosTop;
      cur.top = cur.previosTop;
      return
    }
    sec.top -= 16;
    cur.top += 16;
  }
}

export default collisions;