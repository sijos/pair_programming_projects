class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('li').click(e => {
      const $sq = $(e.currentTarget);
      const strPos = $sq.attr("pos");
      const pos = strPos.split(',').map((el) => {return parseInt(el);});
      this.game.playMove(pos);
      if (this.game.board.isEmptyPos(pos)) {
        alert("invalid move!");
      }
      this.makeMove($sq);
    });
  }

  makeMove($square) {
    $square.text(this.game.currentPlayer);
    $square.removeClass("empty");
    $square.css('background-color', 'white');
  }

  setupBoard() {
    this.$el.append('<ul></ul>');


    for (var i = 0; i < 9; i++) {
        const row = Math.floor(i / 3);
        const col = (i % 3);
        $('ul').append('<li></li>');
        $('ul li').eq(i).attr('pos', [row, col]);
    }

    // $('ul').css('width', '330px');
    // $('li').css('width', '105px');
    // $('li').css('height', '105px');
    // $('ul').css('list-style-type', 'none');
    // $('li').css('float', 'left');
    // $('li').css('background-color', 'grey');
    // $('li').css('border', '2px solid black');
    // $('li').css('text-align', 'center');
    // $('li').css('line-height', '105px');
    // $('li').css('font-size', '40px');
    $('li').addClass("empty");
    // $('li.empty').hover(
    //   function() {
    //     $(this).css('background-color', 'yellow');
    //   }, function() {
    //     $(this).css('background-color', 'grey');
    //   }
    // );

  }
}

module.exports = View;
