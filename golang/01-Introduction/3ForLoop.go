package main

import "fmt" // Implements formatted I/O.
/* Print something */
func main() {
	sum := 0
	for i := 0; i < 10; i++ {
		if i > 5 {
			break
		}
		sum += i
		fmt.Printf("No::%d <---> Sum:: %d\n", i, sum)
	}

}
