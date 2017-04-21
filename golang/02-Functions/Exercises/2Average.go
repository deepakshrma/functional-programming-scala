package main

import (
	"fmt"
)

func main() {
	a, b := swap(10, 6)
	fmt.Printf("a:%d::b:%d\n", a, b)
}
func swap(x, y int) (int, int) {
	if x > y {
		x, y = y, x
	}
	return x, y
}
