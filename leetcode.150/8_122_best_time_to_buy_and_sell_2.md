# Remove Element

- Leet Code Problems: 
    - https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150
    - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150
- Replit.com link for my work:
    - https://replit.com/@BenjaminPeterse/leetcode150#8_122_best_time_to_buy_and_sell_2.js

## Summary

You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.
Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.


## The Code

borrowed from a submitted algorithm.
This version follows the "greedy algorithm" pattern.
When to use `greedy`?
Given [this YouTube Video](https://www.youtube.com/watch?v=HzeK7g8cD0Y)
- Greedy choice property: When a globally optimal solution can be arrived at by 
  selecting a local optimal solution.
- Optimal substructure: When  an optimal solution to the problem contains an
  optimal solution to subproblems.
The main difference between `greedy` and `dynamic programming` is that greedy 
never reconsiders its choices.  Dynamic programming is exhaustive and guaranteed
to find a solution.

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {      
  let bestProfit = 0;
  let boughtAt = prices[0];
  let end = prices.length;
  let i = 1;
  while (i < end) {
    let nextPrice = prices[i];
    if (boughtAt < nextPrice) {
      bestProfit += nextPrice - boughtAt;
    }
    boughtAt = prices[i]; 
    i++;
  }
  return bestProfit;
};
```

## explained

```javascript

/**
 * @param {number[]} prices
 * @return {number}
 */
// given: [7, 1, 5, 3, 6, 4]
var maxProfit = function (prices) {
    // initially we have made nothing
    let bestProfit = 0; 
    // and we start with the first value
    let boughtAt = prices[0];
    // and we need iterators
    let end = prices.length;
    let i = 1;
    while (i < end) {
        // as with the orig version, we capture the next price
        let nextPrice = prices[i];
        // 7 < 1 ? no.
        // 1 < 5 ? yes.
        // 5 < 3 ? no.
        // 3 < 6 ? yes.
        // 6 < 4 ? no.
        if (boughtAt < nextPrice) {
            // if the above passes, 
            // we add.
            // so intiially 5 - 1 = 4.
            // then, 6 - 3 = 3, 4+3=7
            // that's it.
            bestProfit += nextPrice - boughtAt;
        }
        // always cycle to the next price.
        // this is surprising.
        boughtAt = nextPrice;
        i++;
    }
    return bestProfit;
};
```