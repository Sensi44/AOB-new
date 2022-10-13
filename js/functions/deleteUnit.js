export function deleteUnit(squadName, MyGame) {
    let count = 0;
    for (let unit of squadName.units) {
        count++;
        if ( unit === MyGame.curUnitInfo) {
          squadName.units[count - 1] = null;
        }
    }

}
