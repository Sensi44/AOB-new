import {addUnit} from "./functions/addUnit.js";
window.addUnit = addUnit;

import {addUnitAll} from "./functions/addUnitAll.js";
window.addUnitAll = addUnitAll;

import {createSquad} from "./functions/createSquad.js";
window.createSquad = createSquad;

import {MyGame} from "./main.js";
window.MyGame = MyGame;

import {squads} from "./main.js";
window.squads = squads;

import {startEngine} from "./engine/controls.js";
window.startEngine = startEngine;

import {stopEngine} from "./engine/controls.js";
window.stopEngine = stopEngine;

let inputSquad1 = document.querySelector('.squadInput1');
let inputSquad2 = document.querySelector('.squadInput2');
let inputSquad3 = document.querySelector('.squadInput3');
window.inputSquad1 = inputSquad1;
window.inputSquad2 = inputSquad2;
window.inputSquad3 = inputSquad3;