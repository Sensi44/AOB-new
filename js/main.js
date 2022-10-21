//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Импорты ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
import { initialState, initialSquads, initialUnits } from "./classes/initState.js";
import { engine} from "./engine/mainCycle.js";
import { createSquad } from "./functions/createSquad.js";
import { addUnit } from "./functions/addUnit.js";
import { UnitListeners } from "./listeners/unitListeners.js";
import { OtherListeners } from "./listeners/otherListeners.js";
import { frameCount } from "./engine/fps.js";
import { warrior, ranger } from "./classes/unitBuilds.js";

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Основной модуль игры ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
console.log('moba')
// Инициализация канваса поля и миникарты
export let canvas = document.getElementById("canvas");
export let q = canvas.getContext("2d");
export let width = canvas.width;
export let height = canvas.height;
let miniMap = document.getElementById("minimap");
let m = miniMap.getContext("2d");
let width2 = miniMap.width, height2 = miniMap.height;


// Инициализация состояния игры
export let MyGame = initialState;
export let squads = initialSquads;
export let unitsArr = initialUnits;


// Инициализация лисинеров
new UnitListeners(canvas); // Юниты - обработчики событий
new OtherListeners(canvas); // Разное общее - обработчики событий


// Запуск цикла игры
engine(q, m, MyGame, unitsArr, width, height, width2, height2);


// Временное ручное создание начальных отрядов
addUnit('Jonathan', unitsArr, MyGame, warrior);
addUnit('Ronal', unitsArr, MyGame, ranger);
console.log(unitsArr)


