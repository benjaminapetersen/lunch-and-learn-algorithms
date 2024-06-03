package main

import (
	"encoding/json"
	"fmt"
)

// seems a little shorthand, but people is just a slice of this struct
// we never made a person, so its odd, but it works
type people []struct {
	Name string `json:"name"`
}
type response struct {
	Items people `json:"items"`
}

func main() {
	p := people{
		{Name: "Jane"},
		{Name: "John"},
	}

	bs1, _ := json.Marshal(response{Items: p})           // one with values, for comparisons
	bs2, _ := json.Marshal(response{})                   // Items = nil
	bs3, _ := json.Marshal(response{Items: people(nil)}) // Items = nil
	bs4, _ := json.Marshal(response{Items: people{}})    // Items = empty, this is what you need to do if you WANT your json to have the :[], otherwise each previous is nil

	fmt.Printf("%s\n%s\n%s\n%s\n", string(bs1), string(bs2), string(bs3), string(bs4))

}
