const assert = require("../assert");

// https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
// this changes the signature, except that the user should't provide
// the memo.  it will be generated the first time.
// the main point here is to use a hash table/dictionary to look up
// values if already computed, rather than invoke the function again.
function fibonacci(num, memo) {
  memo = memo || {};
  if (memo[num]) {
    return memo[num];
  }
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
}

assert.equals(fibonacci(1), 1, "1st fibonacci!");
assert.equals(fibonacci(2), 1, "2nd fibonacci!");
assert.equals(fibonacci(3), 2, "3nd fibonacci!");
assert.equals(fibonacci(4), 3, "4th fibonacci!");
assert.equals(fibonacci(5), 5, "5th fibonacci!");
assert.equals(fibonacci(6), 8, "6th fibonacci!");
