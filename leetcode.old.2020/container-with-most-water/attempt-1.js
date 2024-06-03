const assert = {
  equals: (a,b) => {
    if (JSON.stringify(a) !== JSON.stringify(b)) {
      console.error(a, 'does not equal', b);
    }
  }
}


/**
 * @param {number[]} height
 * @return {number}
 */
// maxArea(heights:[]number): number
//
// - n will always be at least 2
// - index of heights is i
// - value is
//   - distance between two points heights[a] - heights[b] = x
//   - multiplied by height of the shorter of the two points = y
// - compute many values
//   - return greatest value
// - brute force will be a loop. there may be a more optimal solution to this
//   - patterns may reveal that we can be clever and only compute some values
const maxArea = function(heights) {
    // do i need to store many? no.
    // just the best.
    let bestValue = 0;
    // and i don't need to store the coords.

    for(let outerI = 0; outerI < heights.length; outerI++) {
      let outerHeight = heights[outerI];
      for(let innerI = 0; innerI < heights.length; innerI++) {
        let innerHeight = heights[innerI];
        const heightLimit = Math.min(outerHeight, innerHeight);
        const distance = Math.abs(outerI - innerI);
        const value = heightLimit * distance;
        if (value > bestValue) {
          bestValue = value;
        }
      }  
    }

    // heights.forEach((outerHeight, outerI) => {
    //   heights.forEach((innerHeight, innerI) => {
    //     const heightLimit = Math.min(outerHeight, innerHeight);
    //     const distance = Math.abs(outerI - innerI);
    //     const value = heightLimit * distance;
    //     if (value > bestValue) {
    //       bestValue = value;
    //     }
    //   });
    // });

    return bestValue;
};


assert.equals(maxArea([1,8,6,2,5,4,8,3,7]), 49);