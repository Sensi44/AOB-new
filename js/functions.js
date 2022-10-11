//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Старт/стоп игры ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

function stopEngine() {
    MyGame.gameState = 0;
    window.cancelAnimationFrame( MyGame.stopMain );
}

function startEngine() {
    if (!MyGame.gameState) {
        MyGame.start();
        MyGame.gameState = 1;
    }
}

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Счётчик ФПС ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

const output = document.querySelector("#output");

let frameCount = function _fc(timeStart){
    let now = performance.now();
    let duration = now - timeStart;

    if(duration < 1000){
        _fc.counter++;
    } else {

        _fc.fps = _fc.counter;
        _fc.counter = 0;
        timeStart = now;
        MyGame.fps.innerText = `${_fc.fps}`
    }
    requestAnimationFrame(() => frameCount(timeStart));
} // счётчик фпс
frameCount.counter = 0;
frameCount.fps = 0;
frameCount(performance.now());


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Добавить юнита в отряд ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

// Заполнить юнитами
function addUnitAll() {
    for (let i = 0; i <= MyGame.curSquadInfo.units.length; i++) {
        addUnit(MyGame.curSquadInfo);
    }
}

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Debounce ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

function debounce(fn, debounceTime) {
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

function throttle (fn, throttleTime) {
    let isThrottled = false;                 // flag true/false
    let savedArgs;                           // текущие аргументы вызова
    let savedThis;                           // текущий контекст вызова


    function wrapper() {                     // функция обёртка

        if (isThrottled) {                   // если флаг тру
            savedArgs = arguments;           // сохраняем аргументы
            savedThis = this;                // сохраняем контекст вызова
            // console.log(`skip`)              // информируем когда пропускается итерация
            return;                          // выходим из функции ничего не делая
        }
        // console.log(savedArgs, savedThis )   // для себя и понимания, в данном случае аргументы будут пусты
        fn.apply(this, arguments);           // иначе, запускаем функцию с текущими
                                             // контекстом и аргументами

        isThrottled = true;                  // ставим флаг в тру, чтобы создать задержку

        // функция выполнилась, начало задержки, за счёт флага тру и сеттаймаута

        setTimeout(function() {       // запускаем разрешение на след. запуск по времени указанному в замыкании
            isThrottled = false;             // время проходит, флаг снова фолсе, снова можно пустить один запуск
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);  // планируем новый запуск враппера
                savedArgs = savedThis = null;
            }

        }, throttleTime);

    }

    return wrapper;  // возвращаем обёртку
}

function collisions() {}
collisions = throttle(checkCollisionAll, 48)

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Блокировка выхода за края ▬▬▬▬▬▬▬▬▬▬▬▬▬▬

// Старое, можно наверное удалить
function correctPosition() {
    let cur = MyGame.curSquadInfo;
    if ((cur.left + cur.width) >= width) cur.left = width - cur.width;
    if ((cur.left) <= 0) cur.left = 0;
    if ((cur.top + cur.height) >= height) cur.top = height - cur.height;
    if (cur.top <= 0) cur.top = 0;
}


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ checkCollisionAll ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

// Составление пар отрядов для проверки их по функции столкновения (checkCollision)

function checkCollisionAll() {
    // Проходимся по всем активным отрядам кроме выбранного
    for (let squad in squads) {
        if (squads[squad].state === 1) {
            //if (squads[squad] === MyGame.curSquadInfo) continue;
            let cur = squads[squad];

            // Проходимся по всем активным отрядам кроме  предыдущего
            // Получаем все возможные варианты пар отрядов, для которых вызываем основную логическую функцию
            for (let sq in squads) {
                if (squads[sq].state === 1 && squads[sq] !== squads[squad]) {
                    //if (squads[sq] === MyGame.curSquadInfo) continue;
                    let cur2 = squads[sq];

                    // if ((cur2.left + cur2.width > cur.left) && cur2.left < cur.left) {
                    //     cur.left += 16;
                    //     cur2.left -= 16;
                    // }
                    checkCollision(cur, cur2)
                }
            }
        }
    }
}

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ checkCollision ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

