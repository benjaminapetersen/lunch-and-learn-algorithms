// https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
    // 2 arrays
    // [1,2,3,0,0,0]
    // [2,5,6]
    // expected: [1,2,2,3,5,6]
    // - break when inner is larger than outer, waste
    // - what to do with 2 == 2, need to keep both
    //  - could be multiple in a row, actually.
    // sorted in increasing order
    // lengths are given as second params
    // lengths do not include 0 values which should be dropped
    
    // possible solutions:
    // don't drop 0, we need this to know how long the
    // final array must be.  this is handy.
    let target = nums1; // i'd like to name this something easier to reference inside the loops.
    let copyNums1 = target.slice()
    let targetLength = target.length;
    // loop copyNums1, but loop the FULL length, not "m" which is truncated 0s
    // loop copy nums2
    // if (copyNums1[1] <= copyNums2) 
    // insert copyNums1[i] into nums1, overwrite orig
    // else, insert copyNums2[i]    
    // TODO: use break statements to stop iterating when the comparison of < shows we don't need to continue.
    for(let outerI = 0; outerI < targetLength; outerI++) {
        let outerToCompare = copyNums1[outerI];
        for(let innerI = 0; innerI < n; innerI++) {
            let innerToCompare = nums2[innerI];
            // when outer is 0, we know we have to just fill in the rest of the values.
            // this is rather handy. 
            if (outerToCompare === 0) { 
                // here we have an error
                // somehow we got 6,6,6, which is odd.
                // the error is likey in another eslse as we aren't doing special stuff here.
                target[outerI] = innerToCompare;                       
            } else if (outerToCompare < innerToCompare) {
                // keep outer
                target[outerI] = outerToCompare;
                break; // performance, no need to continue to iterate this inner series
            } else if (outerToCompare === innerToCompare) {
                // keep both
                target[outerI] = outerToCompare;
                target[outerI+1] = innerToCompare;
                // increment index since we filled 2 slots with a match
                outerI = outerI + 1;
            } else if (innerToCompare < outerToCompare) {
                // keep inner
                target[outerI] = innerToCompare
            }            
        }
    }
};

// test case:
//   nums1 = [1,2,3,0,0,0]
//   m = 3 (length without the 0s)
//   nums2 = [2,5,6]
//   n = 3
// errors yet:
// output: [1,2,2,6,6,6]
// expected: [1,2,2,3,5,6]