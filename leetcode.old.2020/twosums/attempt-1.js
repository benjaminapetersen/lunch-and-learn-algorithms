const assert = require("../assert");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Not great....
// -----------------
// Runtime: 188 ms, faster than 10.25% of JavaScript online submissions for Two Sum.
// Memory Usage: 34.7 MB, less than 59.92% of JavaScript online submissions for Two Sum.
//
// Next challenges:
// nums = [1,2,4,6,11,15,16,19,32,54,64,93];
// target = 26
var twoSum = function (nums, target) {
  // target is the number value we are trying to create
  // we can ignore numbers larger than target

  // store found numbers for comparison
  let found = [];
  // store indices, per requirements
  let foundIndices = [];
  // for in will iterate over values, not indices
  for (let x = 0; x < nums.length; x++) {
    // a little more efficient, IF all nums were positive
    // if (nums[x] > target) {
    // // fail, should return null
    // return [];
    // }
    foundIndices[0] = x;
    found[0] = nums[x];
    for (let y = 0; y < nums.length; y++) {
      // cannot reuse nums at the same index
      if (x === y) {
        continue;
      }
      // if its too big, no gain
      if (found[0] + nums[y] > target) {
        continue;
      }
      if (found[0] + nums[y] === target) {
        foundIndices[1] = y;
        // we don't need this to fulfill requirements, but could use it
        // if requirements were different.
        found[0] = nums[x];
        // we are done
        return foundIndices;
      }
    }
  }
  // fail, should return null
  return [];
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
assert.arrayEqual(result3, [2, 4]);
