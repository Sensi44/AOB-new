import { canvas } from "./main";


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Инфо об отряде ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

// При нажатии правой кнопки показывает инфо об отряде, при клике левой
// в любое место - скрывает инфо.

canvas.addEventListener('mousedown', e => {
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



//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Выключить инфо ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

// Убирает инфо об отряде при отпускании мыши над элементом либо вне его
canvas.addEventListener("click", e => {
            MyGame.showSquadInfo = 0;
})

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Передвижения по кнопкам ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

document.body.addEventListener("keydown", (e) => {
    let cur = MyGame.curSquadInfo;
    if (e.key === 'ArrowUp') cur.moveTop()
    if (e.key === 'ArrowDown') cur.moveDown()
    if (e.key === 'ArrowLeft') cur.moveLeft()
    if (e.key === 'ArrowRight') cur.moveRight()
})

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Прокрутка экрана ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

// Доделай потом
// document.body.addEventListener( "mousedown", (e)=>{
//     let x = e.clientX;
//     let y = e.clientY
//     window.scrollTo(x, y);
//     console.log(e)
//     // if (document.documentElement.scrollLeft < e.offsetX) {
//     //     document.documentElement.scrollLeft += 3 + e.offsetX;
//     // }
//     // if (document.documentElement.scrollLeft > e.offsetX) {
//     //     document.documentElement.scrollLeft -= 3 - e.offsetX ;
//     // }
//
//
//
//
// })
//
// canvas.addEventListener('click', () => {
//     canvas.addEventListener('mousedown', moveSquad2, false);
// }, false);
//
// function moveSquad2(e) {
//
//             canvas.addEventListener('mousemove', moveS2, false);
//
// }
//
// function moveS2(e) {
//     let x = e.clientX;
//     let y = e.clientY
//
//     window.scrollTo(x, y);
//     console.log(e)
// }

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Клик по юниту ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

// Показывает в консоли на какого парня кликнули
let x = canvas.addEventListener("click", e => {
    output.innerText = `Координаты клика: ${e.offsetX}, ${e.offsetY}. `;
    for (let squad in squads) {
        if (squads[squad].state === 1) {
            for (let unit of squads[squad].units) {
                if ( (e.offsetY >= unit.top && e.offsetY <= unit.top + 30) &&
                    (e.offsetX >= unit.left && e.offsetX <= unit.left + 30)) {
                    console.log(`Name:${unit.name}, id:${unit.id}
                     HP:${unit.health}, left:${unit.left}, top:${unit.top}
                      row: ${unit.row + 1}, pos: ${unit.pos + 1}`)
                }
            }
        }
    }
});


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Кнопка удаления отряда ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

let curSq = document.querySelector('.deletesquad');
curSq.addEventListener('click', () => Squad.deleteSquad());

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Забиндидь отряд ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

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


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