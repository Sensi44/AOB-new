//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Рисуем юнитов ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// import goplit from '../../img/goplit.png';

export function drawExUnits(q, MyGame, units) {

  q.strokeStyle = "black";

  for (let unit of units) {
    if (unit !== null) {
      q.lineWidth = 1.6;
      q.strokeRect(unit.left, unit.top, 96, 96);


    }
  }
}
