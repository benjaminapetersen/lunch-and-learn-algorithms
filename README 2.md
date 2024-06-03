# Back to Back SWE
YouTube Channel Algorithms Discussions

## Generate All Strings With n Matched Parenthesis - Backtracking
  ("Generate Parenthesis" on LeetCode)
  https://www.youtube.com/watch?v=sz1qaKt0KGQ

### 3 keys to recursion:
  - 1. Our Choice
  - 2. Constraints
  - 3. Our Goal

Given a string (of code), with n sets of parenthesis, the output will look 
like one of the following:
  - 1 set of parenthesis:  ["()"]
  - 2 sets of parenthesis: ["(())", "()()"]
  - 3 sets of parenthesis: ["((()))","(()())","(())()","()(())","()()()"]
  - etc

3 keys to recursion applied to Backtracking:
  - 1. Our Choice
    - at each stage, do i open a bracket or close
    - Place a "(" or a ")"
  - 2. Our Constraints
    - cannot open more brackets than the number n brackets given
      - if n=3, cannot have 4 open brackets
    - cannot close a bracket that has not been opened
      - if 0 left brackets, cannot place a right bracket 
    - so:
      - cannot place more left brackets than "n"
      - cannot place a right bracket if a left bracket has not been placed 
  - 3. Our Goal
      - we must place n*2 characters
        - one open and one closed bracket for n

## Max Contiguous Subarray Sum - Cubic Time To Kadane's Algorithm ("Maximum Subarray" on LeetCode)
https://www.youtube.com/watch?v=2MmGzdiKR9Y

- From Cracking the Coding interview
  - When optimizing an algorithm, look for:
    - Bottlenecks
    - Unnecessary work
    - Duplicate work

## BUD: Bottlenecks, Unnecessary Work, Duplicate Work

### Bottlenecks

### Unnecessary Work

### Duplicate Work