const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(nums) {
	return nums.reduce((acc, num) => acc + num, 0)
};

const multiply = function(nums) {
  return nums.reduce((acc, num) => acc * num)
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(n) {
  const nums = Array.from(Array(n + 1).keys());
  return nums.slice(1).reduce((acc, ni) => acc * ni, 1);
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
