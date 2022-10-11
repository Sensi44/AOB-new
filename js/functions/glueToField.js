//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ липкое перемещение ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

// Автопозиционирование по клеткам, липкое перемещение
export function glueToField() {
  let cur = MyGame.curSquadInfo;
  let leftTemp = cur.left % 16;
  let topTemp = cur.top % 16;
  if (leftTemp >= 8 && leftTemp <= 15) cur.left = Math.round(cur.left += (16 - leftTemp));
  if (leftTemp < 8 && leftTemp >= 0) cur.left = Math.round(cur.left -= leftTemp);
  if (topTemp >= 8 && topTemp <= 15) cur.top = Math.round(cur.top += (16 - topTemp));
  if (topTemp < 8 && topTemp >= 0) cur.top = Math.round(cur.top -= topTemp);
}