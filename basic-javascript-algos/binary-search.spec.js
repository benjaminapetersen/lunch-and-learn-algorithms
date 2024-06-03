console.log('hello', 1);
// jasmine-node ./binary-search.spec.js
const binarySearch = require('./binary-search').binarySearch;
console.log('hello', 2);
// test
let numbers = [1,2,3,4,5,6,7,8,9,10];
let states = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois Indiana','Iowa',
  'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
  'Minnesota','Mississippi','Missouri','Montana Nebraska','Nevada',
  'New Hampshire','New Jersey','New Mexico','New York','North Carolina',
  'North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania Rhode Island',
  'South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
  'Virginia','Washington','West Virginia','Wisconsin','Wyoming'
];
console.log('hello', 3);
// describe('binarySearch', () => {
//   console.log('hello', 4);
//   it('should search a given array for an item and return its index', () => {
//     console.log('hello', 5);
//     expect( binarySearch(numbers, 4) ).toEqual(3);
//     expect( binarySearch(numbers, 50) ).toEqual(-1);
//     expect( binarySearch(states, 'Michigan') ).toEqual(20);
//     expect( binarySearch(states, 'Mexico') ).toEqual(-1);
//   });
// });
console.log('hello', 6);


describe('binarySearch', () => {
  it('should search a given array for an item and return its index', () => {
    console.log('huh? 1', binarySearch(numbers, 4));
    console.log('huh? 2', binarySearch(numbers, 50));
    console.log('huh? 3', binarySearch(states, 'Michigan'));
    console.log('huh? 4', binarySearch(states, 'Mexico'));
    // expect( binarySearch(numbers, 4) ).toEqual(3);
    // expect( binarySearch(numbers, 50) ).toEqual(-1);
    // expect( binarySearch(states, 'Michigan') ).toEqual(20);
    // expect( binarySearch(states, 'Mexico') ).toEqual(-1);
  })
})
