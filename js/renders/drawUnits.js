//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Рисуем юнитов ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

export function drawUnits(q, MyGame, squads) {
  q.fillStyle = "black";
  q.strokeStyle = "black";
  for (let squad in squads) {
    if (squads[squad].state === 1) {
      for (let unit of squads[squad].units) {
          if (unit !== undefined) {
            unit.left = (squads[squad].left + unit.pos * 32);
            unit.top = (squads[squad].top + unit.row * 32);

            q.strokeRect(unit.left,unit.top, 32, 32);
            if (unit.health === 0) {
              q.fillStyle = "Red"
              q.fillRect(unit.left, unit.top, 32, 32);
              q.fillStyle = "black"
            }
            if (unit.name === `Goplit`) {
              q.fillRect(unit.left + 6, unit.top + 6, 20, 20);
              q.fillRect(unit.left + 8, unit.top + 8, 16, 16);
            }

            if (unit.name === `1` || `2` || `3` || `4` || `5` || `6`) {
              q.fillRect(unit.left + 6, unit.top + 6, 20, 20);
              q.fillRect(unit.left + 8, unit.top + 8, 16, 16);
            }

            if (unit === MyGame.curUnitInfo) {
              q.strokeStyle = "green";
              q.lineWidth = 3;
              q.strokeRect(unit.left + 2, unit.top + 2, 28, 28);
              q.strokeStyle = "black";
              q.lineWidth = 1;
            }
          }
      }
    }
  }
}