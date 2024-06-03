package main

import (
	"encoding/json"
	"fmt"
)

type Person struct {
	Name  string  `json:"name"`
	Hobby string  `json:"hobby,omitempty"`
	Email string  `json:"-"`
	Money float64 `json:"money,string"`
}

func main() {
	p1 := Person{"Jane", "DnD", "jane@gmail.com", 1000000}
	bs1, _ := json.Marshal(p1)
	fmt.Println(p1, "vs", string(bs1))

	// p2 := Person{"Jack","Music"} // this way doesn't allow you to omit values
	p2 := Person{Name: "Jack", Hobby: "Music"}
	bs2, _ := json.Marshal(p2)
	fmt.Println(p2, "vs", string(bs2))

	p3 := Person{Name: "Jenny", Hobby: "DnD", Email: "jenny@gmail.com", Money: 200}
	bs3, _ := json.Marshal(p3)
	fmt.Println(p3, "vs", string(bs3))
}
