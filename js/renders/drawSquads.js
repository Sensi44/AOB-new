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
        q.strokeRect(cur.left - 1, cur.top - 1, cur.width + 3, cur.height + 3);
        q.strokeStyle = "black";
        q.lineWidth = 2
      }


      if (squads[squad].player === 1) {
        // Основная рамка и фон
        q.fillStyle = "rgba(215,77,77,0.04)"
        q.fillRect(cur.left, cur.top, cur.width, cur.height);
        q.strokeRect(cur.left, cur.top, cur.width, cur.height);

        // Декоративный уголок
        q.strokeStyle = "black"
        q.lineWidth = 12;
        q.strokeStyle = "rgba(77,77,77,0.9)"
        q.beginPath();
        q.moveTo(cur.left - 12, cur.top + 3)
        q.lineTo(cur.left + 3,cur.top - 12)
        q.stroke();
        q.lineWidth = 2;

        // Рамка вокруг имени и имя
        q.fillStyle = "rgba(255,90,90,1)";
        if (cur.width <= 64) {
          q.strokeRect(cur.left, cur.top - 16, 64, 15)
          q.fillRect(cur.left, cur.top - 16, 64, 15);
        } else {
          q.fillRect(cur.left, cur.top - 16, 80, 15);
          q.strokeRect(cur.left, cur.top - 16, 80, 15)
        }

        // Название отряда
        q.fillStyle = "black"
        q.font = "13px Arial";
        q.fillText(`${squads[squad].name}`, cur.left + 7, cur.top - 3);

        // Число юнитов в отряде и рамочка для них
        q.fillStyle = "rgba(187,185,185,1)";
        q.fillRect(cur.left - 16, cur.top, 16, 16);
        q.strokeRect(cur.left - 16, cur.top, 16, 16);
        q.fillStyle = "black"
        if (cur.count - cur.deads < 10) {
          q.font = "14px arial";
          q.fillText(`${(cur.count - cur.deads) || 0}`, cur.left - 11, cur.top + 12.5);
        } else {
          q.font = "12px arial";
          q.fillText(`${(cur.count - cur.deads) || 0}`, cur.left -15, cur.top + 11.6);
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



      if (squads[squad].player === 2) {
        // Основная рамка и фон
        q.fillStyle = "rgba(77,77,215,0.04)"
        q.fillRect(cur.left, cur.top, cur.width, cur.height);
        q.strokeRect(cur.left, cur.top, cur.width, cur.height);

        // Декоративный уголок
        q.strokeStyle = "black"
        q.lineWidth = 12;
        q.strokeStyle = "rgba(77,77,77,0.9)"
        q.beginPath();
        q.moveTo(cur.left + cur.width - 4, cur.top + cur.height + 12)
        q.lineTo(cur.left + cur.width + 14,cur.top + cur.height - 3)
        q.stroke();
        q.lineWidth = 2;

        // Рамка вокруг имени и имя
        q.fillStyle = "rgba(90,90,255,1)";
        if (cur.width <= 64) {
          q.strokeRect(cur.left + cur.width - 64, cur.top + cur.height, 64, 15)
          q.fillRect(cur.left + cur.width - 64, cur.top + cur.height, 64, 15);
        } else {
          q.fillRect(cur.left + cur.width - 80, cur.top + cur.height, 80, 15);
          q.strokeRect(cur.left + cur.width - 80, cur.top + cur.height, 80, 15)
        }

        // Название отряда
        q.fillStyle = "black"
        q.font = "13px Arial";
        q.fillText(`${squads[squad].name}`, cur.left + cur.width - 60, cur.top + cur.height + 12);

        // Число юнитов в отряде и рамочка для них
        q.fillStyle = "rgba(187,185,185,1)";
        q.fillRect(cur.left + cur.width + 1, cur.top + cur.height - 32, 16, 16);
        q.strokeRect(cur.left + cur.width + 1, cur.top + cur.height - 32, 16, 16);
        q.fillStyle = "black"
        if (cur.count - cur.deads < 10) {
          q.font = "14px arial";
          q.fillText(`${(cur.count - cur.deads) || 0}`,
            cur.left + cur.width + 5, cur.top + cur.height - 19.4);
        } else {
          q.font = "12px arial";
          q.fillText(`${(cur.count - cur.deads) || 0}`,
            cur.left + cur.width + 2, cur.top + cur.height - 19.4);
        }

        // Номер бинда отряда
        q.fillStyle = "rgba(111,111,185,1)";
        q.fillRect(cur.left + cur.width + 1, cur.top + cur.height - 16, 16, 16);
        q.strokeRect(cur.left + cur.width + 1, cur.top + cur.height - 16, 16, 16);
        q.fillStyle = "black"
        if (cur.keyBind === '') {
          q.fillText(`x`, cur.left + cur.width + 5.5, cur.top + cur.height - 4);
        } else {
          q.fillText(`${cur.keyBind.slice(-1)}`,
            cur.left + cur.width + 5.5, cur.top + cur.height - 3);
        }
      }



      if (cur.headFlag === 'top') {
        q.strokeStyle = "rgba(255,11,11,1)"
        q.strokeRect(cur.left + cur.width / 2 - 3, cur.top - 2, 6, 6);
      }

      if (cur.headFlag === 'left') {
        q.strokeStyle = "rgba(255,11,11,1)"
        q.strokeRect(cur.left - 3, cur.top + cur.height / 2 - 3, 6, 6);
      }

      if (cur.headFlag === 'bot') {
        q.strokeStyle = "rgba(255,11,11,1)"
        q.strokeRect(cur.left + cur.width / 2 - 3, cur.top + cur.height - 2, 6, 6);
      }

      if (cur.headFlag === 'right') {
        q.strokeStyle = "rgba(255,11,11,1)"
        q.strokeRect(cur.left + cur.width - 3, cur.top + cur.height / 2 - 3, 6, 6);
      }

      q.strokeStyle = "rgba(77,77,77,0.9)"
      q.lineWidth = 2;






    }
  }
}