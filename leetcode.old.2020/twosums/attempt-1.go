package main

import "fmt"

func main() {

	first := twoSum([]int{2, 7, 11, 15}, 9)
	fmt.Println(first, "should be", []int{0, 1})

	second := twoSum([]int{3, 2, 4}, 6)
	fmt.Println(second, "should be", []int{1, 2})

}

func twoSum(nums []int, target int) []int {
	result := []int{}

	// there is a target
	// there are two items in the array that will add up to the target
	// cannot use the same item twice
	// each input should have exactly one solution
	// options to address this:
	// 1. loop within a loop, n^2
	// 2. some sort of binary search method? did not indicate sorted list

	for i := 0; i < len(nums); i++ {
		fmt.Println("index", i, nums[i])
		for j := 0; j < len(nums); j++ {
			if i == j {
				continue
			}
			sum := nums[i] + nums[j]
			if sum == target {
				// to output the actual nums
				// result = append(result, nums[i])
				// result = append(result, nums[j])
				// to output the index
				result = append(result, i)
				result = append(result, j)
				return result
			}
		}
	}
	return result
}
