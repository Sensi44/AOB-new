//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Рисуем отряды на минимапе ▬▬▬▬▬▬▬▬▬▬▬▬▬▬

export function drawMini(m, squads, width2) {
  for (let squad in squads) {
    if (squads[squad].state === 1) {
      let cur = squads[squad];

      if (squads[squad].player === 1) {
        m.fillStyle = "rgba(255,90,90,0.9)";
      } else {
        m.fillStyle = "rgba(90,90,255,0.9)";
      }

      m.fillRect(cur.left / 7.1 , cur.top / 7.1, cur.width /  7.1, cur.height / 7.1);


      // Отрисовка текущего положения
      let y = pageYOffset;
      m.lineWidth = 0.7;
      m.strokeStyle = "rgba(210,120,80, 0.95)"
      m.strokeRect(0.3, y / 7.1, width2 - 0.6, (window.innerHeight / 7.1) - 3 );
      m.lineWidth = 1;
    }
  }
}