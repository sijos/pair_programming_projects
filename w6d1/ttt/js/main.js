const View = require('./ttt-view'); // require appropriate file
const Game = require('../solution/game'); // require appropriate file

$( () => {
  const game = new Game ();
  new View (game, $('figure.ttt'));
   // Your code here
});
