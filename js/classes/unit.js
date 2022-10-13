export class Unit{
  left = 0;
  top = 0;
  cost = 5;
  // Лефт и топ присваиваются во время создания юнита
  // в зависимости от позиции в отряде итд.
  // В целом, в конструкторе, они не нужны
  constructor(name, size, health, id, sizeX, sizeY) {
    // this.index = index;
    this.name = name;
    this.sizeX = sizeX ?? 1;
    this.sizeY = sizeY ?? 1;
    this.size = (this.sizeX * this.sizeY) || size;
    this.row = 1;
    this.pos = 1;
    this.health = health;
    this.id = id;
    this.dead = false;
  }
}