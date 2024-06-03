// https://www.youtube.com/watch?v=nL7BHR5vJDc
// Data Structures and Algorithms in Go - Tries
// Junmin Lee
package main

import "fmt"

// AlphabetSize is the # of possible characters in a trie
const AlphabetSize = 26

// Node represents each node in a trie
type Node struct {
	Children [AlphabetSize]*Node
	isEnd    bool
}

// Trie represents a trie and has a pointer to the root node
type Trie struct {
	Root *Node
}

// InitTrie will create a new Trie
func InitTrie() *Trie {
	result := &Trie{Root: &Node{}}
	return result
}

// Insert
func (t *Trie) Insert(w string) {
	length := len(w)
	currentNode := t.Root
	for i := 0; i < length; i++ {
		charIndex := w[i] - 'a' // convert the char to an index, single quote conversion
		if currentNode.Children[charIndex] == nil {
			currentNode.Children[charIndex] = &Node{}
		}
		currentNode = currentNode.Children[charIndex]
	}
	currentNode.isEnd = true
}

// Search will take in a word and RETURN true if that word is included in the trie
func (t *Trie) Search(w string) (exists bool) {
	length := len(w)
	currentNode := t.Root
	for i := 0; i < length; i++ {
		charIndex := w[i] - 'a' // convert the char to an index, single quote conversion
		if currentNode.Children[charIndex] == nil {
			return false
		}
		currentNode = currentNode.Children[charIndex]
	}
	// if we passed the above for loop w/o a false, then we just need to know if this last node is a terminal node
	if currentNode.isEnd == true {
		return true
	}
	// if the isEnd is not true, then we may still not have a word that has been explicity entered
	return false
}

func main() {
	myTrie := InitTrie()

	toAdd := []string{
		"aragorn",
		"aragog",
		"eragon",
		"oregon",
		"oregano",
	}
	for _, v := range toAdd {
		myTrie.Insert(v)
	}

	myTrie.Insert("aragorn")
	myTrie.Insert("aragog")
	myTrie.Insert("aardvark")
	myTrie.Insert("eragon")
	myTrie.Insert("boromir")
	myTrie.Insert("samwise")
	fmt.Println("aragorn exists?", myTrie.Search("aragorn"))
	fmt.Println("frodo exists?", myTrie.Search("frodo"))
	fmt.Println("samwise exists?", myTrie.Search("samwise"))
	// fmt.Println("trie:", testTrie.Root) // {[<nil> <nil> <nil> ..... <nil>] false}  all defaulted to zero values!

}
