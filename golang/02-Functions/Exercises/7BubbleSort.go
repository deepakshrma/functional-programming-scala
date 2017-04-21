package main

import (
	"fmt"
)

func main() {
	xs := []int{1, 90, -3, 45, 6}
	fmt.Printf("Sorted: %v\n", BubbleSort(xs))
}
func BubbleSort(xs []int) []int {
	SIZE := len(xs)
	for i := 0; i < SIZE; i++ {
		for j := i + 1; j < SIZE; j++ {
			if xs[i] > xs[j] {
				xs[i], xs[j] = xs[j], xs[i]
			}
		}
	}
	return xs
}
