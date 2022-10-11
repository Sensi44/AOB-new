//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Координаты клика ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// import { canvas } from "../main.js";

// canvas.addEventListener("click", e => {
//   output.innerText = `Координаты клика: ${e.offsetX}, ${e.offsetY}. `;
//   console.log(`Координаты клика: ${e.offsetX}, ${e.offsetY}. `)
// });

import {canvas} from "../main.js";
import { glueToField } from "../functions/glueToField.js";

function moveS(e) {
  let cur = MyGame.curSquadInfo;

  cur.left = e.offsetX - MyGame.moveLeft; // вычитаем значение полученное ранее
  cur.top = e.offsetY - MyGame.moveTop;   // для правильного местоположения
}

export class Listeners {
  constructor(canvas) {

    //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Координаты клика ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    canvas.addEventListener("click", e => {
      output.innerText = `Координаты клика: ${e.offsetX}, ${e.offsetY}. `;
      console.log(`Координаты клика: ${e.offsetX}, ${e.offsetY}. `)
    });


    //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Выбор текущего отряда ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    canvas.addEventListener('click', (e) => {
      for (let squad in squads) {
        if (
          ((e.offsetX >= squads[squad].left) && (e.offsetX <= squads[squad].left + squads[squad].width)) &&
          ((e.offsetY >= squads[squad].top) && (e.offsetY < squads[squad].top + squads[squad].height) )
        ) {
          MyGame.curSquadInfo = squads[squad];
        }
      }
      console.log(MyGame.curSquadInfo);
    }, false);


    //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Выбор места для создания отряда ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    // Показывает в консоли на какого парня кликнули
    canvas.addEventListener("click", e => {
      MyGame.left = e.offsetX;
      MyGame.top = e.offsetY;
    });


    //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Перетаскивание отряда ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

    canvas.addEventListener('mousedown', (e) => {
      // Для того чтобы отряд не дёргался после начала перемещения
      // две переменны фиксирующие начальное место клика
      MyGame.moveLeft = e.offsetX;
      MyGame.moveTop = e.offsetY;

      for (let squad in squads) {
        let cur = squads[squad];
        if (((e.offsetY >= cur.top - 20 && e.offsetY <= cur.top + 20) &&
          (e.offsetX >= cur.left && e.offsetX <= cur.left + (cur.width / 2)))
          ||
          ((e.offsetX >= cur.left && e.offsetX <= (cur.left + cur.width)) &&
            (e.offsetY >= cur.top && e.offsetY <= (cur.top + cur.height)))) {
          MyGame.curSquadInfo = squads[squad];

          // смещаем их на расстояние от 0 до левого края отряда
          MyGame.moveLeft -= cur.left;
          MyGame.moveTop -= cur.top;

          canvas.addEventListener('mousemove', moveS, false);
        }
      }
    }, false);


    canvas.addEventListener('mouseup', () => {
      canvas.removeEventListener('mousemove', moveS, false);
      glueToField();
    });

  }
}