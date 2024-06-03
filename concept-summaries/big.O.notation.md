# Big-O notation

- `O(1)` means in constant time - independent of the number of items.
- `O(N)` means in proportion to the number of items.
- `O(log N)` means a time proportional to `log(N)`.

Any 'O' notation means an operation will take time up to a maximum of `k*f(N)`
where `k` is a constant multiplier and `f()` is a function that depends
on `N`.

- `O(n^2)` means `n*n`: 1 for 1 item, 4 for 2, 9 for 3, etc.
  - This is an algorithm with poor performance tradeoffs.
- `O(n)` and `O(n/2)` are considered the same and written as `O(n)` because
  performance is generally compared in terms of order of magnitudes.


Some basic comparisons
- `O(n)` is linear performance impact with growth of data set.  This is fine performance,
   perhaps a benchmark.
- `O(log(n))` is linear time increase but exponential data set increase. Fantastic performance.

## Bi-O on Speed

- Big-O cannot actually compare the speed of two algorithms
- Big-O only says how much slower an algorithm will get if 
  you double the number of items processed, or how much faster
  if you cut the number of processed items in half.

For example:
- Algorithm A is O(n^2)
- Algorithm B is O(log n)

It is not true that A is slower than B.
- For 100 items, A might be ten times faster than B.
- If 200 items, A will grow slower by the factor `n^2` and B will 
  grow slower by the factor `log n`
- Therefore, you can benchmark both algorithms and then learn at what 
  point (number of items processed) that B will overtake A in terms of 
  speed.
- The speed of Algorithm B decreases at a much slower rate than the 
  speed of Algorithm A because of the complexities and optizations introduced
  in Algorithm B.  For this reason, Algorithm B may be slower with a small set. 
  There needs to be sufficient data to warrant the use of the more complex 
  algorithm.

Example:
- [1,2,3]
- {"one": 1, "two": 2, "three": 2}

- Finding `2` in an array of three items is trivial, the traversal of the array
is relatively cheap until the array gets larger.  Each node must be visited, but
few nodes are visited.  As the array grows, every additional node adds a 
performance penalty.
Finding the `2` in the hash table is very simple, except that the hash is 
implemented with an array under the hood.  There is a performance penalty in 
hashing the keys into indices. Indeed, a hash table is implemented with an 
array of arrays.  Therefore there is a performance penalty and a memory penalty.
For small amounts of data and few inserts and retrievals, either can be used
by the programmer.  As performance needs increase the decision becomes more
important. 


## A Beginner's Guide to Big O Notation

https://robbell.io/2009/06/a-beginners-guide-to-big-o-notation

- Big O Notation is used in Computer Science to describe the performance or complexity
  of an algorithm.  
- `Big O specifically describes the worst-case scenerio`.
- Big O describes the execution time requried or the space used (memory or on disk)
  by an algorithm.

- Logarithmic time complexity `log(n)`.
    - For more: https://en.wikipedia.org/wiki/Logarithm
- `Big O` notation for logarithmic time complexity is `O(log n)`.

### Notation: O(1)

`O(1)` describes an algorthim that will always execute in teh same time (or space)
regardless of hte size of the input data set.

```java
// One check to determine the answer to the algorithm
bool IsFirstElementNull(IList<String> elements) {
    return elements[0] == null;
}
```

```golang
elems := []string{"foo", "bar"}
func IsFirstElementNull(elements []string) bool {
	return elements[0] != ""
}

fmt.Printf("what is it: %v\n", IsFirstElementNull(elems))           // false
fmt.Printf("what is it: %v\n", IsFirstElementNull([]string{""}))    // true, golang empty string is falsy
fmt.Printf("what is it: %v\n", IsFirstElementNull([]string{}))      // error! golang null slice, the slice itself is null
```

```typescript
let elems: string[] = ['foo', 'bar'];
function IsFirstElementNull(elements: []string): boolean {
    return !!elements[0];
}
console.log(IsFirstElementNull(elems)); // false
```

