'use strict';

// good illustration:
// http://www.algolist.net/Algorithms/Sorting/Insertion_sort
// in essention, insertionSort swaps backwards, modifying the
// array in place
exports.insertionSort = function(unsortedList) {
  var length = unsortedList.length,
      unsortedI = 0,
      sortedMaxI,
      currentItem;

  // standard iteration. the second level is trickier
  for(unsortedI; unsortedI < length; unsortedI++ ) {
    // - the current item is the one we will swap
    // - we pluck it out of its position, leaving a vacancy
    //   then while it is larger than the previous items
    //   swap them up one position
    //   until it is no longer larger
    //   then drop it into the current vacant position
    currentItem = unsortedList[unsortedI];
    sortedMaxI = unsortedI - 1;
    // inner iterator
    // - works on the subset of unsortedList that has already been sorted
    // - iterates backwards, from the last sorted point to the beginning
    // - sortedMaxI must be greater than 0 else we have hit the beginning of the array
    // - sortedMaxI must be larger than each item encountered, if not we have found the insertion point
    // - when sortedMaxI is not larger, shift the item up 1 index
    //   - first item will take sortedMaxI's original index, increasing the sorted
    //     subset of the array by 1
    //   - each item encountered after the original will shift up 1 index,
    //     unless sortedMaxI is no longer larger, then sortedMaxI will take the current vacant spot
    for(; sortedMaxI >= 0 && unsortedList[sortedMaxI] > currentItem; --sortedMaxI) {
      // cycle up 1 index, this item is larger
      unsortedList[sortedMaxI+1] = unsortedList[sortedMaxI];
    }
    // once unsortedList[sortedMaxI] > currentItem is no longer true, insert currentItem at sortedMaxI+1
    unsortedList[sortedMaxI+1] = currentItem;
  }
  return unsortedList;
};
