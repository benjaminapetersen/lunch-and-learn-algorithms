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
var findMedianSortedArrays = function (nums1, nums2) {
  // first set
  let nums1Total = 0,
    nums1Divide = nums1.length === 0 ? 1 : nums1.length;
  for (let i = 0; i < nums1.length; i++) {
    nums1Total += nums1[i];
  }
  if (nums1.length === 0) {
    nums1Total = 0;
  }
  let nums1Mid = nums1Total === 0 ? 0 : nums1Total / nums1Divide;

  // second set
  let nums2Total = 0,
    nums2Divide = nums2.length === 0 ? 1 : nums2.length;
  for (let i = 0; i < nums2.length; i++) {
    nums2Total += nums2[i];
  }
  if (nums2.length === 0) {
    nums2Total = 0;
  }
  let nums2Mid = nums2Total === 0 ? 0 : nums2Total / nums2Divide;

  // final divide
  let divideBy = 2;
  if (nums1Total === 0 && nums2Total === 0) {
    divideBy = 0; // if zero, we won't divide :)
  } else if (nums1Total === 0) {
    divideBy = 1;
  } else if (nums2Total === 0) {
    divideBy = 1;
  }

  // return values
  if (divideBy === 0) {
    return 0;
  }
  return (nums1Mid + nums2Mid) / divideBy;
};

assert.equals(findMedianSortedArrays([1, 3], [2]), 2);
assert.equals(findMedianSortedArrays([2, 2], [2]), 2);
assert.equals(findMedianSortedArrays([1, 2], [3, 4]), 2.5);
assert.equals(findMedianSortedArrays([], [1]), 1, "an empty array should work");
assert.equals(
  findMedianSortedArrays([3], [-2, -1]),
  -1,
  "negative numbers should work"
); //  fails!
