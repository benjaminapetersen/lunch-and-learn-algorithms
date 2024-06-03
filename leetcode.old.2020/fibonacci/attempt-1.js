const assert = require("../assert");

// fibonacci
// generate a fibonacci sequence
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// each value is the sum of the 2 previous values
// in maths:
// F(n) = F(n-1) + F(n-2)
function fibonacci(fibIndex) {
  var prev = 1,
    current = 0,
    next;

  while (fibIndex >= 1) {
    // console.log(fibIndex, next);
    next = current + prev;
    prev = current;
    current = next;
    fibIndex--;
  }
  return next;
}

assert.equals(fibonacci(1), 1, "1st fibonacci!");
assert.equals(fibonacci(2), 1, "2nd fibonacci!");
assert.equals(fibonacci(3), 2, "3nd fibonacci!");
assert.equals(fibonacci(4), 3, "4th fibonacci!");
assert.equals(fibonacci(5), 5, "5th fibonacci!");
assert.equals(fibonacci(6), 8, "6th fibonacci!");

