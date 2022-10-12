import { countUnits, unitsDeaths } from "../updateFuncs/counts.js";
import { checkSides } from "../updateFuncs/checkSides.js";
import collisions from "../updateFuncs/collisions.js";

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Update состояний игры ▬▬▬▬▬▬▬▬▬▬▬▬▬
export function update(tFrame, MyGame, squads, width, height) {

    checkSides(MyGame, squads, width, height);  // Проверка столкновений с краями карты каррент и статик

    if (!MyGame.phase) {
        collisions(squads, MyGame.phase);  // Проверка столкновений у двух и более статиков
    }

    countUnits()      // Отрисовка кол-ва всех юнитов

    unitsDeaths();    // Проверка мёртвых, изменение счётчиков смертей

}











