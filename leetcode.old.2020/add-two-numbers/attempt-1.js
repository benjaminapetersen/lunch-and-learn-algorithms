const assert = require("../assert");

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//   Example:
//   Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
//   Output: 7 -> 0 -> 8
//   Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const listToNumber = (list) => {
  return parseInt(
    list.reverse().reduce((result, next) => {
      result += next;
      return result;
    }, "")
  );
};

const numberToList = (num) => {
  return [...("" + num)].reverse().map((str) => parseInt(str));
};

// since we don't really have linked lists in JS, the lists appear to be arrays
var addTwoNumbers = function (l1, l2) {
  num1 = listToNumber(l1);
  num2 = listToNumber(l2);
  num3 = num1 + num2;
  return numberToList(num3);
};

assert.arrayEqual(
  addTwoNumbers([2, 4, 3], [5, 6, 4]),
  [7, 0, 8],
  "add two numbers"
);
