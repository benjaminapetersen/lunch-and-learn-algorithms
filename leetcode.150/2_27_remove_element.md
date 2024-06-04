# Remove Element

- Leet Code Problem: 
    - https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150
    - https://replit.com/@BenjaminPeterse/leetcode150#2_remove_element.js
- Replit.com link for my work:

## Summary

## The Code

```javascript
const assert = require("assert").strict;

const moduleName = "Remove Element";
console.log(`${moduleName} loaded \n--------`);

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// given array of nums arr[1,2,3,4,5]
// - remove all occurances of val=2
// - move non-matching values to the front of the array
// - in-place, not a new array
// - elements may, possibly must, be reordered
// - return count of elements != val
var removeElement = function (nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    // if the number does not match
    if (nums[i] !== val) {
      // beginning with index 0, bump the item forward
      nums[count] = nums[i];
      // and also increment the count.
      count++;
    }
  }
  return count;
};

// this missed the fact that the array MUST be reordered
// to push the non-matching elements to the front of the
// array.  the slots that contained the element can be
// cleared or filled with something else.
var removeElementFirstPass = function (nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = "x";
      count++;
    }
  }
  return count;
};

console.log(`test cases.....`);

let testCases = [
  {
    name: "test case 1:",
    input1: [3, 2, 2, 3],
    input2: 3,
    output: 2,
  },
  {
    name: "test case 2:",
    input1: [3, 2, 2, 3, 4, 6, 2, 9, 0, -1],
    input2: 2,
    output: 3,
  },
];

testCases.forEach((test) => {
  console.log(test.name);

  // actual merge has to come after console.log
  // since the merge mutates the first input
  let result = removeElement(test.input1, test.input2);
  assert.equal(result, test.output);
  console.log(
    "correct?",
    result,
    JSON.stringify(test.output),
    JSON.stringify(test.input1),
  );
});

```