import { drawUnits } from "../renders/drawUnits.js";
import { drawSquads } from "../renders/drawSquads.js";
import { drawMini } from "../renders/drawMini.js";

export function render(q, m, MyGame, squads, width, height, width2, height2) {
    q.clearRect(0, 0, width, height);
    m.clearRect(0, 0, width2, height2);
    //
    (MyGame.canStart)      ? drawUnits(q, MyGame, squads)     : null;
    (MyGame.canStart)      ? drawSquads(q, MyGame, squads)    : null;
    // (MyGame.showSquadInfo) ? drawSquadInfo() : null;
    drawMini(m, squads, width2);
}






//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Рисуем инфо при клике ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

function drawSquadInfo() {
    let cur = MyGame.curSquadInfo;
    // Сам квадрат
    q.fillStyle = "rgb(155,55,55)";
    q.fillRect(cur.left + cur.width + 3, cur.top - 7, 135, 180);
    q.strokeStyle = "rgb(0,0,0)";
    q.strokeRect(cur.left + cur.width + 3, cur.top - 7, 135, 180)

    // Подписи
    q.fillStyle   = "rgb(255,255,255)";
    q.font = "13.5px Arial"
    q.fillText(`${cur.name}`, cur.left + cur.width + 10, cur.top + 12)
    q.fillText(`id - ${cur.squadId}`, cur.left + cur.width + 10, cur.top + 34)
    q.fillText(`юнитов - ${cur.units.length}`, cur.left + cur.width + 10, cur.top + 56)

    q.lineWidth = 1;                       // Толщина линии
    q.beginPath();                         // Вызов метода рисования нового пути
    q.moveTo(cur.left + cur.width + 10,cur.top + 66)                        // От этой точки
    q.lineTo(cur.left + cur.width + 130,cur.top + 66)                        // Рисуем линию
    q.stroke();

    let unit = MyGame.curUnitInfo
    q.fillText(`${unit.name ?? "Юнит не выбран"}`, cur.left + cur.width + 10, cur.top + 86)
    q.fillText(`Здоровье - ${unit.health ?? 0}`, cur.left + cur.width + 10, cur.top + 110)
    q.fillText(`id - ${unit.id ?? 0}`, cur.left + cur.width + 10, cur.top + 134)
    q.fillText(`Player - ${MyGame.curPlayer}`, cur.left + cur.width + 10, cur.top + 158)


}

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

