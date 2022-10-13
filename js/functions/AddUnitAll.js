//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Заполнить отряд юнитами ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
import { addUnit } from "./addUnit.js";

export function addUnitAll(MyGame) {
  console.log('a')
  for (let i = 0; i <= MyGame.curSquadInfo.units.length; i++) {
    addUnit(MyGame.curSquadInfo, MyGame, 'Тестер');
  }
}