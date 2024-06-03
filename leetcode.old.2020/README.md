# README


[Quickest ways to convert a string to an array](https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/)

```js
const string = 'word';

// Option 1
string.split('');
// Option 2
[...string];
// Option 3
Array.from(string);
// Option 4
Object.assign([], string);
```

## How to Crack a Google Coding Interview (Video) 
https://www.youtube.com/watch?v=uQdy914JRKQ

1.a Ask Clarifying Questions

- can the array ever be empty?
- can we always assume each element is an integer between 0-9?
- ask questions that clarify all the assumptions you may have

1.b High Level Discussion

- explain the ideas you have in concept first
  - don't use too much, or any code
  - don't waste time writing code on a solution that doesn't work in the end
  - list out several solutions
    - recursion?
    - iteration?

2.a Choose your approach
  - select the above solution you think is best, or ask the interviewer their 
    thoughts, such as "i think x is good, should i start coding with that?"
  - write your function signature
    - explain the input
    - explain the output 
    - always think with specific examples in mind

2.b Start coding 
  - explain your solution as you go

3. Test solution & discuss complexity 
  - walk through your code line-by-line 
    - use a new example input  
  - think about O(n)... 
    - can you come up with a solution that is fast?
    - must you loop, or can you map?
    - O(1) is best, always
    - O(log n) is also fanastic
  
## Top 10 Algorithsm for the Coding Interview (for software engineers) (video)
https://www.youtube.com/watch?v=r1MXwyiGi_U Part 1
https://www.youtube.com/watch?v=zHczhZn-z30 Part 2


1. Understand the fundamental algorithms or techniques that are common to most questions
  - Knowing this, you can tackle any question
  - Most questions are variations

2. Algorithsm you need to know
  1. Depth First Search
    - The fundamental graph/tree traversal algorithm
    - Sometimes things that aren't trees can be transformed into a tree
  2. Breadth First Search
    - Main difference from Depth First is the order in which you traverse child nodes
    - Difference between this and Depth first is a stack and a queue
    - Depth first approach
      - Add child nodes to stack, 
        - take last child from top, 
          - visit its children, 
            - add to the stack
              - grab the next one on top of the stack
                - add to stack
                  - etc
  3. Matching Bracket Problem (Matching Parenthesis)
    - Least convoluted way is to use a stack
  4. Hash Tables
    - cache values (memoization)
    - dynamic programming
  5. Variable/Pointer Manipulation
    - multiple variable pointer manipulations at once
    - example:
      - find the longest palindrome substring within a string
        - loop the string
        - at each character, expand out left and right to see if they match
        - return when they don't match
        - cache these with the hash table :)
  6. Reversing a Linked List
    - perhaps most important(?)
    - its a contrived algorithm, but it has a lot of uses
    - lots of questions come up around linked lists, but in reality they aren't used often
    - determining cycles in linked lists is tricky
    - duplicates in a linked list 
    - to reverse a linked list, you need 3 pointers
      - this can be a bit stressful
      - good to practice beforehand 
  7. Sorting Fundamentals
    - not necessarily memorizing how quick sort, merge sort, heap sort works
    - but understand the fundamentals behind them
      - but why is quick sort or merge sort fundamentally faster/superior to bubble sort
    - know the runtime of a sort 
      - time-space complexity
        - O(n log n)
  8. Recursion
    - rarely seen in production code
    - often used in interviews :)
    - its in theory an indicator of your fundamental problem solving skills
  9. Custom Data Structures
    - know how to construct what you need
    - examples:
      - suffix tree data structures 
    - object oriented programming
      - proper encapsulation can simplify a solution
  10. Binary Search 
    - its simple, but its fundamental
    - real world situations exist!
    - you may not get this explicitly, but it might be implicit
    - find the version of an app that started causing crashes
      - you have 10 versions
        - go to the half, check, yes, no?
          - indicates which half to split again, and again.
    - quick sort works like binary search

## What No One Tells You

