/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Really good!  at speed, but not memory usage
// ----------------
// Runtime: 56 ms, faster than 81.29% of JavaScript online submissions for Two Sum.
// Memory Usage: 36.1 MB, less than 13.64% of JavaScript online submissions for Two Sum.
//
// nums = [1,2,4,6,11,15,16,19,32,54,64,93];
// target = 26
var twoSum = function (nums, target) {
  // so we can look for complement with O(1)
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    // will this clobber duplicates?
    map.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    let foundIndex = map.get(complement);
    // found and not already used index
    if (foundIndex && foundIndex != i) {
      return [i, foundIndex];
    }
  }
};

// basic
let list1 = [1, 2, 4, 6, 11, 15, 16, 19, 32, 54, 64, 93];
let target1 = 26;
result1 = twoSum(list1, target1);
console.log("result1 is", result1);

// duplicates
let list2 = [2, 2, 2, 2, 2, 2];
let target2 = 4;
result2 = twoSum(list2, target2);
console.log("result2 is", result2);

// negatives
let list3 = [-1, -2, -3, -4, -5, -6];
let target3 = -8;
result3 = twoSum(list3, target3);
console.log("result3 is", result3);
