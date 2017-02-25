Function.prototype.inherits = function(parent) {
  let Surrogate = function() {};
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  // could also do: this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};

// function MovingObject() {}
//   MovingObject.prototype.move = function() {
//     console.log("can move");
//   };
//
//
// function Ship() {}
// Ship.inherits(MovingObject);
// Ship.prototype.fly = function(){
//   console.log("flies");
// };
//
//
//
// function Asteroid() {}
//   Asteroid.inherits(MovingObject);
//   Asteroid.prototype.anything = function() {
//     console.log("anything");
//   };
//
//
//
// let s = new Ship();
// let a = new Asteroid();
//
// a.move();
// s.move();
// s.fly();
// a.fly();
// s.anything();
