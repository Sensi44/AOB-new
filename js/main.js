//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Импорты ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
import { initialState, initialSquads } from "./classes/initState.js";
import { engine} from "./engine/mainCycle.js";
import { createSquad } from "./functions/createSquad.js";
import { addUnit } from "./functions/addUnit.js";
import { addUnitAll } from "./functions/AddUnitAll.js";
import { SquadListeners } from "./listeners/squadListeners.js";
import { OtherListeners } from "./listeners/otherListeners.js";
import { frameCount } from "./engine/fps.js";
import { hoplite, eliteHoplite} from "./classes/Greek_infantry.js";

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Основной модуль игры ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

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

// Инициализация лисинеров
new SquadListeners(canvas); // отряды
new OtherListeners(canvas); // общее

// Запуск цикла игры
engine(q, m, MyGame, squads, width, height, width2, height2);

// Временное ручное создание начальных отрядов
createSquad('reds', 15, 4, MyGame, squads, 1)
// addUnitAll(MyGame)
// addUnit(MyGame.curSquadInfo, MyGame, hoplite);

// addUnit(MyGame.curSquadInfo, MyGame, '6 - red');
createSquad('blues', 15, 4, MyGame, squads, 2)
// addUnitAll(MyGame)
// addUnit(MyGame.curSquadInfo, MyGame, eliteHoplite);

// addUnit(MyGame.curSquadInfo, MyGame, '5 - blue');
// addUnit(MyGame.curSquadInfo, MyGame, '6 - blue');

// addUnitAll(MyGame)
// createSquad('Victrix2', 6, 4, MyGame, squads)
// addUnit(MyGame.curSquadInfo, MyGame);

