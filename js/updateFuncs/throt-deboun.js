//▬▬▬▬▬▬▬▬▬▬▬▬▬ Debounce ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
export function debounce(fn, debounceTime) {
  let timer;

  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(()=> {
      console.log(`Работает`)
      fn.apply(this, args);

    }, debounceTime)
  }
};


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ throttle ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
export function throttle (fn, throttleTime) {
  let isThrottled = false;                  // flag true/false
  let savedArgs;                            // текущие аргументы вызова
  let savedThis;                            // текущий контекст вызова

  function wrapper() {                      // функция обёртка
    if (isThrottled) {                      // если флаг тру
      savedArgs = arguments;                // сохраняем аргументы
      savedThis = this;                     // сохраняем контекст вызова
      // console.log(`skip`)                // информируем когда пропускается итерация
      return;                               // выходим из функции ничего не делая
    }
    // console.log(savedArgs, savedThis )   // для себя и понимания, в данном случае аргументы будут пусты
    fn.apply(this, arguments);              // иначе, запускаем функцию с текущими
                                            // контекстом и аргументами
    isThrottled = true;                     // ставим флаг в тру, чтобы создать задержку
    // функция выполнилась, начало задержки, за счёт флага тру и сеттаймаута

    setTimeout(function() {         // запускаем разрешение на след. запуск по времени указанному в замыкании
      isThrottled = false;                 // время проходит, флаг снова фолсе, снова можно пустить один запуск
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);  // планируем новый запуск враппера
        savedArgs = savedThis = null;
      }
    }, throttleTime);
  }

  return wrapper;  // возвращаем обёртку
}
