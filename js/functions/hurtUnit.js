export function hurtUnit(MyGame) {
  if (MyGame.curUnitInfo.health <= 0 ) return
  MyGame.curUnitInfo.health -= 10
  if (MyGame.curUnitInfo.health <= 0) MyGame.curUnitInfo.health = 0;
}