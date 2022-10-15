import { addUnit } from "./functions/addUnit.js";
import { addUnitAll } from "./functions/addUnitAll.js";
import { deleteUnit } from "./functions/deleteUnit.js";
import { killUnit } from "./functions/killUnit.js";
import { hurtUnit } from "./functions/hurtUnit.js";
import { createSquad } from "./functions/createSquad.js";
import { startEngine, stopEngine, changePhase } from "./engine/controls.js";
import { Squad } from "./classes/squad.js";
import { hoplite, eliteHoplite} from "./classes/Greek_infantry.js";


let inputSquad1 = document.querySelector('.squadInput1');
let inputSquad2 = document.querySelector('.squadInput2');
let inputSquad3 = document.querySelector('.squadInput3');

import {MyGame} from "./main.js";
import {squads} from "./main.js";


window.addUnit = addUnit;
window.addUnitAll = addUnitAll;
window.hoplite = hoplite;
window.eliteHoplite = eliteHoplite;

window.deleteUnit = deleteUnit;
window.killUnit = killUnit;
window.hurtUnit = hurtUnit;
window.createSquad = createSquad;
window.startEngine = startEngine;
window.stopEngine = stopEngine;
window.changePhase = changePhase;
window.rotate = Squad.rotate;
window.inputSquad1 = inputSquad1;
window.inputSquad2 = inputSquad2;
window.inputSquad3 = inputSquad3;


window.MyGame = MyGame;
window.squads = squads;






