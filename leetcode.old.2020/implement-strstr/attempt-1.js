const assert = require("../assert");

// code
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// strStr(haystack:string, needle:string):number
var strStr = function(haystack, needle) {
  // return index of first occurance of needle in haystack
  // return -1 if needle is NOT in the haystack
  const firstLetter = needle[0];
  const length = needle.length;
  const split = haystack.split('');

  //console.log('needle', needle,'first letter:', firstLetter, 'length:', length);
  
  // special case this quirk
  if(haystack == "" && needle == "") {
    return 0;
  }
  if(needle == "") {
    return 0;
  }

  for (var i = 0; i < split.length; i++) {
    const letter = split[i];

    if(letter === firstLetter) {
      //console.log('at here', letter, firstLetter);
      const toMatch = haystack.substring(i, i+length);
      //console.log('to match', toMatch,'needle', needle);
      if (toMatch === needle) {
        return i;
      }
    }
  }
  return -1;
};


assert.equals(1, 1, "A message!");
assert.equals(strStr("hello","ll"), 2);
assert.equals(strStr("",""), 0, 'empty string');
assert.equals(strStr("a",""), 0, 'empty string');