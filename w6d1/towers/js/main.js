const HanoiGame = require('./game');
const HanoiView = require('./hanoi-view');

$( () => {
  const game = new HanoiGame();
  new HanoiView(game, $('figure.hanoi'));
});
