//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Рисуем юнитов ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

export function drawUnits(q, MyGame, squads) {
  q.fillStyle = "black";
  q.strokeStyle = "black";
  for (let squad in squads) {
    if (squads[squad].state === 1) {
      for (let unit of squads[squad].units) {
          if (unit) {

            // Юнит мёртвый или нет, либо крест либо хп со всем остальным
            if (unit.health <= 0) {
              q.fillStyle = "pink"
              // q.fillRect(unit.left + 1.4, unit.top + 1.4, 29.2, 29.2);
              // q.fillRect(unit.left + 6, unit.top + 6, 20, 20);
              // q.fillRect(unit.left + 8, unit.top + 8, 16, 16);
              q.strokeStyle = "rgba(215,5,5,1)"
              q.beginPath();
              q.moveTo(unit.left + 5, unit.top + 5)
              q.lineTo(unit.left + 27,unit.top + 27)
              q.stroke();
              q.beginPath();
              q.moveTo(unit.left + 27, unit.top + 5)
              q.lineTo(unit.left + 5,unit.top + 27)
              q.stroke();
              q.lineWidth = 2;
              q.fillStyle = "black"
              q.strokeStyle = "black"
            } else {
              // Смотря какой юнит, разная отрисовка - добавляем сюда
              unit.left = (squads[squad].left + unit.pos * 32);
              unit.top = (squads[squad].top + unit.row * 32);
              q.strokeRect(unit.left,unit.top, 32, 32);

              if (unit.name) {
                q.fillRect(unit.left + 6, unit.top + 6, 20, 20);
                q.fillRect(unit.left + 8, unit.top + 8, 16, 16);
              }

              // Полоски хп
              q.fillStyle = "red";
              q.lineWidth = 2;
              q.fillRect(unit.left + 1, unit.top + 26, unit.health / 3.3, 5);
              q.fillStyle = "black";


              if (unit === MyGame.curUnitInfo) {
                q.fillStyle = "green";
                q.lineWidth = 1;
                q.fillRect(unit.left + 12, unit.top + 12, 8, 8);
                q.fillStyle = "black";
                q.strokeStyle = "black";
                q.lineWidth = 1;
              }
            }

          }
      }
    }
  }
}