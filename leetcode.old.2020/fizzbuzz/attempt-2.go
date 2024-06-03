package main

import (
	"fmt"
	"strconv"
)

const (
	fizz     = "Fizz"
	buzz     = "Buzz"
	fizzbuzz = fizz + buzz
)

func main() {

	// for reference, you can't add to slices like this,
	// you must always use append, however you can access
	// values within a slice via index if the slice is already populated:
	// list := []string{}
	// list[0] = "hi"
	// list[1] = "mom"
	// list[2] = "wassup"
	// list := []string{
	// 	"hi",
	// 	"mom",
	// 	"wassup",
	// }
	// fmt.Println(list[0], list[1], list[2])

	a := fizzBuzz(16)
	fmt.Println(a)
}

func fizzBuzz(n int) []string {
	list := []string{}

	for i := 1; i <= n; i++ {
		// multiples of 3 "Fizz"
		// multiples of 5 "Buzz"
		// multiples of 3 and 5 "FizzBuzz"
		// fmt.Println("Index:", i)

		if i%3 == 0 && i%5 == 0 {
			// list[i] = fizzbuzz
			list = append(list, fizzbuzz)
			continue
		}
		if i%5 == 0 {
			// list[i] = buzz
			list = append(list, buzz)
			continue
		}
		if i%3 == 0 {
			// list[i] = fizz
			list = append(list, fizz)
			continue
		}
		// list[i] = strconv.Itoa(i)
		list = append(list, strconv.Itoa(i))
	}

	return list
}
