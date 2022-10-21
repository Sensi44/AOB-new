//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Рисуем инфо при клике ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

export function drawUnitInfo(q, MyGame, ) {
  let cur = MyGame.curUnitInfo;
  // Сам квадрат
  q.fillStyle = "rgb(155,55,55)";
  q.fillRect(cur.left + cur.width + 10, cur.top - 10, 215, 200);
  q.strokeStyle = "rgb(0,0,0)";
  q.strokeRect(cur.left + cur.width + 10, cur.top - 10, 215, 200)

  // Подписи
  q.fillStyle   = "rgb(255,255,255)";
  q.font = "18.5px Arial"
  q.fillText(`${cur.name}`, cur.left + cur.width + 105, cur.top + 12)
  q.font = "13.5px Arial"

  q.lineWidth = 1;                                                              // Толщина линии
  q.beginPath();                                                                // Вызов метода рисования нового пути
  q.moveTo(cur.left + cur.width + 10,cur.top + 66)                         // От этой точки
  q.lineTo(cur.left + cur.width + 130,cur.top + 66)                        // Рисуем линию
  q.stroke();

  let unit = MyGame.curUnitInfo
  q.fillText(`${unit.name ?? "Юнит не выбран"}`, cur.left + cur.width + 10, cur.top + 86)
  q.fillText(`Здоровье - ${unit.health ?? 0}`, cur.left + cur.width + 10, cur.top + 110)
  q.fillText(`id - ${unit.id ?? 0}`, cur.left + cur.width + 10, cur.top + 134)
  q.fillText(`Player - ${MyGame.curPlayer}`, cur.left + cur.width + 10, cur.top + 158)
  q.fillStyle = "rgb(0,0,0)";
}