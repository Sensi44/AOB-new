//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Столкновение со стенами ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

export function checkSides(MyGame, squads, width, height) {
  let cur = MyGame.curSquadInfo;
  if ((cur.left + cur.width) > width - 14)  cur.left -= 4;
  if ((cur.top + cur.height) > height - 14) cur.top -= 4;
  if (cur.top <= 14)                    cur.top += 4;
  if (cur.left <= 14)                   cur.left += 4;

  for (let squad in squads) {
    if (squads[squad].state === 1 && squads[squad] !== cur) {
      if (squads[squad].left <= 0)           squads[squad].left = 16;
      if (squads[squad].top <= 0)            squads[squad].top = 16;
      if ((squads[squad].left + squads[squad].width) >= width) {
        squads[squad].left = width - squads[squad].width - 16;
      }
      if ((squads[squad].top + squads[squad].height) >= height) {
        squads[squad].top = height - squads[squad].height - 16;
      }
    }
  }
}