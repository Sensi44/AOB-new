import { Squad } from "../classes/squad.js";

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Создать отряд ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
export function createSquad(name, sizeX, sizeY, MyGame, squads) {

  for (let squad in squads) {
    if (squads[squad].state === 0) {
      squads[squad] = new Squad(name, sizeX, sizeY, MyGame.squadId++, MyGame.curPlayer);
      MyGame.curSquadInfo = squads[squad];

      squads[squad].left = MyGame.left - (squads[squad].width / 2) + 96;
      squads[squad].top = MyGame.top - (squads[squad].height / 2);
      MyGame.left += squads[squad].width + 64;

      if (squads[squad].squadId === 102) {
        MyGame.left = 96;
        MyGame.top += squads[squad].height + 64;
      };

      if (squads[squad].squadId > 102) squads[squad].top = MyGame.top;

      break;
    }
  };



  if (!MyGame.canStart) MyGame.canStart = 1;
}