import { countUnits, unitsDeaths } from "../updateFuncs/counts.js";
import { checkSides } from "../updateFuncs/checkSides.js";
import collisions from "../updateFuncs/collisions.js";
import collisions2 from "../updateFuncs/collisionsGame.js";

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Update состояний игры ▬▬▬▬▬▬▬▬▬▬▬▬▬
export function update(tFrame, MyGame, squads, width, height) {

    checkSides(MyGame, squads, width, height);  // Проверка столкновений с краями карты каррент и статик
    collisions(squads, MyGame.phase);
    // if (!MyGame.phase) {
    //     collisions(squads, MyGame.phase);  // Проверка столкновений у двух и более статиков
    // } else {
    //     collisions2(squads, MyGame.phase);
    // }

    countUnits()      // Отрисовка кол-ва всех юнитов

    unitsDeaths();    // Проверка мёртвых, изменение счётчиков смертей

}











