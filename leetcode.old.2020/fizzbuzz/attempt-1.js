const assert = require("../assert");

const fizz = "Fizz",
      buzz = "Buzz"
      fizzbuzz = `${fizz}${buzz}`;

const fizzBuzz = function(n) {
    let i = 0;
    let num = 1;
    let arr = [];
    while (i < n) {
      // numbers to string
      // multiples of 3 "Fizz"
      // multiples of 5 "Buzz"
      // multiples of 3 and 5 "FizzBuzz"      
      if (num % 3 === 0 && num % 5 === 0) {
        arr[i] = fizzbuzz;
      } else if (num % 5 === 0) {
        arr[i] = buzz;
      } else if (num % 3 === 0) {
        arr[i] = fizz;
      } else {
        arr[i] = ''+num;
      }      
      i++  
      num++
    }
    return arr;
};


assert.arrayEqual(fizzBuzz(15), [
  "1",
  "2",
  "Fizz",
  "4",
  "Buzz",
  "Fizz",
  "7",
  "8",
  "Fizz",
  "Buzz",
  "11",
  "Fizz",
  "13",
  "14",
  "FizzBuzz"
]);