- not just leetcode.com
- people like you, or don't, in first 10 seconds
- don't regurgitate memorized solutions
- real engineering requires:
  - process for reaching solution
  - analysis
  - balancing tradeoffs
  - discussing alternatives
  - team work
  - collaboration
  - accepting feedback
- HOW did you reach the answer, not IF you reach the answer?
  - trade off time and space
  - present alternative solutions
  - throughfully present the algorithm
               

# Algorithms: Graph Search, DFS and BFS

- Depth First Search
  - typically a recursive algorithm
  - called DFS because you go deep into a node before asking the children
    - problem: you may go down a long path in the wrong direction before
      going down a short path in the correct direction
- Breadth First Search
  - go level by level out 
    - if first level is not the search solution, go the next level down 
      the children. one level.  if no solution, go the next level down 
      these children, one level.  continue until the solution is found.
  - use a queue
    - then pull element, check if its final solution, if not, add its children
     

# 5 Problem Solving Tips for Cracking Coding Interview Questions
https://www.youtube.com/watch?v=GBuHSRDGZBY

1. Come up with a brute force solution
	- just do the loops
	- ask then if you should look for a more optimal solution
2. Think of a simpler version of the problem
	- this can be interesting, maybe tricky, maybe not
3. Think abou the given problem with simpler examples
	- try to notice a pattern
	- use fewer items in array (less to think about)
	- use smaller values (simpler math)
	- make a diagram or some kind of visual
4. Use a visualization
	- make a big graph of inputs and outputs
5. Test your solution on a few examples 
	- test cases find bugs and errors 

once you are happy, you can say:
	"I'm going to start writing some code" 
and then observe the interviewer
	if they look or sound happy, great
	if not, then think a bit more


# Cracking the Coding Interview (in 5 simple steps, for software engineers)
https://www.youtube.com/watch?v=JeT2tXqp4m0

# How I Negotiated My $350k Facebook Offer (software engineer salary negotiation)
https://www.youtube.com/watch?v=DSxhgejP0u4

1. Do well on the coding interview
  - This is the most powerful signal companies have about you and your abilities
  - They won't want to miss out on you
  - They will more likely offer you more
2. Knowledge: what can you get?
  - Knowledge: know the best offer you can get
    - Google: L3 entry, L4, senior, L5, etc      
      - Actuallys has an internal spreadsheet where people anonymously share compensation package
    - Facebook: E3, etc
    - Amazon, etc have similar
    - All levels have a range. [levels.fyi by triplebyte: Compensation Ranges](levels.fyi) is helpful.
3. Leverage: how can you get it?
    - Strategize around the negotiation process
    - How?
      - Competing offers are the best way to gain leverage
      - Communicate how great you have it at your current job
      - NEVER share your figures at your current job. 
        - You lose leverage!
        - Recruiter's job is to get you to accept their offer
          - And to get you in the cheapest way they can
          - NO matter how awkward, DONT TELL THEM
      - [Team Candor: Compensation Negotiation Guide](https://teamcandor.com/salary/guide)

[levels.fyi by triplebyte: Compensation Ranges](levels.fyi)
- Base salary 
  — the money you’re paid every pay period.
- Equity 
  — ownership stake in the company, could easily be half your total comp or more.
- Benefits 
  — in the US, health insurance alone can easily cost your employer $500-1000/month. Benefit packages also includes things like vacation days, free food and other perks. This is (mostly) not taxed, so you’d rather have these benefits than the equivalent in cash.
- Annual bonus 
  — percentage bonus on top of your salary based on performance, common only with public companies. The recruiter will likely quote you a "target bonus" (e.g. 15%), which is what you can expect if you meet expectations. Generally also comes with additional equity (a "refresher").
- Signing bonus 
  — one-time bonus paid out either when you sign or the day you start. Might come with a clause that you must pay it back if you leave after X months. Quite common in large tech companies, can be anywhere from $10k–$100k. Highly negotiable.
-  Other perks 
  — a whole suite of one-time or ongoing cash perks, like relocation package, phone stipend, commuter benefits, car allowance, etc.

[The Salary History Ban](https://gusto.com/blog/hiring/salary-history-ban)
