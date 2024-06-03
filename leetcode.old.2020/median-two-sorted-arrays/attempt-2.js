const assert = require("../assert");

// Example 1:
//    nums1 = [1, 3]
//    nums2 = [2]
//  The median is 2.0
// Example 2:
//    nums1 = [1, 2]
//    nums2 = [3, 4]
//  The median is (2 + 3)/2 = 2.5
// Example 3
//   [1,3]
//   [2]
//  The median  is 2

// [1,2,3,4,5]
const oddMedianOfArray = (arr) => {
  const len = arr.length,
    half = len / 2,
    mid = Math.floor(half);
  return arr[mid];
};
// [1,2,3,4,5,6]
const evenMedianOfArray = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  const len = arr.length,
    half = len / 2;
  // arrays are 0 indexed :)
  halfIndex = half - 1;
  const med1 = arr[halfIndex],
    med2 = arr[halfIndex + 1];
  // console.log('arr', arr, 'half index?',  halfIndex);
  // console.log('mid 2 are:', med1, med2, 'median  is', (med1 + med2) / 2);
  return (med1 + med2) / 2;
};

const medianOfArray = (arr) => {
  let isEven = arr.length % 2 === 0;
  if (isEven) {
    return evenMedianOfArray(arr);
  }
  return oddMedianOfArray(arr);
};

const medianOfTwoNumbers = (num1, num2) => {
  // if both zero
  // if one zero
  if (num1 === 0 && num2 === 0) {
    return 0;
  }
  if (num1 === 0) {
    return num2;
  }
  if (num2 === 0) {
    return num1;
  }
  return (num1 + num2) / 2;
};

const findMedianSortedArrays = function (nums1, nums2) {
  let median1 = medianOfArray(nums1),
    median2 = medianOfArray(nums2);
  return medianOfTwoNumbers(median1, median2);
};

// different lengths, arbitrarily.
combineSort([1, 5, 8], [2, 4, 6, 7, 10, 12]);

assert.equals(findMedianSortedArrays([1, 3], [2]), 2);
assert.equals(findMedianSortedArrays([2, 2], [2]), 2);
assert.equals(findMedianSortedArrays([1, 2], [3, 4]), 2.5);
assert.equals(findMedianSortedArrays([], [1]), 1, "an empty array should work");
// aha! so this approach is incorrect in one critical way:
// the two arrays must be merged into a single array, first,
// rather  than  taking the medians of the two separate arrays and
// finding the median.
assert.equals(
  findMedianSortedArrays([3], [-2, -1]),
  -1,
  "negative numbers should work"
); //  fails!
