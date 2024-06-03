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

const isUndefinedOrNull = (val) => {
  // this is sufficient for both
  return val == null;
}

const combineSort = (arr1, arr2) => {
  // we will have to increment the indices separately to work through the arrays
  let arr1Index = 0;
  let arr2Index = 0;
  // keep track of iteration up to the final mergedLength
  let current = 0;
  let merged = [],
    // we will iterate both, pick & add, repeat, until  end
    mergedLength = arr1.length + arr2.length;

  while (current < mergedLength) {
    let compareFirst = arr1[arr1Index];
    let compareSecond = arr2[arr2Index];
    // have to handle an equals, in which case doesn't matter a ton which we take,
    // the next pass will work itself out.  this is unfortunately ugly
    if (!isUndefinedOrNull(compareFirst) && !isUndefinedOrNull(compareSecond)) {
      if (compareFirst <= compareSecond) {
        merged[current] = compareFirst;
        arr1Index++;
      } else {
        merged[current] = compareSecond;
        arr2Index++;
      }
    } else {
      // one of the arrays is out  of numbers
      if (!isUndefinedOrNull(compareFirst)) {
        merged[current] = compareFirst;
        arr1Index++;
      }
      if (!isUndefinedOrNull(compareSecond)) {
        merged[current] = compareSecond;
        arr2Index++;
      }
    }
    // increment for next pass
    current++;
  }

  // console.log('first',arr1, 'length', arr1.length);
  // console.log('second', arr2, 'length', arr2.length);
  // console.log('total', mergedLength);
  // console.log('merged?', merged);

  return merged;
};

const findMedianSortedArrays = function (nums1, nums2) {
  // but  actually,  we must sort the two arrays into a single array, first.
  let sortedArray = combineSort(nums1, nums2);
  return medianOfArray(sortedArray);
};

// assert.equals(findMedianSortedArrays([1, 3], [2]), 2);
// assert.equals(findMedianSortedArrays([2, 2], [2]), 2);
// assert.equals(findMedianSortedArrays([1, 2], [3, 4]), 2.5);
// assert.equals(findMedianSortedArrays([], [1]), 1, "an empty array should work");
// assert.equals(findMedianSortedArrays([2], []), 2, "an empty array should work");
// assert.equals(
//   findMedianSortedArrays([3], [-2, -1]),
//   -1,
//   "negative numbers should work"
// ); //  fails!

assert.equals(
  findMedianSortedArrays(
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
    [0,6]
  ),
  10.5,
  'zero is not undefined or null'
);