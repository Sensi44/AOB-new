export class Mountains {
  constructor() {
    this.rocks = [];
    this.allRocks = []
  }

  generate(width, height) { // Генерация новой горы
    width = 960
    let firstPoint = [Math.floor(Math.random() * width), Math.floor(Math.random() * (height / 2))];
    let leftoverWidth = firstPoint[0] % 32;
    let leftoverHeight = firstPoint[1] % 32;
    firstPoint = [firstPoint[0] - leftoverWidth, firstPoint[1] - leftoverHeight]
    if (firstPoint[0] < 100) firstPoint[0] = 96;
    if (firstPoint[1] > 600) firstPoint[1] = 608;

    this.rocks = [{left: firstPoint[0], top: firstPoint[1]}]

    let generateChance = 100;
    let currentPoint = firstPoint;
    let direction = '';

    while (generateChance > 0) {
      this.rocks.forEach(() => {
        if (moreMountains(generateChance)) {
          switch (direction) {
            case 'top':
              direction = getDirection(['top', 'right', 'left']);
              break;
            case 'right':
              direction = getDirection(['top', 'right', 'bot']);
              break;
            case 'bot':
              direction = getDirection(['right', 'bot' , 'left']);
              break;
            case 'left':
              direction = getDirection(['top', 'bot' , 'left']);
              break;
            case '':
              direction = getDirection(['top', 'right', 'bot' , 'left']);
              break;
          }

          let obj = {};
          switch (direction) {
            case 'top':
              let rand= rnd();
              obj.left = currentPoint[0];
              obj.top = currentPoint[1] - rand;
              currentPoint[1] = currentPoint[1] - rand;
              break;
            case 'right':
              let rand2 = rnd();
              obj.left = currentPoint[0] + rand2;
              obj.top = currentPoint[1];
              currentPoint[0] = currentPoint[0] + rand2;
              break;
            case 'bot':
              let rand3 = rnd();
              obj.left = currentPoint[0];
              obj.top = currentPoint[1] + rand3;
              currentPoint[1] = currentPoint[1] + rand3;
              break;
            case 'left':
              let rand4 = rnd();
              obj.left = currentPoint[0] - rand4;
              obj.top = currentPoint[1];
              currentPoint[0] = currentPoint[0] - rand4;
              break;
          }
          this.rocks.push(obj);
        }

      })
      generateChance -= 25;
    }

    this.allRocks.push(this.rocks);
  }
}

function moreMountains(mountHitChance) {
  return Math.random() < mountHitChance / 100;
}

function rnd() {
  let arr = [16, 32];
  return arr[Math.floor(Math.random() * 2)];
}

function getDirection(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}