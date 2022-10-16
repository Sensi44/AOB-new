//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Рисуем юнитов ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// import goplit from '../../img/goplit.png';

export function drawUnits(q, MyGame, squads, goplit, eliteHoplit, eliteHoplit2) {
  q.fillStyle = "black";
  q.strokeStyle = "black";
  for (let squad in squads) {
    if (squads[squad].state === 1) {
      for (let unit of squads[squad].units) {
          if (unit !== undefined && unit != null) {
            let coefficient = 1;

            if (unit.name.includes('hoplit')) {
              coefficient = 1.25;
              q.drawImage(goplit,
                squads[squad].left + unit.pos * 32,
                squads[squad].top + unit.row * 32,
                32, 32);
            } else if (unit.name.includes('eliteHoplit')) {
              coefficient = 1;
              q.drawImage(eliteHoplit,
                squads[squad].left + unit.pos * 32,
                squads[squad].top + unit.row * 32,
                32, 32);
            } else {
              if (unit.health > 0) {
                if (unit.name) {
                  q.fillRect(unit.left + 6, unit.top + 6, 20, 20);
                  q.fillRect(unit.left + 8, unit.top + 8, 16, 16);
                }
                q.fillStyle = "red";
                q.lineWidth = 2;
                q.fillRect(unit.left + 2, unit.top + 28, unit.health * coefficient / 3.2, 3);
                q.fillStyle = "black";
              }
            }



            // Юнит мёртвый или нет, либо крест либо хп со всем остальным
            if (unit.health <= 0) {
              q.fillStyle = "pink"
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
            }

            // Рамки
            unit.left = (squads[squad].left + unit.pos * 32);
            unit.top = (squads[squad].top + unit.row * 32);
            q.lineWidth = 1.6;
            q.strokeRect(unit.left, unit.top, 32, 32);
            q.lineWidth = 2;




            // Полоски хп

            // Полоски хп

            q.fillStyle = "red";
            q.lineWidth = 2;
            q.fillRect(unit.left + 2, unit.top + 28, unit.health * coefficient / 3.2, 3);
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