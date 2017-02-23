function myEach(array, callback) {
  for(let i=0; i < array.length; i++) {
    callback(array[i]);
  }
  return array;
}

function myMap(array, callback) {
  let newArray = [];
  myEach(array, el => {
    newArray.push(callback(el));
  });
  return newArray;
}

function myInject(array, callback) {
  let accum = array[0];
  myEach(array.slice(1), el => {
    accum = callback(accum, el)
  });
  return accum;
}

const test = (arg) => {
  console.log(arg);
}
const sum_test = (num) => {
  return num*2;
}
const inject_test = (accum, num) => {
  return accum*num;
}



// myEach([1,2,3,4], test);
// console.log(myMap([1,2,3,4], sum_test));
console.log(myInject([1,2,3,4], inject_test))
