//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ липкое перемещение ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

// Автопозиционирование по клеткам, липкое перемещение
export function glueToField() {
  let cur = MyGame.curExUnit;
  let leftTemp = cur.left % 32;
  let topTemp = cur.top % 32;
  if (leftTemp >= 16 && leftTemp <= 31) cur.left = Math.round(cur.left += (31 - leftTemp));
  if (leftTemp < 16 && leftTemp >= 0) cur.left = Math.round(cur.left -= leftTemp);
  if (topTemp >= 16 && topTemp <= 31) cur.top = Math.round(cur.top += (31 - topTemp));
  if (topTemp < 16 && topTemp >= 0) cur.top = Math.round(cur.top -= topTemp);
}