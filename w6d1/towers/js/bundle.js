/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const HanoiGame = __webpack_require__(1);
	const HanoiView = __webpack_require__(2);

	$( () => {
	  const game = new HanoiGame();
	  new HanoiView(game, $('figure.hanoi'));
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Game {
	  constructor() {
	    this.towers = [[3, 2, 1], [], []];
	  }

	  isValidMove(startTowerIdx, endTowerIdx) {
	      const startTower = this.towers[startTowerIdx];
	      const endTower = this.towers[endTowerIdx];

	      if (startTower.length === 0) {
	        return false;
	      } else if (endTower.length == 0) {
	        return true;
	      } else {
	        const topStartDisc = startTower[startTower.length - 1];
	        const topEndDisc = endTower[endTower.length - 1];
	        return topStartDisc < topEndDisc;
	      }
	  }

	  isWon() {
	      // move all the discs to the last or second tower
	      return (this.towers[2].length == 3) || (this.towers[1].length == 3);
	  }

	  move(startTowerIdx, endTowerIdx) {
	      if (this.isValidMove(startTowerIdx, endTowerIdx)) {
	        this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
	        return true;
	      } else {
	        return false;
	      }
	  }

	  print() {
	      console.log(JSON.stringify(this.towers));
	  }

	  promptMove(reader, callback) {
	      this.print();
	      reader.question("Enter a starting tower: ", start => {
	        const startTowerIdx = parseInt(start);
	        reader.question("Enter an ending tower: ", end => {
	          const endTowerIdx = parseInt(end);
	          callback(startTowerIdx, endTowerIdx)
	        });
	      });
	  }

	  run(reader, gameCompletionCallback) {
	      this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
	        if (!this.move(startTowerIdx, endTowerIdx)) {
	          console.log("Invalid move!");
	        }

	        if (!this.isWon()) {
	          // Continue to play!
	          this.run(reader, gameCompletionCallback);
	        } else {
	          this.print();
	          console.log("You win!");
	          gameCompletionCallback();
	        }
	      });
	  }
	}

	module.exports = Game;


/***/ },
/* 2 */
/***/ function(module, exports) {

	class HanoiView {
	  constructor(game, $el) {
	    this.game = game;
	    this.$el = $el;
	    this.clicks = [];
	    this.setupTowers();
	    this.bindEvents();
	  }

	  setupTowers() {
	    for (var i = 0; i < 3; i++) {
	      this.$el.append('<ul></ul>');
	    }
	    this.render();

	    // for (var i = 0; i < 3; i++) {
	    //   $('ul').eq(0).append('<li></li>');
	    //   const size = 40 * (i + 1);
	    //   $('li').eq(i).css('width', size);
	    // }

	    $('ul').addClass('col');
	  }

	  render() {
	    $('li').remove();
	    this.game.towers.forEach( (tower, idx) => {
	      for (var i = tower.length - 1; i >= 0; i--) {
	        $('ul').eq(idx).append('<li></li>');
	        if (tower[i] === 3) {
	          $('li').last().addClass('third');
	        } else if (tower[i] === 2) {
	          $('li').last().addClass('second');
	        } else {
	          $('li').last().addClass('first');
	        }
	      }
	    });

	    console.log(this.clicks);
	    if (this.clicks.length > 0) {
	      $('ul').eq(this.clicks[0]).addClass('clicked');
	    }


	    if (this.game.isWon()) {
	      alert("you win!");
	    }
	  }

	  bindEvents() {
	    $('ul').click( e => {
	      const $tow = $(e.currentTarget);
	      const idx = parseInt($tow.index());
	      this.clicks.push(idx);
	      this.makeMove();
	    });
	  }

	  makeMove() {
	    if (this.clicks.length === 2) {
	      this.game.move(this.clicks[0], this.clicks[1]);
	      $('ul').removeClass('clicked');
	      this.clicks = [];
	    }
	    this.render();

	  }

	}

	module.exports = HanoiView;


/***/ }
/******/ ]);