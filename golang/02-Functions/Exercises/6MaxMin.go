package main

import (
	"fmt"
)

func main() {
	xs := []int{1, 90, -3, 45, 6}
	max, min := MaxMin(xs)
	fmt.Printf("Max:%d::Min:%d\n", max, min)
}
func MaxMin(xs []int) (int, int) {
	SIZE := len(xs)
	if SIZE < 1 {
		return 0, 0
	}
	max, min := xs[0], xs[0]
	for _, val := range xs {
		if val > max {
			max = val
		}
		if val < min {
			min = val
		}
	}
	return max, min
}
