function range(start, end) {
  let array = [];
  if (end <= start + 1) {
    return array;
  }
  array.push(start+1);
  return array.concat(range(start + 1, end));
}


function iSum(array) {
  let sum = 0;
  array.forEach( el => {
    sum = sum + el;
  });
  return sum;
}

function rSum(array) {
  if (array.length < 1) {
    return 0;
  }
  return array[0] + rSum(array.slice(1));
}

function exp1(b, n) {
  if (n === 0) {
    return 1;
  }
  return b * exp1(b, n - 1);
}

function exp2(b, n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return b;
  }

  if (n % 2 === 0) {
    let ex = exp2(b, (n / 2));
    return ex * ex;
  } else {
    let ex = exp2(b, (n - 1) / 2);
    return ex * ex * b;
  }
}

function rFib(n) {
  let array = [1,1];
  if (n < 0) {
    return [];
  }
  if (n < 3) {
    return array.slice(2-n);
  }
  let lastFib = rFib(n-1);
  lastFib.push(lastFib[lastFib.length-1] + lastFib[lastFib.length-2]);
  return lastFib;
}


function bsearch(array, target) {
  if (array.length < 1) {
    return null;
  }

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid + 1);

  if (array[mid] === target) {
    return mid;
  } else if (array[mid] > target) {
    return bsearch(left, target);
  } else {
    let rightSearch = bsearch(right, target);
    if (rightSearch !== null) {
      return mid + 1 + rightSearch;
    } else { return null;}
  }
}

console.log(bsearch([1, 2, 3], 1));
console.log(bsearch([2, 3, 4, 5], 3));
console.log(bsearch([2, 4, 6, 8, 10], 6));
console.log(bsearch([1, 3, 4, 5, 9], 5));
console.log(bsearch([1, 2, 3, 4, 5, 6], 6));
console.log(bsearch([1, 2, 3, 4, 5, 6], 0));
console.log(bsearch([1, 2, 3, 4, 5, 7], 6));