### Notation: O(N)

`O(N)` describes an algorithm whose perofrmance will grow linearly.  
This means the algorithm will slow down in direct proportion to the size of the input
data set.

Note that Big O favors the worst case performance scenerio.
For a set of 10 items, the algorithm could but found during any iteration of the loop,
but Big O describes the upper limit. In this situation, worst case is 10.

```java
bool ContainsValue(IEnumerable<string> elements, string value) {
    foreach(var element in elements) {
        if (element == value) return true;
    }
    return false;
}
```

```golang
func ContainsValue(elems []string, value string) bool {
    for _, elem := range elems {
        if elem == value {
            return true
        }
    }
    return false
}
```

```typescript
function ContainsValue(elems: string[], value: string): boolean {
    for (let i = 0; i < elems.length; i++) {
        if (elems[i] == value) {
            return true;
        }
    }
    return false;
}
```

## Notation: O(N^2)

`O(N^2)` represents performance proportional to the number of items in the data set squared.
This is common for algorithms requiring nested iterations (loops within loops).
Deep nesting may result in `O(N^3)`, `O(N^4)`, etc.

```java
bool ContainsDuplicates(IList<string> elements) {
    for(var outer = 0; outer < elements.Count; outer++) {
        for (var innter = 0; inner < elements.Cout; inner++) {
            // don't compare with self
            if (outer == inner) continue;
            if(elements[outer] == elements[inner]) return true;
        }
    }
    return false;
}
```

```golang
func ContainsDuplicates(list []string) bool {
    for outerI, outerElem := range elems {
        for innerI, innerElem := range elems {
            if (outerI == innerI) {
                // dont compare with self
                contine;
            }            
            if (outerElem == innerElem) {
                return true;
            }
        }
    }
    return false;
}
```

```typescript
function ContainsDuplicates(elems: string[]): boolean {
    const len = elems.length
    for (let outerI = 0; outerI < len; innerI++) {
        for(let innerI = 0; innerI < len; innerI++) {
            if outerI == innerI {
                // dont compare with self
                continue;
            }
            if (elems[outerI] == elems[innerI]) {
                return true;
            }
        }
    }
    return false;
}
```

## Notation: O(2^N)

`O(2^N)` Denotes an algorithm whose growth doubles with each additional 
item added to the data set.  The growth curve is exponential.  
Initially the algorithm is cheap but quicky becomes astoundingly expensive.

Recursive Fibonacci is an example of `O(2^N)`. This approach to Fibonacci 
can be solved with much more efficient versions.

```java
int Fibonacci(int number) {
    if (number <= 1) return number;
    return Fibonacci(number - 2) + Fibonacci(number - 1);
}
```

```golang
func Fibonacci(num int) int {
    if num <= 1 {
        return num
    }
    return Fibonacci(num - 1) + Fibonacci(num - 2)
}
```

```typescript
function Fibonacci(num: number): number {
    if (num <= 1) {
        return num;
    }
    return Fibonacci(num - 2) + Fibonacci(num - 1);
}
```

### Logarithms

Binary Search is a good example of an `O(log N)` algorithm.
Binary search halves the data set on each iteration, eliminating a 
significant number of unnecessary iterations.
Ironically, small data sets have a relatively poor performance given 
the size of the data, but with large (and huge!) data sets, Binary Search
has fantastic performance.
The growth curve expense of Binary Search peaks at the beginning.
The growth curve of expense of Binary Search flattens as the data set increases
in size.

Example:
- If a data set containing 10 items costs 1 second to complete, and
- a data set of 100 items costs 2 seconds to complete and
- a data set of 1000 items costs 3 seconds to complete
- etc.

This shows that doubling the size of the input data, even into billions of 
records, has marginal impact on the actual computation time cost of the 
algorithm.

`O(log N)` is a fantastically efficient algorithm.