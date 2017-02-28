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
