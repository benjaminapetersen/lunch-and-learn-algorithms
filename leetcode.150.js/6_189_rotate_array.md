# Remove Element

- Leet Code Problems: 
    - https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150
    - https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150
- Replit.com link for my work:
    - 

## Summary

Something...

## The Code

```javascript
const assert = require("assert").strict;

const moduleName = "🐷 Rotate Array";
console.log(`${moduleName} loaded \n--------`);

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// this gets us a step further by handling some simple
// cycles (k being larger than the length of the array)
// but is still a bit naive
var rotate = function (nums, k) {
  // fairly naive simplisting addition should pass
  // the first snag we hit.
  length = nums.length;

  // no need to do any work at all
  if (k == length) {
    return;
  }
  // if k is large, we only need to actually rotate
  // based on modulus, which will be the remainder after
  // "x" cycles of the full length of the array.
  if (k > length) {
    k = k % length;
  }

  const negativeK = Math.abs(k) * -1;
  const moveFront = nums.slice(negativeK);

  const lengthToK = nums.length - k;
  const moveBack = nums.slice(0, lengthToK);

  let numsI = 0;
  let moveFrontI = 0;
  let moveFrontEnd = moveFront.length;
  let moveBackI = 0;
  let moveBackEnd = moveBack.length;
  const end = nums.length;

  // iterate the whole array
  while (numsI < end) {
    // handle the move front set first
    if (moveFrontI < moveFrontEnd) {
      nums[numsI] = moveFront[moveFrontI];
      moveFrontI++;
      numsI++;
      continue; // do not handle back until done.
    }

    // handle the move back set after
    if (moveBackI < moveBackEnd) {
      nums[numsI] = moveBack[moveBackI];
      moveBackI++;
      numsI++;
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// this gets us a step further by handling some simple
// cycles (k being larger than the length of the array)
// but is still a bit naive
var rotateFourthPass = function (nums, k) {
  // fairly naive simplisting addition should pass
  // the first snag we hit.
  length = nums.length;
  if (k > length) {
    k = length - k;
  }

  const negativeK = Math.abs(k) * -1;
  const moveFront = nums.slice(negativeK);

  const lengthToK = nums.length - k;
  const moveBack = nums.slice(0, lengthToK);

  let numsI = 0;
  let moveFrontI = 0;
  let moveFrontEnd = moveFront.length;
  let moveBackI = 0;
  let moveBackEnd = moveBack.length;
  const end = nums.length;

  // iterate the whole array
  while (numsI < end) {
    // handle the move front set first
    if (moveFrontI < moveFrontEnd) {
      nums[numsI] = moveFront[moveFrontI];
      moveFrontI++;
      numsI++;
      continue; // do not handle back until done.
    }

    // handle the move back set after
    if (moveBackI < moveBackEnd) {
      nums[numsI] = moveBack[moveBackI];
      moveBackI++;
      numsI++;
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// for very large arrays, this would be insanely long.
// the time complexity for the underlying array to be
// re-indexed constantly is terrible
var rotateThirdPass = function (nums, k) {
  let i = 0;
  while (i < k) {
    const item = nums.pop();
    nums.unshift(item);
    i++;
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotateSecondPass = function (nums, k) {
  const negativeK = Math.abs(k) * -1;
  const moveFront = nums.slice(negativeK);

  const lengthToK = nums.length - k;
  const moveBack = nums.slice(0, lengthToK);

  let numsI = 0;
  let moveFrontI = 0;
  let moveFrontEnd = moveFront.length;
  let moveBackI = 0;
  let moveBackEnd = moveBack.length;
  const end = nums.length;

  // iterate the whole array
  while (numsI < end) {
    // handle the move front set first
    if (moveFrontI < moveFrontEnd) {
      nums[numsI] = moveFront[moveFrontI];
      moveFrontI++;
      numsI++;
      continue; // do not handle back until done.
    }

    // handle the move back set after
    if (moveBackI < moveBackEnd) {
      nums[numsI] = moveBack[moveBackI];
      moveBackI++;
      numsI++;
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// this does not work due to how JavaScript handles
// pointers to objects. The nums array outside the function
// remains a pointer to the original array, but the nums
// variable inside the function points at a new array.
// if we could return the new array, we could reassign,
// but that does not fulfill the requirements of the
// exercise.
var rotateFirstPass = function (nums, k) {
  const negativeK = Math.abs(k) * -1;
  const moveFront = nums.slice(negativeK);
  const lengthToK = nums.length - k;
  const moveBack = nums.slice(0, lengthToK);
  nums = [...moveFront, ...moveBack];
  // can't return nums, unfortunately.
  // due to how JavaScript handles pointers,
  // we have overwritten nums within the function,
  // but nums outside the function is still a
  // reference to the original array that we
  // have not mutated.  Therefore, this version
  // does not fulfill the requirements.
  // return nums;
};

console.log(`test cases.....`);

let testCases = [
  {
    name: "🦄 test case 1:",
    nums: [1, 2, 3, 4, 5, 6, 7],
    rotateBy: 3,
    output: [5, 6, 7, 1, 2, 3, 4],
  },
  {
    name: "🦄 test case 2:",
    nums: [-1, -100, 3, 99],
    rotateBy: 2,
    output: [3, 99, -1, -100],
  },
];

testCases.forEach((test) => {
  console.log(test.name);

  // console.log("nums before:", test.nums);
  // rotate in place means we have no result
  rotate(test.nums, test.rotateBy);
  // console.log("nums after:", test.nums);
  // console.log("correct?", test.nums, test.output);
  assert.deepEqual(test.nums, test.output);
});

```