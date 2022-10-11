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