const assert = require("../assert");

// code
var longestPalindrome = function(s) {
  let startIndex = 1; // skip the last character;
  let endIndex = s.length -1; // skip the last;
  
  let stored = {
    word: null,
    length: null,
  }

  // iterate the string
  // lets visualize with 
  //   "ofoofobabadnana"
  for(let i = startIndex; i < endIndex; i++) {
    // if index = 5
    // s[index] = o
    // s[index - 1] = f
    // s[index + 1] = b
    // if (f === b) {
    // keep searching outward
    // else
    // stop search, record if previous values usable
  }

};

// ODD IMPL:
// iterate the string, we can skip over index 0, and can skip the last index.
// using an idex
//   check index -1 & index + 1, if match
//   check index -2 & index + 2, if match, etc
//   if no match
//   record the previous index (+/-)x string and its length
// 
// how to record these: 
// - 1st 4 chars
// - 2nd 6 chars
// - 3rd 2 chars 
// well, don't need to store them all, just need the longest
// let stored = { palindrome: '', length: 0 }
// if palindrome.length > storedPalindrome.length, 
// update stored with the string and its length
//
// EVEN IMPL:
// iterate the string, don't skip index 0, or the last index, though this at best gives us a 2.
// 
// 
// 
// optimization:
// if we have a palindrome of x characters, and <x characters remain in the 
// string, we can stop looking through the string early.
//


assert.equals(longestPalindrome("babad"), "bab", "aba is also a valid solution");
asserts.equals(longestPalindrome("ofoofobabadnana"), "ofoofo");
// gotcha, i've been thinking in terms of odd numbers, 
// but i need to support even numbers as well.
asserts.equals(longestPalindrome("bb"), "bb");
asserts.equals(longestPalindrome("faaf"), "faaf");
