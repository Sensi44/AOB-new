import { render } from "../mainLogic/render.js";
import { update } from "../mainLogic/update.js";




export function engine(q, m, MyGame, squads, width, height, width2, height2, units) {
  MyGame.start = main;

  function main(tFrame) {
    render(q, m, MyGame, squads, width, height, width2, height2, units);
    update(tFrame, MyGame, squads, width, height, units);
    MyGame.stopMain = window.requestAnimationFrame( main );
  }

  main(performance.now()); // Start the cycle
}
