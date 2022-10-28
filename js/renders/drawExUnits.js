//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Рисуем юнитов ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// import goplit from '../../img/goplit.png';

export function drawExUnits(q, MyGame, units) {

  q.strokeStyle = "black";

  for (let unit of units) {
    if (unit !== null) {
      q.lineWidth = 1.6;
      q.strokeRect(unit.left, unit.top, 96, 96);
      q.font = "13px Arial";
      q.fillText(`${unit.name}`, unit.left + 5, unit.top + 14);
      q.fillText(`${unit.unitClass}`, unit.left + 5, unit.top + 26);

      // Рамка красным если отряд выделен
      if (MyGame.curExUnit === unit) {
        q.lineWidth = 1.65
        q.strokeStyle = "rgba(200,25,25, 0.65)";
        q.strokeRect(unit.left - 2, unit.top - 2, unit.width + 4, unit.height + 4);
        q.strokeStyle = "black";
        q.lineWidth = 2
      }

      // Полоски хп
      let coefficient = 1.05;
      let health = (unit.health * coefficient).toFixed(2);
      health = +health
      if (health >= 67) {
        q.fillStyle = "#00C100";
        q.fillRect(unit.left + 1, unit.top + 89, health, 1);
        q.fillStyle = "#008300";
        q.fillRect(unit.left + 1, unit.top + 90, health, 4);
        q.fillStyle = "#005900";
        q.fillRect(unit.left + 1, unit.top + 94, health, 1);
      } else if (health >= 33 && health <= 67) {
        q.fillStyle = "#FFC300";
        q.fillRect(unit.left + 1, unit.top + 89, health, 1);
        q.fillStyle = "#FFC300";
        q.fillRect(unit.left + 1, unit.top + 90, health, 4);
        q.fillStyle = "#5A4400";
        q.fillRect(unit.left + 1, unit.top + 94, health, 1);
      } else if (health >= 0 && health <= 32) {
        q.fillStyle = "#F12400";
        q.fillRect(unit.left + 1, unit.top + 89, health, 1);
        q.fillStyle = "#F12400";
        q.fillRect(unit.left + 1, unit.top + 90, health, 4);
        q.fillStyle = "#5A0D00";
        q.fillRect(unit.left + 1, unit.top + 94, health, 1);
      }


    }
  }
}
