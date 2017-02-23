function uniq(array) {
  let newArray = []
  array.forEach ( el => {
    if (!newArray.includes(el)){
      newArray.push(el);
    }
  });
  return newArray;
}

function twoSum(array) {
  let newArray = [];

  for(let i=0; i < array.length - 1; i++){
    for(let j=(i+1); j < array.length; j++){
      if(array[i]+array[j] === 0){
        newArray.push([i,j]);
      }
    }
  }

  return newArray;
}

function transpose(array) {
  let newArray = new Array(array.length);
  for (let i=0; i < array.length; i++){
    newArray[i] = new Array(array.length);
  }

  for(let i=0; i < array.length; i++){
    for(let j=0; j < array.length; j++){
      newArray[i][j] = array[j][i];
    }
  }

  return newArray;
}

// .load array_exercises.js
