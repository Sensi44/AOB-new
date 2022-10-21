export class Unit {
  // Общие вещи не нужные в конструкторе
  keyBind = '';
  previosTop = 0;
  previosLeft = 0;
  headFlag = 'top';
  width = 96;
  height = 96;

  constructor(name,
              id = 0,
              MyGame,
              {unitClass, health, attack, defense, hitChance, speed, distance, radius}
  ) {
    // Имя, айдишник и принадлежность к отряду
    this.name = `${name}-${id + 1}`;
    this.id = id;
    this.player = MyGame.curPlayer;

    // Координаты
    this.left = MyGame.left;
    this.top = MyGame.top;
    this.previosLeft = this.left;
    this.previosTop = this.top;

    // Боевые характеристики
    this.unitClass = unitClass;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.hitChance = hitChance;
    this.speed = speed;
    this.distance = distance;
    this.radius = radius;

    // Состояние жив/мёртв
    this.dead = false;
  }

  static deleteUnit(MyGame, unitsArr) {
    console.log('delete')

    unitsArr.forEach((unit, index) => {
      if (unit.id === MyGame.curExUnit.id) {
        unitsArr.splice(index, 1);
      }
    })
  }

  moveTop() {
    this.top -= 32;
    this.previosTop = this.top + 32
  }
  moveDown() {
    this.top += 32;
    this.previosTop = this.top - 32
  }
  moveLeft() {
    this.left -= 32;
    this.previosLeft = this.left + 32
  }
  moveRight() {
    this.left += 32;
    this.previosLeft = this.left - 32
  }


}