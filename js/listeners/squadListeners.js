//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Лисенеры отряда ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
import { glueToField } from "../updateFuncs/glueToField.js";
import { Squad } from "../classes/squad.js";
import { q, squads, MyGame } from '../main.js';

// ▬ ▬ ▬ ▬ ▬
// 1. Выбор текущего отряда
// 2. Выбор места для создания отряда
// 3. Перетаскивание отряда
// 4. Кнопка удаления отряда
// 5. Инфо об отряде
// 6. Выключить инфо
// 7. Клик по юниту
// 8. Кнопка поворота отряда

function moveS(e) {
  let cur = MyGame.curSquadInfo;
  cur.left = e.offsetX - MyGame.moveLeft; // вычитаем значение полученное ранее
  cur.top = e.offsetY - MyGame.moveTop;   // для правильного местоположения
}

export class SquadListeners {
  constructor(canvas) {

// 1. ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Выбор текущего отряда ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
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


// 2. ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Выбор места для создания отряда ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    // Показывает в консоли на какого парня кликнули
    canvas.addEventListener("click", e => {
      MyGame.left = e.offsetX;
      MyGame.top = e.offsetY;
    });


// 3. ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Перетаскивание отряда ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

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


// 4. ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Кнопка удаления отряда ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    let curSq = document.querySelector('.deletesquad');
    curSq.addEventListener('click', () => Squad.deleteSquad(MyGame, squads));


// 5. ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Инфо об отряде ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// При нажатии правой кнопки показывает инфо об отряде, при клике левой
// в любое место - скрывает инфо.
    canvas.addEventListener('mousedown', (e) => {
      e.preventDefault();

      if (e.button === 2) {
        q.strokeRect(20, 20, 100, 100);
        for (let squad in squads) {
          // Инфо об отряде
          if ((e.offsetY >= squads[squad].top && e.offsetY <= squads[squad].top + squads[squad].height)
            && (e.offsetX >= squads[squad].left && e.offsetX <= squads[squad].left + squads[squad].width)) {

            // Убирает отображение инфо при переключении на другой отряд
            if (MyGame.curSquadInfo !== squads[squad]) {
              MyGame.curSquadInfo = squads[squad];
              return;
            }

            if (!MyGame.showSquadInfo) {
              MyGame.showSquadInfo = 1;
            }
            MyGame.curSquadInfo = squads[squad];
          }

          // Добавление кликнутого юнита в инфо
          if (squads[squad].state === 1) {
            for (let unit of squads[squad].units) {
              if ((e.offsetY >= unit.top && e.offsetY <= unit.top + 30) &&
                (e.offsetX >= unit.left && e.offsetX <= unit.left + 30)) {
                MyGame.curUnitInfo = unit;
              }
            }
          }
        }
      }
    });

    canvas.oncontextmenu = (function(e) {
      //действия
      return false;
    });


// 6.▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Выключить инфо ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// Убирает инфо об отряде при отпускании мыши над элементом либо вне его
    canvas.addEventListener("click", e => {
      MyGame.showSquadInfo = 0;
    })


// 7. ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Клик по юниту ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// Показывает в консоли на какого парня кликнули
    canvas.addEventListener("click", e => {
      output.innerText = `Координаты клика: ${e.offsetX}, ${e.offsetY}. `;
      for (let squad in squads) {
        if (squads[squad].state === 1) {
          for (let unit of squads[squad].units) {
            if (unit !== null && unit !== undefined) {
              if ( (e.offsetY >= unit.top && e.offsetY <= unit.top + 30) &&
                (e.offsetX >= unit.left && e.offsetX <= unit.left + 30)) {
                console.log(`Name:${unit.name}, id:${unit.id}
                     HP:${unit.health}, left:${unit.left}, top:${unit.top}
                      row: ${unit.row + 1}, pos: ${unit.pos + 1}`)
              }
            }
          }
        }
      }
    });

// 8. ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Кнопка поворота отряда ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//     let rotatesquad = document.querySelector('.rotatesquad');
//     rotatesquad.addEventListener('click', () => Squad.rotate(MyGame, squads));


  }
}