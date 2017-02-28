const Game = require("./game");
const GameView = require("./game_view");


document.addEventListener("DOMContentLoaded", function() {
  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext('2d');
  let game = new Game();
  new GameView(game, ctx).start();
});
