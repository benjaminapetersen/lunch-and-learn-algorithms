const assert = require("../assert");

let count = 0;

// this is terrible, O(2^n)
//
// add back the console.log statements and you can see it runs many, many calls.
function fibonacci(fibIndex) {
  // most impls skip this first if, but its necessary if you want the
  // leading 1 in 1,1,2,3,5,8...
  if (fibIndex === 0) {
    // console.log(count++, '-', 0);
    return 0;
  }
  if (fibIndex === 1) {
    // console.log(count++, '-', 1);
    return 1;
  }
  // console.log(count++, '-', fibonacci(fibIndex -1) + fibonacci(fibIndex -2));
  return fibonacci(fibIndex - 1) + fibonacci(fibIndex - 2);
}

assert.equals(fibonacci(1), 1, "1st fibonacci!");
assert.equals(fibonacci(2), 1, "2nd fibonacci!");
assert.equals(fibonacci(3), 2, "3nd fibonacci!");
assert.equals(fibonacci(4), 3, "4th fibonacci!");
assert.equals(fibonacci(5), 5, "5th fibonacci!");
assert.equals(fibonacci(6), 8, "6th fibonacci!");
