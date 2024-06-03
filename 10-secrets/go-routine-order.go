package main

import (
	"fmt"
	"time"
)

func main() {
	// runtime.GOMAXPROCS(1) if this line exists, the order of execution is always the same...
	go func() {
		fmt.Println("1")
	}()
	go func() {
		fmt.Println("2")
	}()
	time.Sleep(time.Second)

}
