// https://www.youtube.com/watch?v=zLnJcAt1aKs
// Data Structures and Algorithms in Go - Hash Tables
// Junmin Lee
package main

import (
	"fmt"
	// "strconv"
)

func main() {
	testHashTable := InitHashTable()
	fmt.Println(testHashTable)

	randy := hash("randy")
	jane := hash("jane")
	john := hash("john")
	fmt.Println("hashed:", randy, jane, john)
}

// Init 
// - initialize the hash table
// - create a bucket for each slot in the hash table
func InitHashTable() *HashTable {
	result := &HashTable{}
	for i := range result.array {
		result.array[i] = &Bucket{}
	}
	return result
}


// HashTable structure
// - Insert
// - Search
// - Delete
const HashTableArraySize = 7

type HashTable struct {
	array [HashTableArraySize]*Bucket 
}

func (h *HashTable) Insert(key string) {
	index := hash(key)
	h.array[index].insert(key)
}
// func (h *HashTable) Search(key string) bool {
// 	index := hash(key)
// 	return true
// }
// func (h *HashTable) Delete(key string) {
// 	index := hash(key)
// }

// Bucket structure
// - a bucket is going to be a linked list 
// - Insert
// - Search
// - Delete
type Bucket struct {
	head * BucketNode 
}

func (h *Bucket) Insert(key string) {
	newNode := &BucketNode{key: key}
	// head was the first item in the linked list
	// every time we add a new node, we want it to become the head
	// therefore, we make the current head the "next" of the new node
	// and then swap the head to this new node
	newNode.next = b.head 	
	b.head = newNode
}
// func (h *Bucket) Search(key string) bool {
// 	index := hash(key)
// 	return true
// }
// func (h *Bucket) Delete(key string) {
// 	index := hash(key)
// }

type BucketNode struct {
	key string 
	next *BucketNode 
}

// HashFunc
// - create a hash for the items to enter
func hash(key string) int {
	sum := 0
	for _, char := range key {
		sum += int(char) // char is a rune, this is trivial
		// val, _ := strconv.Atoi(char) // turn the key to an int, add it
		// sum += val
	}
	return sum % HashTableArraySize // sum & remainder of HashTableArraySize
}
