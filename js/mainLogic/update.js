import { countUnits, unitsDeaths } from "../updateFuncs/counts.js";
import { checkSides } from "../updateFuncs/checkSides.js";
import { throttle } from "../updateFuncs/throt-deboun.js";
import collisions from "../updateFuncs/collisions.js";
import fight from "../updateFuncs/fight.js"

const equalsCount = throttle(countUnits, 1200);

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Update состояний игры ▬▬▬▬▬▬▬▬▬▬▬▬▬
export function update(tFrame, MyGame, units, width, height) {
    // checkSides(MyGame, squads, width, height);  // Проверка столкновений с краями карты каррент и статик
    // (!MyGame.fight) ? collisions(squads, MyGame.phase) : null;           // Проверка столкновений между всеми отрядами
    // equalsCount()                               // Показ счётчика текущих единиц юнитов
    // unitsDeaths();                              // Проверка мёртвых, изменение счётчиков смертей
    // (MyGame.phase) ? fight(MyGame, squads) : null;
}











