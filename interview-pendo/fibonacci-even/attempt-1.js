const assert = require("../assert");

// 1,1,2,3,5,8,13,21,34, 55, 89, 144
let fibonacci = function (fibIndex) {
  // prev has to start with 1, in order to get the exta leading 1 in 1,1,2,3,5
  let prev = 1, // 1, 1, 2, 3, 5
    current = 0, // 1, 2, 3, 5, 8
    next = 0; // 1, 2, 3, 5, 8

  for (let i = 1; i <= fibIndex; i++) {
    next = current + prev;
    prev = current;
    current = next;
  }
  return next;
};

let fibonacciEvenAdd = function (fibIndex) {
  let prev = 1,
    current = 0,
    next = 0;

  let addEvens = 0;

  while (fibIndex >= 0) {
    next = current + prev;
    prev = current;
    current = next;
    if (next % 2 === 0) {
      addEvens += next;
    }
    fibIndex--;
  }
  return addEvens;
};

// 1,1,2,3,5,8,13,21,34, 55, 89, 144
assert.equals(fibonacciEvenAdd(1), 0, "first add");
assert.equals(fibonacciEvenAdd(3), 2, "first add");
assert.equals(fibonacciEvenAdd(6), 10, "first add");
