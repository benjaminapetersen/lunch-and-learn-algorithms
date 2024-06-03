package main

import "fmt"

func main() {
	first := lengthOfLongestSubstring("abcabcbb")
	fmt.Println(first, "should be", 3)

	second := lengthOfLongestSubstring("bbbbb")
	fmt.Println(second, "should be", 1)

	third := lengthOfLongestSubstring("pwwkew")
	fmt.Println(third, "should be", 3)
}

func lengthOfLongestSubstring(s string) int {
	// brute force solution
	// two pass iteration of the string
	// iterate the string to choose the starting letter
	// then, iterate again, checking if current char matches any char already used
	// if so, stop, store the string in a map
	// in the end, compare the lengths of all the strings
	// return the longest string
	// to make this more efficient, we can store the length of the string immediately?
	// - check the string length
	// - longest := this string
	// - update longest if the next string length is greater

	// for i := 0; i < len(s); i++ {
	// 	used := make(map[byte]bool)

	// 	str := s[i]
	// 	used[s[i]] = true
	// 	// start j at i
	// 	for j := i + 1; j < len(s); j++ {
	// 		if used[s[j]] == true {
	// 			break
	// 		}
	// 	}
	// }

	// a string is a slice of runes
	runes := []rune(s)
	// string := string(runes) to convert back

	// we don't care about the previous values, so just keep track of this.
	// longestString := []rune{}
	longestStringLength := 0

	// example string: "abcabcbb"
	// character by character, we do a check
	for i, _ := range runes {
		used := map[rune]bool{}
		current := []rune{}
		currentLength := 0

		// naive, just skip if j < i
		// we could instead take a substring from whatever step we are on...
		sub := runes[i:]

		for _, char := range sub {
			if(!used[char]) {
				used[char] = true
				current = append(current, char)
				currentLength = len(current)
				if(currentLength > longestStringLength) {
					longestStringLength = currentLength
					// we don't even actually care about this!
					// longestString = current 
				}
			} else {
				break 
			}

		}
	}
	return longestStringLength
}
