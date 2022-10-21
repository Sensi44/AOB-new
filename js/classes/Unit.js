export class Unit {
  left = 0;
  top = 0;

  constructor(name,
              id = 0,
              MyGame,
              {unitClass, health, attack, defense, hitChance, speed}
  ) {
    // Имя, айдишник и принадлежность к отряду
    this.name = `${name}-${id + 1}`;
    this.id = id;
    this.player = MyGame.curPlayer;

    // Координаты
    this.left = MyGame.left;
    this.top = MyGame.top;

    // Боевые характеристики
    this.unitClass = unitClass;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.hitChance = hitChance;
    this.speed = speed;

    // Состояние жив/мёртв
    this.dead = false;
  }
}