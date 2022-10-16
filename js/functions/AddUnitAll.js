//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Заполнить отряд юнитами ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
import { addUnit } from "./addUnit.js";
import { hoplite, eliteHoplite } from "../classes/Greek_infantry.js";

let randomUnit = [hoplite, eliteHoplite]

export function addUnitAll(MyGame) {
  console.log('a')
  for (let i = 0; i <= MyGame.curSquadInfo.units.length; i++) {
    addUnit(MyGame.curSquadInfo, MyGame, randomUnit[Math.floor(Math.random() * 2)]);
  }
}