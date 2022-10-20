export class exUnit {
  left = 0;
  top = 0;

  constructor (
    name,
    id = 0,
    MyGame,
  ) {
    // Имя, айдишник и принадлежность к отряду
    this.name = `${name}-${id + 1}`;
    this.id = id;
    this.player = MyGame.curPlayer
    this.left = 100;
    this.top = 100;

    // Состояние жив/мёртв
    this.dead = false;
  }
}