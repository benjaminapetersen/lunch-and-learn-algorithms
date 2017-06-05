'use strict';

// implementation
var binarySearch = function(list, item) {
  var min = 0,
      max = list.length,
      guessIndex,
      guess;

  while(min <= max) {
    guessIndex = Math.floor((min + max)/2);
    guess = list[guessIndex];
    if(guess === item) {
      return guessIndex;
    } else if(guess < item) {
      min = guessIndex + 1;
    } else if(guess > item) {
      max = guessIndex - 1;
    }
  }
  return -1;
};

// test
var numbers = [1,2,3,4,5,6,7,8,9,10];
var states = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois Indiana','Iowa',
  'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
  'Minnesota','Mississippi','Missouri','Montana Nebraska','Nevada',
  'New Hampshire','New Jersey','New Mexico','New York','North Carolina',
  'North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania Rhode Island',
  'South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
  'Virginia','Washington','West Virginia','Wisconsin','Wyoming'
];


console.log('search', 4, binarySearch(numbers, 4));
console.log('search', 'Michigan', binarySearch(states, 'Michigan'));
