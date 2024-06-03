// https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// iterate into correct?
//   expect.equal(result[0], 1)
//   expect.equal(result[1], 2)
//   expect.equal(result[2], 2)
//   expect.equal(result[3], 3)
//   expect.equal(result[4], 5)
//   expect.equal(result[5], 6)
// 1st expect result = nums1
// 2nd expect result.length = nums1.length, not m which is the truncated num1 w/o 0s
// 3rd, expect "m" to be the limit of copies from the original array
//   TODO: this is what I missed from the original!
//   Do not be so quick to ignore parameters passed in.
//   TODO: what to do with "n"?  this is likely important as well.
//   There may be some efficiency benefits to lengths of both arrays
// 4th, expect m++ to be straight copies from the 2nd array
// 5th, expect abort unnecessary iterations of 2nd array.  
//    may not be able to "expect" this, but we can work it in for efficiency
//    break with < > values 
// 6th, expect when num1[i] == num2[i] both are kept
// - 2 additions to the intiial array
// - the iterator can be incremented twice to account for the slot 
var merge = function(nums1, m, nums2, n) {

}
