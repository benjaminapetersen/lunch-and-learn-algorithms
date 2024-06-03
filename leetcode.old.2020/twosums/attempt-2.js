/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// BROKEN!
//
// nums = [1,2,4,6,11,15,16,19,32,54,64,93];
// target = 26
var twoSum = function (nums, target) {
  throw new Error("Fail! for...in loops string properties!");
  throw new Error("Fail! for...of loops iterables!");
  for (x in nums) {
    for (y in nums) {
      if (nums[x] + nums[y] === target) {
        return [x, y];
      }
    }
  }
};

// basic
let list1 = [1, 2, 4, 6, 11, 15, 16, 19, 32, 54, 64, 93];
let target1 = 26;
let result1 = twoSum(list1, target1);
console.log("result1 is", result1);

// duplicates
let list2 = [2, 2, 2, 2, 2, 2];
let target2 = 4;
let result2 = twoSum(list2, target2);
console.log("result2 is", result2);

// negatives
let list3 = [-1, -2, -3, -4, -5, -6];
let target3 = -8;
let result3 = twoSum(list3, target3);
console.log("result3 is", result3);
