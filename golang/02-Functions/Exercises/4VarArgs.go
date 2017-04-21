package main

import ()

func main() {
	printAll(1, 2, 3, 3, 1)
}
func printAll(numbers ...int) {
	for _, val := range numbers {
		println(">>>>>", val)
	}
}
