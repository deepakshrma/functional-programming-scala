package main

import (
	"fmt"
)

func main() {

	for i := 0; i < 10; i++ {
		println("No::%d", i)
	}
	i := 0
FOR:
	println("No::%d", i)
	if i < 10 {
		i++
		goto FOR
	}
	var data [10]int
	for k, _ := range data {
		data[k] = k
	}
	for _, val := range data {
		println("Arr::", val)
	}
	//OR
	fmt.Printf("vector: %v", data)

}
