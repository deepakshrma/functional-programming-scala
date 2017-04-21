package main

import (
	"fmt"
)

func main() {
	plus2 := plusX(2)
	fmt.Printf("5 + plus2: %d\n", plus2(5))
	plus5 := plusX(5)
	fmt.Printf("5 + plus5: %d\n", plus5(5))
}
func plusX(x int) func(int) int {
	return func(y int) int {
		return x + y
	}
}
