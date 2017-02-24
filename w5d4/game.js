class Game {
  constructor() {
    this.stacks = [
      [3,2,1],
      [],
      []
    ];
  }


  promptMove(){
    const readline = require('readline');

    const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    console.log(this.stacks);
    // let startTower, endTower;
    reader.question("Enter start tower:", (start) => {
      let startTower = parseInt(start);
      // console.log(startTower);
      reader.question("Enter end tower:", (end) => {
        let endTower = parseInt(end);
        return [startTower, endTower];
        // console.log(endTower);
      });

    });
    console.log('return');
  }

  // isValidMove(move){
  //   reader.close();
  // }


}


let g = new Game();
console.log(g.promptMove());
