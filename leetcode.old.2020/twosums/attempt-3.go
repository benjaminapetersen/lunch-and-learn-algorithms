package main

import "fmt"

func main() {
	first := twoSum([]int{2, 7, 11, 15}, 9)
	fmt.Println(first, "should be", []int{0, 1})

	second := twoSum([]int{3, 2, 4}, 6)
	fmt.Println(second, "should be", []int{1, 2})
}

// single pass hash table version.
func twoSum(nums []int, target int) []int {
	// value to index map, inverse
	m := make(map[int]int)

	// now lookup the complements
	for i := 0; i < len(nums); i++ {

		// single pass loop, we populate as we go, and then check against whats already populated
		m[nums[i]] = i

		// target is the value we are looking for
		// current = nums[i]
		// test = target - nums[i]
		// if test exists, we win, unless it is the same index as nums[i] (meaning i)
		current := nums[i]
		test := target - current
		if value, ok := m[test]; ok {
			if value != i {
				// fmt.Println("Found something", current, test, value, target)
				return []int{i, value}
			}
		}
	}

	fmt.Println("The map", m)

	return []int{}
}
