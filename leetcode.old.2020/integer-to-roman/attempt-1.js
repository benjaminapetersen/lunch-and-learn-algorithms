// FAIL!!!!
// DIDN"T THINK THROUGH THE PLAN FIRST/
// MUST DESCRIBE A FEW SOLUTIONS BEFORE SETTING OUT TO IMPL
const assert = {
  equals: (a,b) => {
    if(JSON.stringify(a) !== JSON.stringify(b)) {
      console.error(a, 'does not equal', b);
    }
  }
}


/**
 * @param {number} num
 * @return {string}
//  */
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// intToRoman(num:number):string
// range: 1 to 3999
// Subtraction rules
// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
const symbols = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M"
}

const zeroToNine = {

};
  // iterate 
  // 1: I
  // 2: II
  // 3: III
  // 4: IV
  // 5: V
  // 6: VI
  // 7: VII
  // 8: VIII
  // 9: IX
  // 10: X
  // 11: XI
  // 20: XX
  // 30: XXX
  // 40:  XL
  // 50:  L
  // 90: XC 
  // 100: C
  // 110: CX
  // 490: CDXC  // CD = 500-100, XC = 100-10
  // 500: D
  // 510: DX
  // 1994: MCMXCIV // M=1000, CM= 1000-100(900), XC= 100-10(90), IV = 5-1(4)
const toRomanNumeral = (val) => {
  // if i wanted to be friendly, i'd take either string or number
  const toTransform = (''+val).split(''); // [9], [9,0], [9,0,0], [9,0,0,0]
  const length = toTransform.length; // how many digits is important
  // PROBLEM: 
  // - at the 9s things transition to the subtractive method
  // - this doesn't necessarily break our approach, but it does change the impl a bit.
  // 1,2,3...9
  if(length === 1) {
    // tempting to use 1-10 as map...
    return zeroToNine[val]; // a hash is not great, we need to compute this.
  }
  // 10, 20, 30...90
  if(length === 2) {
    return tenToNinetyNine[val]; // a hash is not great, we need to compute this.
  }
  // 100,200,....900
  if(length === 3) {
    return oneHundredToNineHundred[val]; // a hash is not great, we need to compute this.
  }
  // 1000,2000...9000
  if(length === 4) {
    return oneThousandToNineThousand[val]; // a hash is not great, we need to compute this.
  }
}

const intToRoman = function(num) {
  // as a string, its easier to iterate over the characters
  const numStr = ""+num;
  let roman = "";
  
  let set = numStr.split('').map((char, i) => {
    if(i === 0) {
      return char;
    }
    if(i === 1) {
      return char + '0';
    }
    if(i === 2) {
      return char + '00';
    }
    if(i === 3) {
      return char + '000';
    }
  }).map((value) => {
    return toRomanNumeral(value);
  });
  // return new
  return set;
};

// Example 1:

// Input: 3
// Output: "III"

// Example 2:

// Input: 4
// Output: "IV"

// Example 3:

// Input: 9
// Output: "IX"

// Example 4:

// Input: 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.

// Example 5:

// Input: 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
// assert.equals(intToRoman(3), "III");
// assert.equals(intToRoman(4), "IV");
// assert.equals(intToRoman(9), "IX");
// assert.equals(intToRoman(58), "LVIII");
assert.equals(intToRoman(1994), "MCMXCIV");
