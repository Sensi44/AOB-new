import { initialState } from "./classes/initState.js";
import { engine} from "./engine/mainCycle.js";
import { createSquad } from "./functions/createSquad.js";
import { addUnit } from "./functions/addUnit.js";
// import { coordsListener } from "./listeners/listeners.js";
import { Listeners } from "./listeners/listeners.js";

export let MyGame = initialState;
console.log(MyGame)

export let canvas = document.getElementById("canvas");
let q = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

let miniMap = document.getElementById("minimap");
let m = miniMap.getContext("2d");
let width2 = miniMap.width;
let height2 = miniMap.height;

export let squads = {squad1:  {state: 0},    squad2:  {state: 0},    squad3:  {state: 0},
  squad4:  {state: 0},    squad5:  {state: 0},    squad6:  {state: 0},
  squad7:  {state: 0},    squad8:  {state: 0},    squad9:  {state: 0},
  squad10: {state: 0},    squad11: {state: 0},    squad12: {state: 0},}

  engine(q, m, MyGame, squads, width, height, width2, height2);

new Listeners(canvas);

console.log(squads)
createSquad('Victrix', 8, 5, MyGame, squads)
addUnit(MyGame.curSquadInfo, MyGame);
createSquad('Victrix2', 6, 4, MyGame, squads)
addUnit(MyGame.curSquadInfo, MyGame);

