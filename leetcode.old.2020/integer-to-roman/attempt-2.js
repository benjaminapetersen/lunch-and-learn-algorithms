const assert = {
  equals: (a,b) => {
    if(JSON.stringify(a) !== JSON.stringify(b)) {
      console.error(a, 'does not equal', b);
    }
  }
}

// had to cheat a bit on this one:
// // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-21.php
// we can go up to 3999
const numerals = [
  // 1000-3000
  "", "M", "MM", "MMM",
  // 100-900
  "","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
  // 10-90
  "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
  // 0-9
  "","I","II","III","IV","V","VI","VII","VIII","IX"
];

const intToRoman = (val) => {
  const digits = (""+val).split("");
  let result = "";
  // if we just always iterate all four times, 
  // we don't need logic here
  let i = 0;
  console.log('val', val, 'digits', digits);  
  while (i < 3) {
    // if i is 0, no shift, else 
    // we will get back numbers like 10, 20, etc    
    let next = digits[i] + (i * 10); // this is clever, but I'm missing something...
    console.log('next?', digits.pop(), i, next);
    let retrieve = numerals[next];
    result += retrieve; 
    i++;
  }
  console.log('----------');
  return result;
} 

assert.equals(intToRoman(3), "III");
// assert.equals(intToRoman(4), "IV");
// assert.equals(intToRoman(9), "IX");
// assert.equals(intToRoman(58), "LVIII");
// assert.equals(intToRoman(1994), "MCMXCIV");
