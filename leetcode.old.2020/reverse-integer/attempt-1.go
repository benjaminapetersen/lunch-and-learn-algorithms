package main

import (
	"fmt"
	"strconv"
	"os"
)

func main() {
	//fmt.Println(reverse(123), "should be", 321)
	fmt.Println(reverse(-123), "should be", -321)
	//fmt.Println(reverse(120), "should be", 21)
	//fmt.Println(reverse(0), "should be", 0)
}

func reverse(x int) int {
	// - first, convert it to a string so we can work with the runes
	str := strconv.Itoa(x)
	length := len(str)
	// rIdx := length - 1
	result := make([]rune, length)
	//fmt.Println("before?", str, length, result)
	for i, rune := range str {
		fmt.Println("what is", i, rune, string(rune), string(rune) == "-")
		if i == 0 {			
			if string(rune) == "-" {
				// result[0] = rune
				result = append(result, rune)
				fmt.Println("iterating result:", result, string(result))
				continue
			}
			// result[rIdx - i] = rune 			
			result = append(result, rune)
		} else {
			// result[rIdx - i] = rune
			result = append(result, rune)
		}
		fmt.Println("iterating result:", result, string(result))
	}
	
	fmt.Println(x, "is now", ">" + string(result) + "<")
	return len(string(result))
	
	// fmt.Println("after?", str, length, result, string(result))
	// - iterate over the runes, adding them to a new string in reverse order
	// - however, catch the first rune, if it is a sign (-), it should remain in first place
	// - return the string
	i, err := strconv.Atoi(string(result))
	if err != nil {
		fmt.Println("cannot convert", ">" + string(result) + "<", "to integer:", err)
		os.Exit(1)
	}
	return i
}


// func reverse(x int) string {
// 	// - first lets turn it into a string.
// 	str := strconv.Itoa(x)
	
// 	// - get the length of the string so we can 
// 	//   put it back together in reverse order 
// 	//   as there is not a reverse range in golang
// 	length := len(str) 
// 	revi := length - 1
// 	fmt.Println("length of", str, "is", length)
// 	fmt.Println("reverse index starts with", revi)

// 	// - create the result rune slice
// 	result := make([]rune, length) 
	
// 	// - check the first char for a negative sign
// 	//   if sign exists, maintain its first position
// 	//   in the result 
// 	sign := str[0]
// 	fmt.Println("Sign?", sign, string(sign))
// 	if (string(sign) == '-') {
// 		result[0] = sign
// 		str = str[1:]
// 	}	
	
// 	// - loop the characters in the string 
// 	//   appending each char to the result
// 	fmt.Println("result is", result)
// 	for i, rune := range str {
// 		fmt.Println(i, "rune is:", string(rune), "and reverse index:", revi - i)
// 		result[revi - i] = rune
// 	}
// 	fmt.Println("result is", result, string(result))
// 	// - convert the string back to an int
// 	// - return the int

// 	return ""
// }

// func reverse(x int) int {
// 	str := strconv.Itoa(x)
// 	// reverse := []byte{}
// 	// sign := str[0]

// 	fmt.Println("what is it", str, reverse, sign);

// 	return 1
// 	// if sign == "-" {
// 	// 	reverse = append(reverse, str[0])
// 	// 	str = str[1:]
// 	// }
	
// 	// for i := len(str)-1; i >= len(str); i-- {
// 	// 	reverse = append(reverse, str[i])
// 	// }
// 	// return string(reverse)
// }