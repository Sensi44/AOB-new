//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Лисенеры разные общие ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
import {canvas} from "../main.js";

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

      console.log(MyGame.curPlayer);
    })


// 3. ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Забиндидь отряд ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    document.addEventListener('keydown', function (e) {
      let arr = [0,1,2,3,4,5,6,7,8,9]
      for (let digit of arr) {
        if (e.ctrlKey && e.code === `Digit${digit}`) {
          e.preventDefault();
          MyGame.curSquadInfo.keyBind = `Digit${digit}`;
          console.log(e.code)
        }
      }

      for (let squad in squads) {
        if (squads[squad].state === 1 && squads[squad].keyBind === e.code) {
          MyGame.curSquadInfo = squads[squad];
          console.log(e.code)
        }
      }
    })


// 4. ▬▬▬▬▬▬▬▬▬▬▬▬▬ Передвижение по кнопкам ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    document.body.addEventListener("keydown", (e) => {
      let cur = MyGame.curSquadInfo;
      if (e.key === 'ArrowUp') cur.moveTop()
      if (e.key === 'ArrowDown') cur.moveDown()
      if (e.key === 'ArrowLeft') cur.moveLeft()
      if (e.key === 'ArrowRight') cur.moveRight()
    })





  }
}