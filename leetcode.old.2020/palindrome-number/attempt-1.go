package main

import "strconv"

func main() {
	fmt.Println(121, "should be true", isPalindrome(121))
	fmt.Println(-121, "should be true", isPalindrome(-121))
	fmt.Println(10, "should be true", isPalindrome(10))
	fmt.Println(-101, "should be true", isPalindrome(-101))
}

// first pass
// - convert to a string
//   str := strconv.Atoi(x)
// - split the string into a slice/array
// - create a second slice
// - copy each digit into the second slice:
//   12345
//   54321
// - iterate over each slice, checking if i == j
// - if true for each index, then the int is a palindrome
// - simple and straight forward, but requires iterating
//   over the int several times to get to a solution.
//
// second pass
// - convert to a string
// - split the string into a slice/array
// - iterate the string
//   - str[i] == str[len(str) -1 - i]
// - if true for each index, then the int is a palindrome
// - improve performance by finding the "middle"
//   - may be a single value
//     - don't have to test this, we are good
//   - may be two values closes to center
//     - test this as normal
//   - once center is found, can stop iteration at this point
//
// third pass
// - is there a way to not convert to a string?
//   - need to look into iterating over the digits of an int
func isPalindrome(x int) bool {	

}