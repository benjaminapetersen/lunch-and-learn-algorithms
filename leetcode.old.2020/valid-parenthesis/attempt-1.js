const assert = require("../assert");

// code
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s === '') {
      return true;
    }
    const chars = s.split('');
    // at present, we don't allow other characters so odd length indicates a mismatch
    if (chars.length %2 !== 0) {
      return false;
    }
    
    // 1. break the string into characters
    // 2. process the string
    //    - an open can be followed by a close of the same type
    //    - an open can be followed by an open of the same type
    //    - an open can be followed by an open of a different type
    //    - an open cannot be followed by a close of a different type
    //    - a close can be followed by an open of the same type
    //    - a close can be followed by an open of a different type
    //    - a a close can be followed by a close of the same type IF
    //      - the following close matches the open of the previously opened type
    //      - this may be several characters back
    //    - a close can be followed by a close of a different type IF
    //      - the following close matches the open of the previously opened type
    //      - this may be several characters back
};


assert.equals(1, 1, "A message!");
assert.equals(isValid(''), true, 'empty string');
assert.equals(isValid('()'), true);
assert.equals(isValid('[]'), true);
assert.equals(isValid('{}'), true);
assert.equals(isValid('()[]'), true);
assert.equals(isValid('()[]{}'), true);
assert.equals(isValid('[]{}()'), true);
assert.equals(isValid('{}()[]'), true);
assert.equals(isValid('{'), false);
assert.equals(isValid('('), false);
assert.equals(isValid('['), false);
assert.equals(isValid('[[]'), false);
assert.equals(isValid('([]'), false);
assert.equals(isValid('{[]'), false);
assert.equals(isValid('(]'), false);
assert.equals(isValid('([)]'), false);
assert.equals(isValid('{[]}'), true);
assert.equals(isValid('{{{[][]()]]]]'), false);

