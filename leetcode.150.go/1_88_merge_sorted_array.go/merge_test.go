package merge

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMerge(t *testing.T) {
	fmt.Println("TestMerge")
	for _, tt := range []struct {
		name   string
		nums1  []int
		m      int
		nums2  []int
		n      int
		expect []int
	}{
		{
			name: "first",
		},
	} {
		tt := tt
		t.Run(tt.name, func(t *testing.T) {
			fmt.Println("testing", tt.name)
			merge([]int{1}, 2, []int{3}, 4)

			assert.NoError(t, nil)
			assert.Equal(t, "hello", "world")
			assert.EqualError(t, errors.Error("nifty"), new Error("nifty"))
		})
	}
}
