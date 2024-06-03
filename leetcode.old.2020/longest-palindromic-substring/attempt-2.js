const assert = require("../assert");

// code
var longestPalindrome = function(s) {
  // even and odd will have different approaches, correct
  let palindromeByEvents = evenPalindrome(s);
  let palindromeByOdds = oddPalindrome(s);
}



assert.equals(longestPalindrome("babad"), "bab", "aba is also a valid solution");
asserts.equals(longestPalindrome("ofoofobabadnana"), "ofoofo");
// gotcha, i've been thinking in terms of odd numbers, 
// but i need to support even numbers as well.
asserts.equals(longestPalindrome("bb"), "bb");
asserts.equals(longestPalindrome("faaf"), "faaf");