# Remove Element

- Leet Code Problems: 
    - https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150
    - https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150
- Replit.com link for my work:
    - https://replit.com/@BenjaminPeterse/leetcode150#5_169_majority_element.js

## Summary

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

## The Code

```javascript
const assert = require("assert").strict;

const moduleName = "Something";
console.log(`${moduleName} loaded \n--------`);

/**
 * @param {number[]} nums
 * @return {number}
 *
 * Given an array `nums` of size `n`, return
 * the majority element.
 * The majority element is the element that appears
 * more than ⌊n / 2⌋ times.
 * You may assume the majority element always exists
 * in the array
 */
var majorityElement = function (nums) {
  let cache = {};
  let i = 0;
  let end = nums.length; // cached for speed
  let half = nums.length / 2; // this is the end
  while (i < end) {
    const num = nums[i];
    // if it exists already, increment it
    cache[num] = (cache[num] || 0) + 1;
    // since all we have to do is beat the half,
    // we can exit early at any given point.
    if (cache[num] > half) {
      return num;
    }
    i++; // increment in the while
  }
  // should never get here :)
};

// surprisingly 49 of 51 test cases pass with this impl :)
// this was deliberately naive, assuming there were
// only two different numbers in the array, but one is the
// majority.
var majorityElementFirstPass = function (nums) {
  // the first two test cases indicate that there
  // are only two different values in the array.
  // therefore, we will work off of this.
  let elementOneCount = 0;
  let elementTwoCount = 0;
  const elementOne = nums[0];
  let elementTwo;
  // base case.  No need to do more if there is one element.
  if (nums.length === 1) {
    return elementOne;
  }
  let i = 0;
  let end = nums.length;

  while (i < end) {
    if (nums[i] === elementOne) {
      elementOneCount++;
    } else {
      elementTwoCount++;
      // for now, if it doesn't match element 1, its the element
      elementTwo = nums[i];
    }
    i++;
  }

  if (elementOneCount > elementTwoCount) {
    return elementOne;
  }
  return elementTwo;
};

console.log(`test cases.....`);

let testCases = [
  {
    name: "🦄 test case 1",
    input1: [3, 2, 3],
    output: 3,
  },
  {
    name: "🦄 test case 2",
    input1: [2, 2, 1, 1, 1, 2, 2],
    output: 2,
  },
  {
    name: "🦄 test case 3",
    input1: [2, 2, 1, 3, 1, 1, 4, 1, 1, 5, 1, 1, 6],
    output: 1,
  },
];

testCases.forEach((test) => {
  console.log(test.name);

  let result = majorityElement(test.input1);

  assert.equal(result, test.output);
  assert.deepEqual(result, test.output);
  console.log("correct?", result, test.output);
});

```