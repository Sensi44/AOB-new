//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Рисуем отряды ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

export function drawSquads(q, MyGame, squads) {
  q.strokeStyle = "black";
  for (let squad in squads) {
    if (squads[squad].state === 1) {
      let cur = squads[squad];


      // Рамка красным если отряд выделен
      if (MyGame.curSquadInfo === cur) {
        q.lineWidth = 1.65
        q.strokeStyle = "rgba(255,11,11, 0.75)";
        q.strokeRect(cur.left - 2, cur.top - 2, cur.width + 3, cur.height + 3);
        q.strokeStyle = "black";
        q.lineWidth = 2
      }


      // Декоративные
      q.strokeStyle = "black"
      q.lineWidth = 12;
      q.strokeStyle = "rgba(77,77,77,0.9)"
      q.beginPath();
      q.moveTo(cur.left - 12, cur.top + 3)
      q.lineTo(cur.left + 3,cur.top - 12)
      q.stroke();
      q.lineWidth = 2;

      if (squads[squad].player === 1) {
        // Основная рамка и фон
        q.fillStyle = "rgba(255,77,77,0.14)"
        q.fillRect(cur.left, cur.top, cur.width, cur.height);
        q.strokeRect(cur.left, cur.top, cur.width, cur.height);

        // Рамка вокруг имени и имя
        q.fillStyle = "rgba(255,90,90,0.9)";
        if (cur.width <= 64) {
          q.strokeRect(cur.left, cur.top - 16, 64, 15)
          q.fillRect(cur.left, cur.top - 16, 64, 15);
        } else {
          q.fillRect(cur.left, cur.top - 16, 80, 15);
          q.strokeRect(cur.left, cur.top - 16, 80, 15)
        }
      }

      if (squads[squad].player === 2) {
        // Основная рамка и фон
        q.fillStyle = "rgba(77,77,255,0.14)"
        q.fillRect(cur.left, cur.top, cur.width, cur.height);
        q.strokeRect(cur.left, cur.top, cur.width, cur.height);

        // Рамка вокруг имени и имя
        q.fillStyle = "rgba(90,90,255,0.9)";
        if (cur.width <= 64) {
          q.strokeRect(cur.left, cur.top - 16, 64, 15)
          q.fillRect(cur.left, cur.top - 16, 64, 15);
        } else {
          q.fillRect(cur.left, cur.top - 16, 80, 15);
          q.strokeRect(cur.left, cur.top - 16, 80, 15)
        }
      }



      q.lineWidth = 2;

      q.fillStyle = "black"
      q.font = "13px Arial";
      q.fillText(`${squads[squad].name}`, cur.left + 7, cur.top - 3);

      // Число юнитов в отряде и рамочка для них
      q.fillStyle = "rgba(187,185,185,1)";
      q.fillRect(cur.left - 16, cur.top, 16, 16);
      q.strokeRect(cur.left - 16, cur.top, 16, 16);
      q.fillStyle = "black"
      if (cur.units.length - cur.deads < 10) {
        q.font = "14px arial";
        q.fillText(`${cur.units.length - cur.deads}`, cur.left - 11, cur.top + 12.5);
      } else {
        q.font = "11px arial";
        q.fillText(`${cur.units.length - cur.deads}`, cur.left -13.4, cur.top + 11.6);
      }

      // Номер бинда отряда
      q.fillStyle = "rgba(111,111,185,1)";
      q.fillRect(cur.left - 16, cur.top + 16, 16, 16);
      q.strokeRect(cur.left - 16, cur.top + 16, 16, 16);
      q.fillStyle = "black"
      if (cur.keyBind === '') {
        q.fillText(`x`, cur.left - 11, cur.top + 29);
      } else {
        q.fillText(`${cur.keyBind.slice(-1)}`, cur.left -11.6, cur.top + 29);
      }


    }
  }
}