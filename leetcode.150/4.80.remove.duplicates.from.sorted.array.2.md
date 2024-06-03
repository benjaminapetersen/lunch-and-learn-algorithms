# Remove Element

- Leet Code Problems: 
    - https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150
    - https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150
- Replit.com link for my work:
    - https://replit.com/@BenjaminPeterse/leetcode150#4_remove_duplicates_sorted_array2.js

## Summary

Something...

## The Code

```javascript
const assert = require("assert").strict;

const moduleName = "Remove Duplicates From Sorted Array 2";
console.log(`${moduleName} loaded \n--------`);

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // handle simplest case first.
  if (nums.length === 0) {
    return 0;
  }

  // - track unique=0++
  // - track duplicatesKept=0 (max 1)
  // iterate the array
  // - track current = nums[x]
  // - track next = nums[x+1]
  // - compare current && next
  //   - if current === next
  //     - check duplicatesKept == 0
  //       - bump duplicateKept++
  //       - num[unique] = nums[x+1]
  //       - unique++
  //       - i++
  //     - else check duplicatesKept != 0 (greater than 0)
  //       - duplicatesKept = 0;
  //       - i++
  //   - if current !== next
  //     - bump unique++
  //     - reset duplicatesKept=0
  //     - i++
  let unique = 0;
  let duplicatesKept = 0;
  let fastI = 0;
  let end = nums.length;  

  while (fastI < end) {
    let current = nums[fastI];
    let next = nums[fastI + 1];

    if (current === next) {
      // only keep if we haven't yet kept a duplicate
      if (duplicatesKept === 0) {
        duplicatesKept++;
        nums[unique] = current;
        unique++;
      } else {
        // always skip if we already kept a duplicate
        duplicatesKept++;
      }
    } else {
      // always keep when they do not match
      nums[unique] = current;
      unique++;
      duplicatesKept = 0;
    }
    fastI++;
  }
  return unique;
};


// second attempt, pretty messy, serves as a brainstormer
// just dumping a lot of thoughts on paper.
// this is excessively verbose, but gets the brain working.
var removeDuplicatesSecondAttempt = function (nums) {
  // simplest case
  if (nums.length === 0) {
    return 0;
  }
  // where to insert numbers
  let insert = 0;
  // counter for the current iteration of nums[]
  // and if there are already duplicates.  this
  // works fine since the array is sorted.
  let currentDuplicateExists = 0;
  let end = nums.length - 1;
  // I like calling the iterator "fastI" as we
  // are maintaining several pointers and the fast one
  // is the one that will cycle to the end of the array
  for (let fastI = 0; fastI < end; fastI++) {
    let current = nums[fastI];
    let next = nums[fastI + 1]; // might be undefined at end

    // so, handle the end of the array first
    if (fastI === end) {
      // the last number
      // we can reset this, but it doesn't really matter
      currentDuplicateExists = 0;
      // we ought have already compared this number in last iteration
      continue; // or break, its last, doesn't matter.
    }
    // compare current & next if they do not equal.
    if (current != next) {
      // time to insert the num
      nums[insert] = current;
      // increment the insert count
      insert++;
      // if they do not match, then we always reset the dup count
      currentDuplicateExists = 0;
    } else {
      // do we already have a dup?
      if (currentDuplicateExists > 0) {
        // we only allow 1
        currentDuplicateExists = 0;
        continue;
      } else {
        // track the duplicate
        currentDuplicateExists++;
        // insert, we are ok with 2 max
        nums[insert] = current;
        // increment the insert
        insert++;
      }
    }
  }
  // insert should also tell us the value count
  return insert;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// given array nums
// - sorted in non-decreasing order
// - remove some duplicates in-pace
//   - such that each unqiue element appears at most twice
// - maintain the relative order
// - update array in place
// - move result to first part of the array
//   - ie, if k elements remain after removing duplicates,
//     then nums[0...k] should hold final result
// - elems after nums[k] do not matter]
// - do not allocate extra space for another array
var removeDuplicatesFirstPass = function (nums) {
  // simplest case first
  if (nums.length === 0) {
    return 0;
  }
  // keep track of unique numbers
  let uniqueUptoTwo = 0;

  // now, somehow, iterate the array
  // - update unique when unqiue numbers found
  // - move unique numbers to front
  // - save up to two of the unique numbers before dropping the rest
  let end = nums.length;
  // our fast iterator will traverse nums[]
  let fastI = 1;
  // our slow iterator will increment spots in num[] based on
  // the requirements outlined.
  let slowI = 0;
  // perhaps we try with a while loop?
  while (fastI < end) {
    // save a ref for simplicity
    let current = nums[slowI];
    let next = nums[fastI];

    // example: [1,1,1,2,2,3]
    if (next == current) {
      // when match, we need to handle the "upto 2 copies" case
      if (current === 0) {
        // we can always keep the first pass
        uniqueUptoTwo++;
        current++;
        nums[current] = next;
      } else {
        let prev = nums[current - 1];
        // will this be our 3rd copy?
        if ((prev === current) === next) {
          // drop the number
          continue;
        } else {
          uniqueUptoTwo++;
          current++;
          nums[current] = next;
        }
      }
    } else {
      // when they do not match, we handle the basic case
      // increment to next open slot
      uniqueUptoTwo++;
      current++;
      // assign the number to the slot.
      nums[current] = next;
    }
    fastI++;
  }

  // return the unique count
  return uniqueUptoTwo;
};

console.log(`test cases.....`);

let testCases = [
  {
    name: "test case 1:",
    input: [1, 1, 1, 2, 2, 3],
    inputUpdated: [1, 1, 2, 2, 3, "x"],
    output: 5,
  },
  {
    name: "test case 2:",
    input: [0, 0, 1, 1, 1, 1, 2, 3, 3],
    inputUpdated: [0, 0, 1, 1, 2, 3, 3],
    output: 7,
  },
];

testCases.forEach((test) => {
  console.log(test.name);

  let result = removeDuplicates(test.input);

  // assert.deepEqual(test.input, test.inputUpdated);
  console.log("result:", result, "expected:", test.output);
  assert.equal(result, test.output);
});

```