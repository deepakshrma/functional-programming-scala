package main

import (
	"fmt"
)

func main() {
	listing(1, 2, 3, 4)
}
func listing(arg ...int) {
	for _, n := range arg {
		fmt.Printf("And the number is: %d\n", n)
	}
}
