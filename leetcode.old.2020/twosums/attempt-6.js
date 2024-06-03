/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Good, but not best
// ----------------
// Runtime: 68 ms, faster than 52.54% of JavaScript online submissions for Two Sum.
// Memory Usage: 35.1 MB, less than 26.04% of JavaScript online submissions for Two Sum.
//
// nums = [1,2,4,6,11,15,16,19,32,54,64,93];
// target = 26
var twoSum = function (nums, target) {
  // so we can look for complement with O(1)
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    // why iterate twice?
    // we do have to check before the add, else we miss items
    let current = nums[i];
    let complement = target - current;

    // map.has(key) works better than if (map.get(key))
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(current, i);
  }
};

// // basic
// let list1 = [1,2,4,6,11,15,16,19,32,54,64,93];
// let target1 = 26
// let result1 = twoSum(list1, target1);
// console.log('result1 is', result1);

// // duplicates
// let list2 = [2,2,2,2,2,2];
// let target2 = 4;
// let result2 = twoSum(list2, target2);
// console.log('result2 is', result2);

// // negatives
// let list3 = [-1,-2,-3,-4,-5,-6];
// let target3 = -8;
// let result3 = twoSum(list3, target3);
// console.log('result3 is', result3);

// basic 2
let list4 = [2, 7, 11, 15];
let target4 = 9;
let result4 = twoSum(list4, target4);
console.log("result4 is", result4);
