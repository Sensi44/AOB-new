export function hurtUnit(MyGame) {
  if (MyGame.curExUnit.health <= 0 ) return
  MyGame.curExUnit.health -= 7
  if (MyGame.curExUnit.health <= 0) MyGame.curExUnit.health = 0;
}