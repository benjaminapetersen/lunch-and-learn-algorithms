# Remove Element

- Leet Code Problems: 
    - https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150
- Replit.com link for my work:

## Summary

Something...

## Working out conceptually

```javascript
// for a given set of days and prices,
// such that:
// day 0: $5 (did not zero index array)
// day 1: $3
// day 5: $10 
// day 10: $20
[5,3,5,2,5,10,5,11,5,5,20,5,5,1,15,5,5]

// the correct optimal algorithm functions like this:
// 0.
boughtAt=5
bestProfit=0
nextPrice=3
  If 3 < 5
    BoughtAt=3
soldAt = 3 - 3   // same day
bestProfit = 0   // still 0

// 1.
boughtAt=3
nextPrice=5
If 5 < 3
   Nope
soldAt = 5 - 3 = 2  // sell today, some profit
bestProfit = soldAt = 2   // changed

// 2.
boughtAt=3 // still 
nextPrice=2
If 2 < 3
  boughtAt = 3
soldAt = 2 - 2 = 0;
bestProfit=2 // unchanged 

// 3. 
boughtAt=2 // changed
nextPrice=5
If 5 < 2
  // nope
soldAt = 5 - 2 = 3
bestProfit = 3

// 4.
boughtAt = 2
nextPrice = 10
If 10 < 2
  // nope
soldAt 10 - 2 = 8
bestProfit = 8 || 3 = 8

// 5.
boughtAt=2
nextPrice=5
If 5 < 2
  // nope
soldAt = 5 - 2 = 3
bestProfit = 3 || 8 = 8

// 6.
boughtAt = 2
nextPrice = 11
If 11 < 2
  // nope
soldAt = 11 - 2 = 9
bestProfit = 9 || 8 = 9

// 7.
boughtAt = 2
nextPrice = 5
If 5 < 2
  // nope
soldAt = 5 - 2 = 3
bestProfit = 9 || 3 = 9

// 8. repeat 5
// 9.
boughtAt=2
nextPrice=20
If 20 < 2
  // nope
soldAt = 20 - 2 = 18
bestProfit = 18 || 9 = 18

// 10. Repeat 5
// 11. Repeat 5

// 12.
boughtAt = 2
nextPrice = 1
If 1 < 2
   boughtAt=1 // update
soldAt = 1-1=0
bestProfit = 18 || 0 = 18

// 13.
boughtAt = 1
nextPrice = 15
If 1 < 15
  // nope
soldAt = 15 - 1 = 14
bestProfit = 18 || 14 = 18

// Initially it seems something could be missed.
// But since we cache the best "buy low sell high" price
// before we cache a new "buy low" we can 
// now focus on just the new "buy low" price against future 
// "sell high" prices, and return the cached best sell if we 
// never beat it again.
// if we beat it, we cache the new best price.
//
// concern 1:
[2,20… 3, 30…… 4, 40….. 5, 50]
2,50 will always be best, so we never have to test other values


// concern 2:
[10, 15…. 5, 20…. 7,21…11,17….3,19]
3,19 is best
For 5,20, bestProfit is cached at 15
We can cycle down buy price to 3 because it will always be Best Buy price
We cached a previous buy/sell price of 15
  It will stay the best price until beaten
When we get to 3,19, it will be beaten
  We will cache the new buy/sell price of 16
```

## The Code

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // cache a buy price, only update when better
  let boughtAtPrice = prices[0];
  // cache a profit value, only update when better
  let bestProfit = 0;
  // iterate
  let i = 1;
  let end = prices.length;
  while (i < end) {
    let nextPrice = prices[i];
    // anytime we find a better price, lets take it
    if (boughtAtPrice > nextPrice) {
      boughtAtPrice = nextPrice;
    }
    // if we sell same day, we make $0. this is fine.
    // we are always pinned to the lowest price.
    // we can keep comparing to the subsequent price
    // and only cache if the profit is larger
    let currentSellPrice = nextPrice - boughtAtPrice;
    // if we found better profit, we take it?
    bestProfit = Math.max(bestProfit, currentSellPrice);

    i++;
  }
  // this should be the best profit?
  return bestProfit;
};
```