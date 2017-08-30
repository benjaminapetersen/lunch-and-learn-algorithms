// The Sieve of Eratosthenes is an ancient algorithm for finding
// all primes up to a given limit.
//
// I'm looking at this since I'm intrigued by the relationship of
// prime numbers & cryptography.
//
// once we calculate a set of primes, store them for future use
var cache = [];

function numList(limit) {
  var arr = [];
  var i = 0;
  for (i; i <= limit; i++) {
    arr.push(i);
  }
  return arr;
}

function removeMultiples(num, list) {
  for(var i = num; i < limit; i + num) {
    // TODO: next step...got too late to keep going here :)
  }
}

// TODO: make this work
function sieve(limit) {
  var i = 2;  // 0,1 are not prime, skip them
  var intsToLimit = numList(limit);  // 10 -> [0,1,2,3,4,5,6,7,8,9,10]
  var primes = [];
  for(i; i < limit; i++) {
    if(typeof intsToLimit[i] === 'number') {
      primes.push(i); // add it
      removeMultiples(i, intsToLimit);

    }
  }
}


// quick tests.
console.log(sieve(5), 3); // 2,3,5 are prime
console.log(sieve(10), 4); // 2,3,5,7 are prime
console.log(sieve(20), ); // 2,3,5,7, 11, 13, 17, 19 are prime
