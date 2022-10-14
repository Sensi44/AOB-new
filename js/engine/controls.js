//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Старт/стоп игры ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

export function stopEngine() {
  MyGame.gameState = 0;
  window.cancelAnimationFrame( MyGame.stopMain );
}

export function startEngine() {
  if (!MyGame.gameState) {
    MyGame.start();
    MyGame.gameState = 1;
  }
}

export function changePhase() {
  MyGame.phase = !MyGame.phase;
  MyGame.fight = !MyGame.fight;
  let buttonPhase = document.querySelector('.switchphase');
  buttonPhase.innerHTML = (MyGame.phase) ? 'Game' : 'preparation';
}