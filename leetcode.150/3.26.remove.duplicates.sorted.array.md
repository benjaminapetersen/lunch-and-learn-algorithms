# Remove Element

- Leet Code Problems: 
    - https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150
    - https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
- Replit.com link for my work:
    - https://replit.com/@BenjaminPeterse/leetcode150#3_remove_duplicates_sorted_array.js

## Summary


## The Code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    // base case: always handle first
    if(nums.length === 0) {
        return 0;
    }
    // count of unique elements
    // if any elements in array we have at least 1        
    let unique = 1; 
    // the slow iterator will keep track of when to insert items
    let slowI = unique - 1;
    // now we need to iterate nums
    // starting with index=1, the second element, we can compare.
    for(let fastI = 1; fastI < nums.length; fastI++) {
        // the next item to compare based on our iterator
        let next = nums[fastI];
        // our slow iterator tracks where our current unqiue num is.
        let current = nums[slowI];
        // whenever they do not match, we get to do something.
        if(next !== current) {
            // we use unique instead of slowI to move the 
            // unique number forward.  this is because it is 
            // unique.  we do not want to overwrite the current
            // item at nums[slowI];
            nums[unique] = nums[fastI];
            // it is a little inefficient tracking both and 
            // incrementing both, but its clear.
            unique++;
            slowI++;
        }        
    }
    return unique;
};
```