function checkCollision(first, second = MyGame.curSquadInfo) {
    let cur = first;
    let sec = second;
    let left = sec.left;
    let top = sec.top;
    let right = sec.left + sec.width;
    let bottom = sec.top + sec.height;

    let curLeft = cur.left;
    let curTop = cur.top;
    let curRight = cur.left + cur.width;
    let curBottom = cur.top + cur.height;

    // Если выбранный отряд со всех сторон больше статичного) (статик внутри выбранного)
    if ( (curLeft <= left && curRight >= right) &&
        (curTop <= top && curBottom >= bottom) ) {
        if (width - curRight < curLeft) {
            cur.left -= 16;
        }
        if (width - curRight > curLeft) {
            cur.left += 16;
        }
        console.log(`Один внутри другого`)
    }

    // Если выбранный отряд со всех сторон меньше статичного (выбранный внутри статика)
    if (  (curLeft >= left && curRight <= right) && (curTop >= top && curBottom <= bottom)) {
        cur.left += 16;
    }
    // Если пересеклись 2 длинных отряда - 1
    if ( (curLeft < left && curRight > right) && (top < curTop && bottom > curBottom) ) {
        cur.left += 16;
    }
    // Если пересеклись 2 длинных отряда - 2
    if ( (curTop < top && curBottom > bottom) && (curLeft > left && curRight < right) ) {
        cur.left += 16;
    }


    // Правый нижний угол
    if ( ((right + 16) > curLeft && left < curLeft) && (top <= curTop && bottom >= curTop) ) {
        cur.left += 16;
        sec.left -= 16;
        console.log(`Правый нижний угол`)
    };
    //  Правый верхний угол
    if ( ((right + 16)> curLeft && left < curLeft) && (bottom >= curBottom && top <= curBottom )) {
        cur.left += 16;
        sec.left -= 16;
        console.log(`Правый верхний угол`)
    }
    // Левый нижний
    if ( ((left - 16) < curRight && right > curRight) && (top <= curTop && bottom >= curTop) ) {
        cur.left -= 16;
        sec.left += 16;
        console.log(`Левый нижний`)
    };
    // Левый верхний
    if ( ((left - 16)< curRight && right > curRight) && (bottom >= curBottom && top <= curBottom) ) {
        cur.left -= 16;
        sec.left += 16;
        console.log(`Левый верхний`)
    };


    // Только боковые вхождения когда текущий отряд больше статичного
    // Заход справа
    if ((curLeft <= right && left <= curLeft) && (top >= curTop && bottom <= curBottom)) {
        console.log(`right`);
        sec.left -= 16;
        cur.left += 16;
    }
    // Заход слева
    if ((curRight >= left && curRight <= right) && (top >= curTop && bottom <= curBottom)) {
        console.log(`left`);
        sec.left += 16;
        cur.left -= 16;
    }
    // Заход сверху
    if ((top <= curBottom && bottom >= curBottom) && (left >= curLeft && right <= curRight)) {
        console.log(`top`);
        sec.top += 16;
        cur.top -= 16;
    }
    // Заход снизу
    if ((bottom >= curTop && top <= curTop) && (left >= curLeft && right <= curRight)) {
        console.log(`top`);
        sec.top -= 16;
        cur.top += 16;
    }


    // Только боковые вхождения когда текущий отряд меньше статичного
    // Заход справа
    if ((curLeft <= right && left <= curLeft) && (top <= curTop && bottom >= curBottom)) {
        console.log(`right 2`);
        sec.left -= 16;
        cur.left -= 16;
    }
    // Заход слева
    if ((curRight >= left && curRight <= right) && (top <= curTop && bottom >= curBottom)) {
        console.log(`left 2`);
        sec.left += 16;
        cur.left += 16;
    }
    // Заход сверху
    if ((top <= curBottom && bottom >= curBottom) && (left <= curLeft && right >= curRight)) {
        console.log(`top 2`);
        sec.top += 16;
        cur.top -= 16;
    }
    // Заход снизу
    if ((bottom >= curTop && top <= curTop) && (left <= curLeft && right >= curRight)) {
        console.log(`top 2`);
        sec.top -= 16;
        cur.top += 16;
    }
}

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Столкновение со стенами ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

function checkSides() {
    let cur = MyGame.curSquadInfo;
    if ((cur.left + cur.width) > width - 14)  cur.left -= 4;
    if ((cur.top + cur.height) > height - 14) cur.top -= 4;
    if (cur.top <= 14)                    cur.top += 4;
    if (cur.left <= 14)                   cur.left += 4;

    for (let squad in squads) {
        if (squads[squad].state === 1 && squads[squad] !== cur) {
            if (squads[squad].left <= 0)           squads[squad].left = 16;
            if (squads[squad].top <= 0)            squads[squad].top = 16;
            if ((squads[squad].left + squads[squad].width) >= width) {
                squads[squad].left = width - squads[squad].width - 16;
            }
            if ((squads[squad].top + squads[squad].height) >= height) {
                squads[squad].top = height - squads[squad].height - 16;
            }
        }
    }
}

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Подсчёт умирающих ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

function unitsDeaths() {
    for (let squad in squads) {
        if (squads[squad].state === 1) {
            let count = MyGame.deadCount;

            for (let unit of squads[squad].units) {
                if (unit.health === 0 && unit.dead === false) {
                    unit.dead = true;
                    MyGame.deadCount++;
                    squads[squad].deads++;
                    console.log(MyGame.deadCount, squads[squad].deads);
                }
            }
        }
    }
}

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Вывод общего числа юнитов ▬▬▬▬▬▬▬▬▬▬▬▬

function countUnits() {
    count.innerText = MyGame.countUnitId;
}

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬


