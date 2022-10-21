//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Лисенеры разные общие ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
import {canvas} from "../main.js";

// всё переделано на моба
// ▬ ▬ ▬ ▬ ▬
// 1. Координаты клика
// 2. ВПереключение игрока
// 3. Забиндидь отряд
// 4. Передвижение по кнопкам

export class OtherListeners {
  constructor(canvas) {

// 1. ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Координаты клика ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    canvas.addEventListener("click", e => {
      output.innerText = `Координаты клика: ${e.offsetX}, ${e.offsetY}.`;
    });


// 2. ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Переключение игрока ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    let switchPlayer = document.body.querySelector('.switchplayer');

    switchPlayer.addEventListener('click', () => {
      if (switchPlayer.innerText === 'Игрок 1' && MyGame.curPlayer === 1) {
        switchPlayer.innerText = 'Игрок 2';
        MyGame.curPlayer = 2;
      } else {
        switchPlayer.innerText = 'Игрок 1';
        MyGame.curPlayer = 1;
      }

      console.log('текущий игрок - ', MyGame.curPlayer);
    })


// 3. ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Забиндидь отряд ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    document.addEventListener('keydown', function (e) {
      let arr = [0,1,2,3,4,5,6,7,8,9]
      for (let digit of arr) {
        if (e.ctrlKey && e.code === `Digit${digit}`) {
          e.preventDefault();
          MyGame.curExUnit.keyBind = `Digit${digit}`;
          console.log(e.code)
        }
      }

      for (let unit of unitsArr) {
        if (unit.name && unit.keyBind === e.code) {
          MyGame.curExUnit = unit;
          console.log(e)
        }
      }
    })


// 4. ▬▬▬▬▬▬▬▬▬▬▬▬▬ Передвижение по кнопкам ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    document.body.addEventListener("keydown", (e) => {
      let cur = MyGame.curExUnit;
      if (e.key === 'ArrowUp') cur.moveTop()
      if (e.key === 'ArrowDown') cur.moveDown()
      if (e.key === 'ArrowLeft') cur.moveLeft()
      if (e.key === 'ArrowRight') cur.moveRight()
    })


// 5. ▬▬▬▬▬▬▬▬▬▬▬▬▬ Отключение прокрутки ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    window.addEventListener("keydown", function(e) {
      if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
      }
    }, false);



  }
}