package main

import (
	"fmt"
	"reflect"
	"strconv"
)

const (
	fizz     = "Fizz"
	buzz     = "Buzz"
	fizzbuzz = fizz + buzz
)

func main() {
	fmt.Println("fizzbuzz!", fizz, buzz, fizzbuzz)

	val := fizzBuzz(15)

	fmt.Println(reflect.DeepEqual(val, []string{
		"1",
		"2",
		"Fizz",
		"4",
		"Buzz",
		"Fizz",
		"7",
		"8",
		"Fizz",
		"Buzz",
		"11",
		"Fizz",
		"13",
		"14",
		"FizzBuzz",
	}))
}

func fizzBuzz(n int) []string {
	i := 0
	num := 1
	list := []string{}

	for i < n {
		// numbers to string
		// multiples of 3 "Fizz"
		// multiples of 5 "Buzz"
		// multiples of 3 and 5 "FizzBuzz"
		if num%3 == 0 && num%5 == 0 {
			list[i] = fizzbuzz
		} else if num%5 == 0 {
			list[i] = buzz
		} else if num%3 == 0 {
			list[i] = buzz
		} else {
			list[i] = strconv.Itoa(num)
		}
		i++
		num++
	}
	return list
}
