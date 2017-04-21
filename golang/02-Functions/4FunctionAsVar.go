package main

import (
	"fmt"
)

func main() {
	listing := func(arg ...int) {
		for _, n := range arg {
			fmt.Printf("And the number is: %d\n", n)
		}
	}
	listing(1, 2, 3, 4)
}
