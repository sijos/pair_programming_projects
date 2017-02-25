const Asteroid = require("./asteroid");

const DIM_X = 200;
const DIM_Y = 140;
const NUM_ASTEROIDS = 5;

function Game() {
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function() {

  for( let i = 0; i < NUM_ASTEROIDS; i++ ) {
    this.asteroids.push(new Asteroid(this.randomPosition));
  }
};

Game.prototype.randomPosition = function() {
  let dx = getRandomInt(1, DIM_X);
  let dy = getRandomInt(1, DIM_Y);
  return { pos: [dx, dy]} ;
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, DIM_X, DIM_Y);
  this.asteroids.forEach((astr) => astr.draw(ctx) );
};

Game.prototype.moveObjects = function() {
  this.asteroids.forEach((astr) => astr.move );
};
