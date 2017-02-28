function factors(num) {
  for(let i=0; i <=num; i++ ) {
    if (num % i === 0) {
      console.log(i);
    }
  }
}

Array.prototype.bubbleSort = function () {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for(let i=0; i < this.length - 1; i++) {
      if (this[i] > this[i+1]) {
        let temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
        sorted = false;
      }
    }
  }
  return this;
};

console.log([5, 4, 3, 2, 1].bubbleSort());

String.prototype.substrings = function () {
  let array = [];
  for(let i=0; i < this.length; i++) {
    for(let j=i + 1; j <= this.length; j++) {
      if (!array.includes(this.slice(i,j))) {
        array.push(this.slice(i,j));
      }
    }
  }
  return array;
};

console.log([7,6,5,4,1,3,6].bubbleSort());
console.log("cat".substrings());
