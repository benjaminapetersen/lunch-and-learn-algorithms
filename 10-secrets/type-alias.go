package main

import "fmt"

type Human struct {
	name string
	age  int
}

func (h *Human) SetName(n string) {
	h.name = n
}

func (h *Human) SetAge(a int) {
	h.age = a
}

// type alias
type Student = Human

func main() {
	a := Human{name: "bob"}
	b := Student{name: "betty"}
	fmt.Println("human", a, "student", b)
}
