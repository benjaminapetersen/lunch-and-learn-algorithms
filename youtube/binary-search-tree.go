// https://www.youtube.com/watch?v=-oYitelECuQ
// Data Structures and Algorithms in Go - Binary Search Tree
// Junmin Lee
// why a binary search tree?
// - binary tree is very fast, O(h) as O(log n)
// - unbalanced tree is still decent, its linear at worst O(n)
package main

import (
	"encoding/json"
	"fmt"
	"os"
)

// keep track of number of nodes traversed for a search
var count int

// Node
type Node struct {
	Key   int   `json:"key"`
	Left  *Node `json:"left"`
	Right *Node `json:"right"`
}

// Insert will add a node to the tree
// the key to add should not already be in the tree
func (n *Node) Insert(k int) {
	if n.Key < k {
		// move right
		if n.Right == nil {
			n.Right = &Node{Key: k}
		} else {
			n.Right.Insert(k)
		}
	} else if n.Key > k {
		// move left
		if n.Left == nil {
			n.Left = &Node{Key: k}
		} else {
			n.Left.Insert(k)
		}
	}
}

// Search will take in a key value
// and RETURN true if there is a node with that value
func (n *Node) Search(k int) (exists bool) {
	// this will just count the search.
	// this is naive, it doesn't reset! after many searches it gets large so it only works on the first search :)
	count++
	// if this node is nil, then we didn't find anything.
	if n == nil {
		return false
	}
	if n.Key < k {
		return n.Right.Search(k)
	} else if n.Key > k {
		return n.Left.Search(k)
	}
	// if exists and is not larger or smaller, we found a match
	return true
}

func main() {
	tree := &Node{Key: 100}
	fmt.Println(tree)
	tree.Insert(50)
	nums := []int{
		4,
		89,
		34,
		185,
		15,
		778,
		99,
		444,
		200,
	}
	for _, num := range nums {
		tree.Insert(num)
	}
	bytes, err := json.Marshal(tree)
	if err != nil {
		fmt.Println("omg", err)
		os.Exit(1)
	}
	fmt.Println(string(bytes))
	search := []int{
		4,
		88,
		153,
		185,
		99,
	}
	for _, num := range search {
		fmt.Println("is it in the tree?", num, tree.Search(num))
	}
}

// structure can look something like this as the tree grows:
// {
//     "key":100,
//     "left":{
//         "key":50,
//         "left":{
//             "key":4,
//             "left":null,
//             "right":{
//                 "key":34,
//                 "left":{
//                     "key":15,
//                     "left":null,
//                     "right":null
//                 },
//                 "right":null
//             }
//         },
//         "right":{
//             "key":89,
//             "left":null,
//             "right":{
//                 "key":99,
//                 "left":null,
//                 "right":null
//             }
//         }
//     },
//     "right":{
//         "key":185,
//         "left":null,
//         "right":{
//             "key":778,
//             "left":{
//                 "key":444,
//                 "left":{
//                     "key":200,
//                     "left":null,
//                     "right":null
//                 },
//                 "right":null
//             },
//             "right":null
//         }
//     }
// }
