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
      q.fillText(`${unit.unitClass}`, unit.left + 5, unit.top + 25);

      // Рамка красным если отряд выделен
      if (MyGame.curExUnit === unit) {
        q.lineWidth = 1.65
        q.strokeStyle = "rgba(200,25,25, 0.65)";
        q.strokeRect(unit.left - 2, unit.top - 2, unit.width + 4, unit.height + 4);
        q.strokeStyle = "black";
        q.lineWidth = 2
      }

    }
  }
}
