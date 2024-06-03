const assert = require("../assert");

// code
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


const isNull = (val) => val === undefined || val === null;
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// mergeTwoList(l1:int[], l2:int[]):int[]
var mergeTwoLists = function(l1, l2) {
  // no need to clone, lets just not mutate the underlying arrays
  const result = [];

  // we can keep track of where we are at in l2
  // so that we don't have to loop it excessively.
  let l1index = 0;
  let l2index = 0;

  let iteration = 0;
  
  // loop until we get through both arrays.
  while (l1index + l2index < l1.length + l2.length) {
    iteration++

    const num1 = l1[l1index];
    const num2 = l2[l2index];

    // console.log('iteration', iteration);
    // console.log('from', l1, l1[l1index]);
    // console.log('from', l2, l2[l2index]);
    // console.log('result', result);
    // console.log('------');

    if (isNull(num1)) {
      result.push(num2);
      l2index++
      continue;
    }
    if(isNull(num2)) {
      result.push(num1);
      l1index++
      continue;
    }

    if (num1 <= num2) {
      result.push(num1);
      l1index++
    } else {
      result.push(num2);
      l2index++
    }
  }
  return result;
}

// mergeTwoLists
// one is an outer,
// two is an inner
// loop the outer
// then loop the inner
// compare the inner to the outer
// if the inner is less, add the value to the result array
// if the outer is liess, add the value to the result array
// avoid reuse
// we can optimize loops by exiting early 


assert.equals(1, 1, "A message!");
assert.arrayEqual(mergeTwoLists([1,2,4],[1,3,4]), [1,1,2,3,4,4]);
assert.arrayEqual(mergeTwoLists([0,2,5,9,11,12],[0,0,1,3,3,4,23]), [0,0,0,1,2,3,3,4,5,9,11,12,23]);
// orig: super simplistic
// var mergeTwoLists = function(l1, l2) {
//   const list1 = l1.slice();
//   const list2 = l2.slice();
//   const merged = [];
//   // loop l1 
//   // inter loop l2
//   // if the value of the inner is less than the outer, add it to merged
//   // else, add the outer to merged
//   // use pop to get it off the list
//   list1.forEach(item1 => {
//     list2.forEach(item2 => {
//       const toAdd = item1 <= item2 
//         ? list1.shift() 
//         : list2.shift();
//         merged.push(toAdd);
//     });
//   });
//   return merged;
// };