package main

import (
	"fmt"
)

func main() {
	fmt.Println('a') // aha, single qotes does a weird thing!
	fmt.Println("a")
	bCharIndex := 'b' - 'a'
	cCharIndex := 'c' - 'a'
	dCharIndex := 'd' - 'a'
	fmt.Println("indexes", bCharIndex, cCharIndex, dCharIndex)
}
