// Библиотека Vi
// Моя библиотека функций


export let $2 = {
  // Возведение в степень
  pow(x, y) {
    console.log(x ** y);
    return x ** y;
  },

  // Рандомное число от 1 до этого числа
  getRandomNumber(numb) {
    let result = Number(numb);

    if (result > 0) {
      console.log(Math.floor(Math.random() * result + 1));
      return Math.floor(Math.random() * result + 1);
    } else if (result < 0) {
      console.log(Math.floor(Math.random() * (result)));
      return Math.floor(Math.random() * (result));
    } else {
      return alert('Ошибка, вы ввели не число либо иное');
    }
  },


  // Рандомное число из диапазона (работает с отрицательными числами
  // и любыми верхними и нижними границами
  getRandomNumberDiapason(x, y) {
    let resultX = Number(x);
    let resultY = Number(y);

    if (resultX < resultY) {
      console.log(Math.floor(Math.random() * (resultY - resultX + 1) + resultX));
      return Math.floor(Math.random() * (resultY - resultX + 1) + resultX);

    } else if (resultX > resultY) {
      console.log(Math.floor(Math.random() * (resultX + -(resultY) + 1) + resultY));
      return Math.floor(Math.random() * (resultX + -(resultY) + 1) + resultY);

    } else {
      return alert('Ошибка, вы ввели не число либо иное');
    }
  },


  // Возвращает объект координат объекта RECT (выбранного элемента страницы)
  getCoords(elem /*nodeElem*/) {
    let box = elem.getBoundingClientRect();
    return {
      top: (box.top + window.pageYOffset).toFixed(0),
      bottom: (box.bottom + window.pageYOffset).toFixed(0),
      right: (box.right + window.pageXOffset).toFixed(0),
      left: (box.left + window.pageXOffset).toFixed(0),
    }
  },



  //
}














