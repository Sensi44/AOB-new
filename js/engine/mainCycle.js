import { render } from "../mainLogic/render.js";
import { update } from "../mainLogic/update.js";




export function engine(q, m, MyGame, squads, width, height, width2, height2, rocks) {
  MyGame.start = main;

  function main(tFrame) {
    render(q, m, MyGame, squads, width, height, width2, height2, rocks);
    update(tFrame, MyGame, squads, width, height);

    MyGame.stopMain = window.requestAnimationFrame( main );
  }

  main(performance.now()); // Start the cycle
}
