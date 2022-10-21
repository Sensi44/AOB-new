import { render } from "../mainLogic/render.js";
import { update } from "../mainLogic/update.js";




export function engine(q, m, MyGame, units, width, height, width2, height2) {
  MyGame.start = main;

  function main(tFrame) {
    render(q, m, MyGame, units, width, height, width2, height2);
    update(tFrame, MyGame, units, width, height, units);
    MyGame.stopMain = window.requestAnimationFrame( main );
  }

  main(performance.now()); // Start the cycle
}
