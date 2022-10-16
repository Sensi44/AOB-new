export function displacementOfTheDead(squad) {
  if ( squad.player === 1) {
    for (let i = squad.row; i >= 0; i--) {
      let count = 0;
      let tempUnits = squad.units.slice(squad.sizeX * i, squad.sizeX * (i + 1));

      for (let unit of tempUnits) {
        count++;
        if (unit?.health === 0) {
          let prevRowUnits = squad.units.slice(squad.sizeX * (i - 1), squad.sizeX * (i - 2));
          squad.units[squad.sizeX * i + count - 1] = (prevRowUnits[count - 1])
            ? prevRowUnits[count - 1]
            : unit;

          if (squad.units[squad.sizeX * i + count - 1].health > 0) {
            console.log(squad.sizeX, i, count)
            squad.units[squad.sizeX * i + count - 1].pos = squad.sizeX * i + count - 1 - squad.sizeX;
            squad.units[squad.sizeX * i + count - 1].row = i;
            squad.units[squad.sizeX * (i - 1) + count - 1] = null
          }
        }
      }
    }
  }



  if ( squad.player === 2) {
    for (let i = 0; i <= squad.row; i++) {
      let count = 0;
      let tempUnits = squad.units.slice(squad.sizeX * i, squad.sizeX * (i + 1));

      for (let unit of tempUnits) {
        count++;
        if (unit?.health === 0) {
          let prevRowUnits = squad.units.slice(squad.sizeX * (i + 1), squad.sizeX * (i + 2));
          squad.units[squad.sizeX * i + count - 1] = (prevRowUnits[count - 1])
            ? prevRowUnits[count - 1]
            : unit;

          if (squad.units[squad.sizeX * i + count - 1].health > 0) {
            squad.units[squad.sizeX * i + count - 1].pos = squad.sizeX * i + count - 1
            squad.units[squad.sizeX * i + count - 1].row = i;
            squad.units[squad.sizeX * (i + 1) + count - 1] = null

          }
        }
      }
    }
  }
}