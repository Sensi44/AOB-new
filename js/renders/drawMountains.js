export function drawMountains(q, rocks, mountains) {
  q.fillStyle = "brown";
  q.strokeStyle = "brown";

  rocks.forEach((rock) => {
    rock.forEach((rock2) => {
      q.drawImage(mountains,
        rock2.left,
        rock2.top,
        32, 32);
    })
  })
}