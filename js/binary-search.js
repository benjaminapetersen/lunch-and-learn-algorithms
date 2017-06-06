'use strict';

exports.binarySearch = function(list, item) {
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
