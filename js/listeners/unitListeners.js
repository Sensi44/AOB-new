//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Лисенеры отряда ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
import { glueToField } from "../updateFuncs/glueToField.js";
import { q } from '../main.js';

// ▬ ▬ ▬ ▬ ▬  Переделано на моба + -
// 1. Выбор текущего отряда               +++
// 2. Выбор места для создания отряда     +++
// 3. Перетаскивание отряда               +++
// 4. Кнопка удаления отряда              +++
// 5. Инфо об отряде                      +++
// 6. Выключить инфо                      +++
// 7. Клик по юниту                       +++

function moveS(e) {
  let cur = MyGame.curExUnit;
  cur.left = e.offsetX - MyGame.moveLeft; // вычитаем значение полученное ранее
  cur.top = e.offsetY - MyGame.moveTop;   // для правильного местоположения
}

export class UnitListeners {
  constructor(canvas) {

// 1. ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Выбор текущего отряда ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    canvas.addEventListener('click', (e) => {
      for (let unit of unitsArr) {
        if (
          ((e.offsetX >= unit.left) && (e.offsetX <= unit.left + unit.width)) &&
          ((e.offsetY >= unit.top) && (e.offsetY < unit.top + unit.height) )
        ) {
          MyGame.curExUnit = unit;
        }
      }
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

      for (let unit of unitsArr) {
        let cur = unit;
        if (((e.offsetY >= cur.top - 20 && e.offsetY <= cur.top + 20) &&
          (e.offsetX >= cur.left && e.offsetX <= cur.left + (cur.width / 2)))
          ||
          ((e.offsetX >= cur.left && e.offsetX <= (cur.left + cur.width)) &&
            (e.offsetY >= cur.top && e.offsetY <= (cur.top + cur.height)))) {
          MyGame.curExUnit = unit;

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
    curSq.addEventListener('click', () => Unit.deleteUnit(MyGame, unitsArr));


// 5. ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Инфо об отряде ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// При нажатии правой кнопки показывает инфо об отряде, при клике левой
// в любое место - скрывает инфо.
    canvas.addEventListener('mousedown', (e) => {
      e.preventDefault();

      if (e.button === 2) {
        q.strokeRect(20, 20, 100, 100);
        for (let unit of unitsArr) {
          // Инфо об отряде
          if ((e.offsetY >= unit.top && e.offsetY <= unit.top + unit.height)
            && (e.offsetX >= unit.left && e.offsetX <= unit.left + unit.width)) {

            // Убирает отображение инфо при переключении на другой отряд
            if (MyGame.curExUnit !== unit) {
              MyGame.curExUnit = unit;
              return;
            }

            if (!MyGame.showUnitInfo) {
              MyGame.showUnitInfo = 1;
            }
            MyGame.curExUnit = unit;
          }

          // Добавление кликнутого юнита в инфо
          if (unit.name) {
            for (let unit of unitsArr) {
              if (unit !== null && unit !== undefined) {
                if ((e.offsetY >= unit.top && e.offsetY <= unit.top + 94) &&
                  (e.offsetX >= unit.left && e.offsetX <= unit.left + 94)) {
                  MyGame.curUnitInfo = unit;
                }
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
      MyGame.showUnitInfo = 0;
      MyGame.curUnitInfo = '';
    })


// 7. ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Клик по юниту ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// Показывает в консоли на какого парня кликнули
    canvas.addEventListener("click", e => {
      output.innerText = `Координаты клика: ${e.offsetX}, ${e.offsetY}. `;
      for (let unit of unitsArr) {
        if (unit) {
              if ( (e.offsetY >= unit.top && e.offsetY <= unit.top + 94) &&
                (e.offsetX >= unit.left && e.offsetX <= unit.left + 94)) {
                // console.log(`Name:${unit.name}, id:${unit.id}
                //      HP:${unit.health}, left:${unit.left}, top:${unit.top}`, unit)
              }

        }
      }
    });

// 8. ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//
//

// 9. ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//
//

// 10. ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//
//

  }
}