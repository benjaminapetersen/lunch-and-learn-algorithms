package main

import "fmt"

func main() {
	people := []string{
		"Jane",
		"John",
		"Julie",
	}

	p := people[1:2:2] // [low:high:max] => cap = max-low
	fmt.Println("capacity:", cap(p))
	p = append(p, "Jack")
	fmt.Println("slice", p)

	// inspect("people:", people)
	// inspect("sub people:", p)
}
