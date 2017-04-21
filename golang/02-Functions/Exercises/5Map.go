package main

import (
	"fmt"
)

func main() {
	xs := []int{1, 2, 3, 45, 6}
	square := func(x int) int {
		return x * x
	}
	fmt.Printf("data: %v\n", Map(square, xs))
}
func Map(f func(int) int, xs []int) []int {
	updatedArr := make([]int, len(xs))
	for index, val := range xs {
		updatedArr[index] = f(val)
	}
	return updatedArr
}
