export class Unit{
  // Лефт и топ присваиваются во время создания юнита в зависимости от позиции в отряде итд.
  // В целом, в конструкторе, они не нужны
  left = 0;
  top = 0;

  constructor(
    {name, size, health, sizeX, sizeY, attack, defense, hitChance, cost},
    id = 0,
    squadName,
  ) {
    // Имя, айдишник и принадлежность к отряду
    this.name = `${name}-${id + 1}`;
    this.id = id;
    this.squadName = squadName;

    // Размеры в ячейках, как правило 1х1
    this.sizeX = sizeX ?? 1;
    this.sizeY = sizeY ?? 1;
    this.size = (this.sizeX * this.sizeY) || size;

    // позиция внутри отряда
    this.row = 1;
    this.pos = 1;

    // цена и всё что с ней связано
    this.cost = cost;

    // Боевые характеристики
    this.health = health;
    this.attack = attack,
    this.defense = defense,
    this.hitChance = hitChance,

    // Состояние жив/мёртв
    this.dead = false;
  }
}