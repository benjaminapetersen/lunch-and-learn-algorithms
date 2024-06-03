package main

import (
	"fmt"
	"os"
)

// FAIL -> started to solve roman to integer, then got into integer to roman, oops!
func main() {
	fmt.Println(romanToInt("III"), "should be", 3)
	fmt.Println(romanToInt("IV"), "should be", 4)
	fmt.Println(romanToInt("IX"), "should be", 9)
	fmt.Println(romanToInt("LVIII"), "should be", 58)     // L = 50, V= 5, III = 3.
	fmt.Println(romanToInt("MCMXCIV"), "should be", 1994) // M = 1000, CM = 900, XC = 90 and IV = 4.
}

func romanToInt(s string) int {
	// symbols := map[string]int{
	// 	"I": 1,
	// 	"V": 5,
	// 	"X": 10,
	// 	"L": 50,
	// 	"C": 100,
	// 	"D": 500,
	// 	"M": 1000,
	// }

	// six instances of subtraction
	// I can be placed before V (5) and X (10) to make 4 and 9.
	// X can be placed before L (50) and C (100) to make 40 and 90.
	// C can be placed before D (500) and M (1000) to make 400 and 900.
	// we should return strings instead, concat the strings, convert to int when returned.
	singles := map[string]int{
		"I":    1,
		"II":   2,
		"III":  3,
		"IV":   4,
		"V":    5,
		"VI":   6,
		"VII":  7,
		"VIII": 8,
		"IX":   9,
	}
	tens := map[string]int{
		"X": 10,
		// expanded...
		"XX":   20,
		"XXX":  30,
		"XV":   40,
		"L":    50,
		"LX":   60,
		"LXX":  70,
		"LXXX": 80,
		"XC":   90,
	}
	hundreds := map[string]int{
		"C":    100,
		"CC":   200,
		"CCC":  300,
		"CD":   400,
		"D":    500,
		"DC":   600,
		"DCC":  700,
		"DCCC": 800,
		"CM":   900,
	}
	thousands := map[string]int{
		"M": 1000,
	}

	// len(s) might be useful.
	// reversing the string might also be useful
	//   we can look at the index to decide which map to pluck a value from
	// we need these sets:
	//   [0] = 0-9,
	//   [1] = 10-90,
	//   [2] = 100-900,
	//   [3] = 1000 stop at 1000.
	//
	// and we need a result
	// result := ""

	str := reverse(s)

	// WAAAAAAAAIT!!!!!
	// I am solving the wrong problem here.
	// I am receiving a roman to turn to number,
	//   not a number to turn to roman.
	// THEREFORE the placement is the wrong approach.
	// FAIL. PAY ATTENTION!
	result := 0
	for i, char := range str {
		switch i {
		case 0:
			result += singles[string(char)]
			break
		case 1:
			result += tens[string(char)]
			break
		case 2:
			result += hundreds[string(char)]
			break
		case 3:
			result += thousands[string(char)]
			break
		default:
			fmt.Println("Yikes! something went horribly wrong")
			os.Exit(1)
		}
	}

	fmt.Println("original", s, "reversed", str, "result?", result)

	return 1
}

func reverse(s string) string {
	length := len(s)
	runes := []rune(s)

	result := make([]rune, length)
	start := 0

	fmt.Println("runes", runes)
	fmt.Println("result", result)

	// i = 7
	for i := length - 1; i >= 0; i-- {
		result[start] = runes[i]
		start++
	}

	fmt.Println(s, "reversed", string(result))
	return string(result)
}
