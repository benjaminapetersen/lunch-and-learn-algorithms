// from my replit acct where i setup a simple template:
// https://replit.com/@BenjaminPeterse/jsalgos#template.js


// TODO: require() in index.js
const assert = require("assert").strict;

const moduleName = "Shizzle";
console.log(`${moduleName} loaded \n--------`);

// TODO: "rename all occurances" somethingX will transform
// this into a file specifically usable for
// solving an algorithm.
function somethingX(n) {
  return n;
}

// an improved version of somethingX
// in terms of Big-O notation, if I have
// chosen to further optimize this function
// function somethingXOptimized(n) {
//   return n;
// }

module.exports = {
  somethingX,
  // somethingXOptimized,
};

console.log(`${moduleName} test cases`);

let testFunctions = [
  [`${moduleName}`, somethingX],
  // [`${moduleName}Optimized`, somethingXOptimized],
];

// input, output pairs
let testCases = [
  [[-5, 2, 10, 4, 6], 10, 2],
  [[-5, 2, 10, 4, 6], 6, 4],
  [[-5, 2, 10, 4, 6], -3, -1],
  [[-5, 2, 10, 4, 6], 55, -1],
  [[-5, 2, 10, 4, 6], -5, 0],
];

for (let funcI = 0; funcI < testFunctions.length; funcI++) {
  let funcName = testFunctions[funcI][0];
  let funcToTest = testFunctions[funcI][1];
  console.log(`\n${funcName}() test cases\n--------`);
  for (let testI = 0; testI < testCases.length; testI++) {
    let testInput = testCases[testI][0];
    let testInput2 = testCases[testI][1];
    let testOutput = testCases[testI][2];
    console.log(
      `${funcName}(${testInput}, ${testInput2})`,
      funcToTest(testInput, testInput2),
      `solution: ${testOutput}`,
    );
    assert.equal(funcToTest(testInput, testInput2), testOutput);
  }
}

console.log("finish");
