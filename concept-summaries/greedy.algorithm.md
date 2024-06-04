# Greedy Algorithm

- https://www.youtube.com/watch?v=lfQvPHGtu6Q

What is a greedy algorithm?
- An algorithm that makes a greedy choice (optimal choice)
  at every single step to the solution.
- The greedy choice is defined by some rule:
    - Select the largest number
    - Select the smallest number
    - Select the element with a certain property

Greedy algorithms can be complex or simple.

## Example:

Given `nums=[3,4,-1,2,-3,0]`
Given `n=4`.

Find the `n` numbers in this array that equal the largest sum.

A greedy algoritm might:
- loop the array `nums`
- select the largest `4`.
- repeat loop, select largest `3` for `4,3`
- repeat loop, select next largest `2` for `4,3,2`
- repeat a final time to reach `n` loops, 
  select the largest remaining `0` for `4,3,2,0`
- add the nums `4,3,2,0` = `10`

The algoritm selects the largest number at each step (at each loop)
and eventually all optimal choices result in an optimal end solution.


## Greedy Algoritm Properties

If the following properties are true, you may use a greedy algorithm.

- `Greedy Choice Property`: A global (overall) optimal solution can be 
  reached by choosing the optimal choice at each step.
- `Optimal Substructure`: A problem has an optimal substructure if an
  optimal solution to the entire problem contains the optimal solutions
  to the sub-problems.

What does this mean?
-  A global (overall) optimal solution
    can be reached 
        by choosing the optimal choice 
            at each step
- A problem has an optimal substructure 
    if an optimal solution 
        to the entire problem 
        contains the optimal solutions
            to the sub-problems

## Example: The Fractional Knapsack Problem

Given a knapsack capacity of `25`, how do we fill it with as much 
`value` as possible without going over the `size` (capacity).
We are allowed to select fractional portions of each item. 
For example, a 1/2 fraction of item 1 is size 10 value 4.5.

Given
- `capacity=25`

Item | Size | Value
---------------------
0       22      19
1       10       9
2        9       9
3        7       6

How to use a greedy algorithm to solve the problem?