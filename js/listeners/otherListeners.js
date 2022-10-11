//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Лисенеры разные общие ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
import {canvas} from "../main.js";


export class OtherListeners {
  constructor(canvas) {

    //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Координаты клика ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    canvas.addEventListener("click", e => {
      output.innerText = `Координаты клика: ${e.offsetX}, ${e.offsetY}.`;
    });

    //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Переключение игрока ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
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
  }
}