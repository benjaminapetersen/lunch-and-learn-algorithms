package main

import (
	"encoding/json"
	"fmt"
	"time"
)

func main() {
	// anonymous struct is handy sometimes
	res := struct {
		Name string `json:"name"`
		Age  int    `json:"age"`
	}{
		Name: "Steve",
		Age:  25,
	}

	bs, _ := json.Marshal(res)
	fmt.Println(string(bs))

	// empty structs can be useful
	// an empty struct takes up no memorys
	done := make(chan struct{})

	go func() {
		fmt.Println("go routine 1 is done")
		done <- struct{}{}
	}()
	go func() {
		fmt.Println("go routine 2 is done")
		done <- struct{}{}
	}()

	for {
		select {
		case <-done:
			fmt.Println("done at", time.Now())
		case <-time.After(time.Second):
			fmt.Println("done waiting")
			return
		}
	}

}
