# Merge sorted array

- Leet Code Problem:
    - https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
- Replit.com link for my work:
    - https://replit.com/@BenjaminPeterse/leetcode150#1.merge.two.sorted.array.js

## Summary

This one gave me some trouble, surprisingly.  I was a bit frustrated 
due to simply the `falsy` nature of `0`.  I should have done my `if` 
checks against the `iterators` initially, but for some reason felt 
that I needed to test the `values`.  This was naive.

Also, iterating the source array from the end to the beginning is a 
critical point of problem solving.  It allows the solution to avoid 
shifting all items in the array back as we insert new items.

This is a "two pointer" style algorithm.

Also, I'm starting to really prefer `while` over `for` loops.

## The Code

```javascript
const assert = require("assert").strict;

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let actualLength = m + n; // or nums1.length;
  let actualI = actualLength - 1;
  let mI = m - 1;
  let nI = n - 1;
  // lets iterate backwards from the end of nums1.
  while (actualI >= 0) {
    // when 2nd array is empty, we can just copy the rest of nums1
    if (nI >= 0) {
      // if nums2[nI] is greater, we should take from nums2
      if (nums1[mI] > nums2[nI]) {
        nums1[actualI] = nums1[mI];
        mI--;
      } else {
        nums1[actualI] = nums2[nI];
        nI--;
      }
    } else {
      nums1[actualI] = nums1[mI];
      // but now we iterate down mI instead
      mI--;
    }
    // decrement the counter each cycle
    actualI--;
  }
};

var mergeSeemsCheating = function (nums1, m, nums2, n) {
  let actualLength = m + n; // or nums1.length
  let nI = n - 1;
  // iterate from back to front
  for (let sortI = actualLength - 1; sortI >= 0; sortI--, nI--) {
    if (nI >= 0) {
      nums1[sortI] = nums2[nI];
    }
  }
  // but this seems to really be cheating.  don't love it.
  // if we doing a sort algorithm, we should do the sorting outselves :)
  nums1.sort((a, b) => a - b);
};

// approach:
// just insert all of the items into the array, and then
// sort the array after based on item size.
var mergeBestSubmittedAnswer = function (nums1, m, nums2, n) {
  // iterM is the iterator for nums1, starting at the end
  // iterN is the iterator for nums2, starting at the beginning
  // iterate as long as iterN is less than n, meaning, as long
  // as there are still elements in nums2.
  // Given:
  // [1,2,7,0,0,0]
  // [4,5,6]
  // This means that we will iterate until nums2 is emptied
  for (let iterM = m, iterN = 0; iterN < n; iterM++, iterN++) {
    nums1[iterM] = nums2[iterN];
  }
  nums1.sort((a, b) => a - b);
};

// this approach is broken, depending on the data set
// provided.  Once the arrays begin to look like
// [0] or [] the checks for existence and the counters
// break down.
var mergeFirstPass = function (nums1, m, nums2, n) {
  let reverseI = m + n - 1; // or nums1.length - 1
  let nums1I = m - 1 >= 0 ? m - 1 : 0;
  let nums2I = n - 1 >= 0 ? n - 1 : 0;

  while (reverseI >= 0) {
    let first = nums1[nums1I];
    let second = nums2[nums2I];
    let firstExists = typeof first === "number";
    let secondExists = typeof second === "number";

    console.log("case", reverseI, "first", first, "second", second);
    // if either of them is undefined, special case
    if (!firstExists || !secondExists) {
      console.log("special case!", first, second);
      nums1[reverseI] = first || second;
      nums1I--;
      nums2I--;
    }
    // keep the larger
    if (first < second) {
      console.log("keep second", second);
      nums1[reverseI] = second;
      nums2I--;
    } else {
      console.log("keep first", first);
      // the else case can handle equals.
      nums1[reverseI] = first;
      nums1I--;
    }
    // decrement the end counter
    reverseI--;
  }
};

let testCases = [
  {
    name: "test case 1: [1, 2, 3, 0, 0, 0] & [2, 5, 6]",
    input1: [1, 2, 3, 0, 0, 0],
    input2: 3,
    input3: [2, 5, 6],
    input4: 3,
    output: [1, 2, 2, 3, 5, 6],
  },
  {
    name: "test case 2: [1] & []",
    input1: [1],
    input2: 1,
    input3: [],
    input4: 0,
    output: [1],
  },
  {
    name: "test case 3: [0] & [1]",
    input1: [0],
    input2: 0,
    input3: [1],
    input4: 1,
    output: [1],
  },
  {
    name: "test case 4: [2, 0] & [1]",
    input1: [2, 0],
    input2: 1,
    input3: [1],
    input4: 1,
    output: [1, 2],
  },
  {
    name: "test case 5: [4,5,6,0,0,0] & [1,2,3]",
    input1: [4, 5, 6, 0, 0, 0],
    input2: 3,
    input3: [1, 2, 3],
    input4: 3,
    output: [1, 2, 3, 4, 5, 6],
  },
  {
    // lolol wow these kick my butt.
    name: "test case 6:",
    input1: [-1, 0, 0, 3, 3, 3, 0, 0, 0],
    input2: 6,
    input3: [1, 2, 2],
    input4: 3,
    output: [-1, 0, 0, 1, 2, 2, 3, 3, 3],
  },
];

testCases.forEach((test) => {
  console.log(test.name);
  console.log(
    "merge(",
    JSON.stringify(test.input1),
    JSON.stringify(test.input3),
    ") ===",
    JSON.stringify(test.output),
    JSON.stringify(test.input1) === JSON.stringify(test.output),
  );
  // actual merge has to come after console.log
  // since the merge mutates the first input
  merge(test.input1, test.input2, test.input3, test.input4);
  console.log("actual:  ", test.input1);
  console.log("expected:", test.output);
  assert.deepEqual(test.input1, test.output);
});

```