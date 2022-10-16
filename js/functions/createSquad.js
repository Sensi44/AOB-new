import { Squad } from "../classes/squad.js";

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Создать отряд ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
export function createSquad(name, sizeX, sizeY, MyGame, squads, curPlayer) {

  for (let squad in squads) {
    if (squads[squad].state === 0) {
      squads[squad] = new Squad(name, sizeX, sizeY, MyGame.squadId++, curPlayer);
      MyGame.curSquadInfo = squads[squad];

      squads[squad].left = MyGame.left - (squads[squad].width / 2) + 96;
      squads[squad].top = MyGame.top - (squads[squad].height / 2);
      squads[squad].previosLeft = MyGame.left - (squads[squad].width / 2) + 96;
      squads[squad].previosTop = MyGame.top - (squads[squad].height / 2);
      console.log(squads[squad])
      // squads[squad].units.length = 12;
      MyGame.left += squads[squad].width + 64;

      if (squads[squad].squadId === 100) {
        MyGame.left = 450;
        MyGame.top += squads[squad].height + 16;
      };

      if (squads[squad].squadId > 102) squads[squad].top = MyGame.top;

      break;
    }
  };



  if (!MyGame.canStart) MyGame.canStart = 1;
}