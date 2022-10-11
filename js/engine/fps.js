//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Счётчик ФПС ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

export let frameCount = function _fc(timeStart){
  let now = performance.now();
  let duration = now - timeStart;

  if(duration < 1000){
    _fc.counter++;
  } else {

    _fc.fps = _fc.counter;
    _fc.counter = 0;
    timeStart = now;
    MyGame.fps.innerText = `${_fc.fps}`
  }
  requestAnimationFrame(() => frameCount(timeStart));
}

frameCount.counter = 0;
frameCount.fps = 0;
frameCount(performance.now());