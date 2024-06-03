const assert = require("../assert");

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let shortestStr = '';
    // hacky, start really high, to avoid the initial case
    let shortestLen = 100000000;
    // finding the shortest
    strs.forEach(str => {
        if (str.length < shortestLen) {
            shortestLen = str.length;
            shortestStr = str;
        }
    });
    
    // once we have the shortest possible,
    // make a map of all of the possible 
    // character subsets of the string
    let shortestStrMap = {}
    shortestStr.split('').forEach((char, i) => {
        let subset = shortestStr.substring(0,i);
        // we will assume true to start, the next 
        // loop will false out anything that doesn't match.
        shortestStrMap[subset] = true;
    });
    
    // now, loop the original strings, then loop their 
    // chars up to the shortestLen, and toggle the 
    // map for all matches.
    // we can shorten the currentMax for the loop whever 
    // we hit a false and exit.
    let currentMax = shortestLen;
    strs.forEach(str => {
        // if any character doesn't match at all, we are done 
        // and can simply return empty string.
        str.split('').forEach((char, i) => {
          // we should end here, no need to continue looping at all
          if (i >= currentMax) {
            return;    
          } 
          let current = str.substring(0,i);
          if(!shortestStrMap[current]) {
              shortestStrMap[current] = false;
          }
        });
    });
    console.log(shortestStrMap);  
};


    
assert.equals(
  longestCommonPrefix(['12345', '234', '55555555']), 
  "", "nothing");

assert.equals(
  longestCommonPrefix(['12345', '123', '12']), 
  "12");

assert.equals(
  longestCommonPrefix(['happy', 'hap', 'ha']), 
  "ha");

assert.equals(
  longestCommonPrefix(['mooo', 'booo', 'shoe']), 
  "", "nothing");

assert.equals(
  longestCommonPrefix(['thisisareallylongstring', 'thisisareallylongstring', 'thisisareallylongstring']), 
  "", "thisisareallylongstring");