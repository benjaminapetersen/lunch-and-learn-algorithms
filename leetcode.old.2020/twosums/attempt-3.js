const assert = require("../assert");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Terrible!
// -----------------
// Runtime: 964 ms, faster than 5.16% of JavaScript online submissions for Two Sum.
// Memory Usage: 42.4 MB, less than 5.38% of JavaScript online submissions for Two Sum.
//
// nums = [1,2,4,6,11,15,16,19,32,54,64,93];
// target = 26
var twoSum = function (nums, target) {
  // array.entries() returns iterables
  for (const [i, x] of nums.entries()) {
    for (const [j, y] of nums.entries()) {
      // console.log('welp', i, j, x, y);
      // can't reuse the same items by index
      if (i === j) {
        continue;
      }
      if (x + y === target) {
        return [i, j];
      }
    }
  }
};

// basic
let list1 = [1, 2, 4, 6, 11, 15, 16, 19, 32, 54, 64, 93];
let target1 = 26;
let result1 = twoSum(list1, target1);
assert.arrayEqual(result1, [4, 5]);

// duplicates
let list2 = [2, 2, 2, 2, 2, 2];
let target2 = 4;
let result2 = twoSum(list2, target2);
assert.arrayEqual(result2, [0, 1]);

// negatives
let list3 = [-1, -2, -3, -4, -5, -6];
let target3 = -8;
let result3 = twoSum(list3, target3);
assert.arrayEqual(result3, [1, 5]);
