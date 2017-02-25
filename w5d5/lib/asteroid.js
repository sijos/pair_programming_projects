const Util = require("./utils");
const MovingObject = require("./moving_object");

const COLOR = "#00FF00";
const RADIUS = 4;

function Asteroid (pos) {
  Util.inherits(Asteroid, MovingObject);
  return new MovingObject ({
    color: COLOR,
    radius: RADIUS,
    pos: pos,
    vel: randomVec(4)
  });
}

// Return a randomly oriented vector with the given length.
function randomVec (length) {
  const deg = 2 * Math.PI * Math.random();
  return Util.scale([Math.sin(deg), Math.cos(deg)], length);
}
// Scale the length of a vector by the given amount.

// function scale (vec, m) {
//   return [vec[0] * m, vec[1] * m];
// }

module.exports = Asteroid;
