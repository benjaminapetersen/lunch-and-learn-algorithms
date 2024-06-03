const assert = require("../assert");


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// threeSum(nums:number[]):number[][] 
// [-1, 2, 1, 6, 3, -5, 0]
// [-5, -1, 0, 1, 2, 5, 6]
const threeSum = function(nums) {
  // make a copy, then pass a sort function using basic math
  const sortedNums = nums.slice().sort((a,b) => a-b);   
  const result = [];

  sortedNums.forEach((numA, indexA) => {
    sortedNums.forEach((numB, indexB) => {
      sortedNums.forEach((numC, indexC) => {
        // eliminates some duplicates, but not all
        // also, the num itself can be duplicate in the array,
        // and that is acceptible use
        if (numA === numB) {
          return;
        }
        if (numB === numC) {
          return;
        }
        if (numA === numC) {
          return; 
        }
        const value = numA + numB + numC
        if(value === 0) {
          const sortedSet = [numA,numB,numC].sort(a,b => a-b);

          // todo: need to ensure we didn't already include a matching set
          result.push([numA,numB,numC]);
        }
      });
    });
  });
  return result;
};



// code
assert.equals(threeSum([-1, 0, 1]), [
  [-1, 0, 1]
], 'it works'); 

assert.equals(threeSum([
  -1, 0, 1, 2, -1, -4
]), [
  [-1, 0, 1],
  [-1, -1, 2]
], "it works!");
assert.equals(
  threeSum ([-1,0,1,2,-1,-4]),
  [
    [-1,-1,2],
    [-1,0,1]
  ], "it works");


