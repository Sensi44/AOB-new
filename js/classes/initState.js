//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Объект игры ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
export let initialState = {
    name: 'AgeOfBattles',
    gameState: 1,
    start: () => {},
    fps: document.body.querySelector('.fps'),
    canStart: 0,
    countUnitId: 0,         // текущий ID .ybnjd
    squadId: 100,           // текущий ID отрядов
    left: 192,              // для авт. подбора положения создания нового отряда
    top: 192,               // для авт. подбора положения создания нового отряда
    moveLeft: 0,            // для перетаскивания, временные координаты
    moveTop: 0,             // для перетаскивания, временные координаты
    showSquadInfo: 0,       // 0 или 1 показываем не показываем
    curSquadInfo: '',       // тек. выбранный отряд
    curUnitInfo: '',        // тек. выбранный юнит
    curPlayer: 1,
    // collision: 0, -  пока не понятно, вроде нигде не задействован
	deadCount: 0,           // общий счётчик смертей (у каждого отряда свой отдельный)
    border: {
        left: 0,
        top: 0,
    }
}

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Отряды ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

export let initialSquads = {
  squad1:  {state: 0},    squad2:  {state: 0},    squad3:  {state: 0},
  squad4:  {state: 0},    squad5:  {state: 0},    squad6:  {state: 0},
  squad7:  {state: 0},    squad8:  {state: 0},    squad9:  {state: 0},
  squad10: {state: 0},    squad11: {state: 0},    squad12: {state: 0},
}
