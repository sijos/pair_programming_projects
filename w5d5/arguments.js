// function sum() {
//   let args = Array.prototype.slice.call(arguments);
//   let total = 0;
//   args.forEach((el) => {
//     total += el;
//   });
//   return total;
// }

// console.log(sum(1, 2, 3, 4));

function sumArgs(...args) {
  let total = 0;
  args.forEach((el) => {
    total += el;
  });
  return total;
}

// console.log(sumArgs(1, 2, 3, 4, 5));
//
// Function.prototype.myBind = function(context, ...bindArgs){
  // let bindArgs = Array.prototype.slice.call(arguments);
  // console.log(Object.prototype.toString.apply(bindArgs));
  // console.log(Object.prototype.toString.apply([1,2,3]));
  // console.log(bindArgs);
//   return (...callArgs) => {
//     this.apply(context, bindArgs.concat(callArgs))
//   };
//
// };


Function.prototype.myBind = function(context) {
  let bindArgs = Array.prototype.slice.call(arguments).slice(1);

  let that = this;
  return function() {
    let callArgs = Array.prototype.slice.call(arguments);
    that.apply(context, bindArgs.concat(callArgs));
  };
};



// Function.prototype.myBind = function(context, ...bindArgs){
//
//   let that = this;
//   return function(...callArgs) {
//     that.apply(context, bindArgs.concat(callArgs));
//   };
// };





function curriedSum(numArgs){
  let numbers = [];

  function _curriedsum(num) {
    numbers.push(num);
    if(numbers.length === numArgs) {
      return numbers.reduce(function(acc, val) { return acc + val; },0);
    } else {
      return _curriedsum;
    }
  }
  return _curriedsum;
}


//sumNum.curry(4)(20)(10)(5)(5)
Function.prototype.curry = function(numArgs) {
  let args = [];
  let that = this;
  // console.log(this);

  function addArg(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that.apply(null, args);
    } else { return addArg; }
  }
  return addArg;
};


function sum(...args) {
  let total = 0;
  args.forEach((el) => { total += el; });
  return total;
}

// console.log(sum(1,2,3));
console.log(sum.curry(3)(1)(2)(7));
