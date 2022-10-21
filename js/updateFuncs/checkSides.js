//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Столкновение со стенами ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

export function checkSides(MyGame, units, width, height) {
  let cur = MyGame.curExUnit;
  if ((cur.left + cur.width) > width - 14)  cur.left -= 4;
  if ((cur.top + cur.height) > height - 14) cur.top -= 4;
  if (cur.top <= 14)                        cur.top += 4;
  if (cur.left <= 14)                       cur.left += 4;

  for (let unit of units) {
    if (unit.name && unit.id !== cur.id) {
      if (unit.left <= 0) unit.left = 16;
      if (unit.top <= 0) unit.top = 16;
      if ((unit.left + unit.width) >= width) {
        unit.left = width - unit.width - 16;
      }
      if ((unit.top + unit.height) >= height) {
        unit.top = height - unit.height - 16;
      }
    }
  }
}