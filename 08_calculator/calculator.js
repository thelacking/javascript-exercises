const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(arr) {
	let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
};

const multiply = function(x,y) {
  return x * y;
};

const power = function(x,y) {
	Math.pow(x, y);
};

const factorial = function(n) {
	let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
