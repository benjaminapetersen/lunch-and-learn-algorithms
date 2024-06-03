const assert = require("../assert");

var lengthOfLongestSubstring = function (s) {
  // console.log(s, 'length is', s.length);

  // simplest conversion of string to array, yay es6.
  let charsToIterate = [...s];
  let length = charsToIterate.length;
  let longestTempStringLength = 0;

  // gross, but these allow us to break the inner loop
  // loop1:
  for (let i = 0; i < length; i++) {
    let usedChars = {};
    // start at the iteration point of the outer loop and
    // work to the end, if possible
    // reuse this create the substring.
    let tempString = "";
    // reuse this for substing counts.
    let tempStringLength = 0;

    // gross, again!
    loop2: for (let j = i; j < length; j++) {
      let char = charsToIterate[j];

      // console.log('charMap[j]', j, usedChars[char], char);
      if (usedChars[char]) {
        usedChars = {};
        break loop2; // ick, but we can get out of this loop and start over.
      }

      usedChars[char] = "used!";
      tempString += char;
      tempStringLength = tempString.length;
      longestTempStringLength =
        tempStringLength > longestTempStringLength
          ? tempStringLength
          : longestTempStringLength;
    }
  }

  return longestTempStringLength;
};

assert.equals(lengthOfLongestSubstring("a"), 1, "first");
assert.equals(lengthOfLongestSubstring("ab"), 2, "second");
assert.equals(lengthOfLongestSubstring("abbcdeefghh"), 4, "second");

let foo = {
  a: 1,
  ab: 2,
  b: 1,
  bc: 2,
  bcd: 3,
  bcde: 4,
  c: 1,
  cd: 2,
  cde: 3,
  d: 1,
  de: 2,
  e: 1,
  ef: 2,
  efg: 3,
  efgh: 4,
  f: 1,
  fg: 2,
  fgh: 3,
  g: 1,
  gh: 2,
  h: 1,
};
