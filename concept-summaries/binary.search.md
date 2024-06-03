## Binary Search Trees

A binary tree looks 

```tree
├── Node 1
    └── N1.Child 1
    │   ├── N1.C1.Grandchild 1
    │   │   └── N1.C1.G1.Great-grandchild 1
    │   ├── N1.C1.Grandchild 2
    │       └── N1.C1.G2.Great-grandchild 1
    │       └── N1.C1.G2.Great-grandchild 2
    └── N1.Child 2
        ├── N1.C2.Grandchild 1
        │   └── N1.C2.G1.Great-grandchild 1
        │   └── N1.C2.G1.Great-grandchild 2
        ├── N1.C2.Grandchild 1
```
A binary tree:
- Each element has a right and left child
    - If the left and right are ordered (left means "less than"), then it is a binary search tree

A binary search tree:
- A binary tree with each element having an ordered right and left child node, with the left node meaning "less than".

A red-black binary search tree:
- Used in database engines.
- Includes precise rules of coloring nodes.
- Assesses that the length of any path is not more than twice that of 
  any other (path to a node).

Access is O(log(n)) on average, O(n) worst case
- `O(n)` is linear performance impact with growth of data set
- `O(log(n))` is linear time increase but exponential data set increase. Fantastic performance.

A balanced tree should have roughly the same weight on both sides of the tree.
Balancing has a cost.  Maintaining balance at each step is likely not efficient 
or reasonable.  