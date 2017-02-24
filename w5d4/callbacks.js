class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    const date = new Date;
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    let secs = this.seconds > 9 ? `${this.seconds}` : `0${this.seconds}`;
    let mins = this.minutes > 9 ? `${this.minutes}` : `0${this.minutes}`;
    let hrs = this.hours > 9 ? `${this.hours}` : `0${this.hours}`;
    console.log(`${hrs}:${mins}:${secs}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    let totalSeconds = this.seconds + (this.minutes * 60) + (this.hours * 3600);
    totalSeconds++;
    this.hours = Math.floor(totalSeconds / 3600);
    totalSeconds -= this.hours * 3600;
    this.minutes = Math.floor(totalSeconds / 60);
    totalSeconds -= this.minutes * 60;
    this.seconds = totalSeconds;
    this.printTime();
  }


}

// let c = new Clock;
// console.log(c.printTime());
// c._tick();
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  // Explicitely Add callback function
  // const inc = function(num) {
  //   sum += parseInt(num, 10);
  //   console.log(sum);
  // };

  // if (numsLeft > 0) {
  //   reader.question("Enter a number:", inc);
  // }
  if (numsLeft === 0) {
    reader.close();
    return completionCallback(sum);
  }

    reader.question("Enter a number:", (num) => {
      sum += parseInt(num, 10);
      console.log(sum);
      return addNumbers(sum, numsLeft - 1, completionCallback);
    });
}


function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}? `, (greater) => {
    (greater === 'yes') ? callback(true) : callback(false);
  });
}

const outerLoop = function () {
  console.log('In Outer Loop');
};

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], (bool) => {
      if (bool === true) {
        madeAnySwaps = true;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    return innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  }else {
    return outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      return innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      reader.close();
      return sortCompletionCallback(arr);
    }
  }

  outerBubbleSortLoop(true);
}
// console.log(innerBubbleSortLoop([9,1,2,4,10], 0, false, outerLoop));
// console.log(absurdBubbleSort([8,5,1], (arr) => (console.log(arr))));
// askIfGreaterThan(1, 2, (arg) => console.log(arg));

Function.prototype.myBind = function(context) {
  return () => this.apply(context);
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
