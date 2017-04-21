package main

import (
	"fmt"
)

func main() {
	for i := 0; i < 5; i++ {
		defer fmt.Printf("%d ", i)
	}
	println("this will execute first...")
	var data = f(4)
	println(data)
}
func f(ret int) (x int) {
	defer func() {
		x = ret + 1
	}()
	return 0
}
