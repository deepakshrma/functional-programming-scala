package main

import "fmt" // Implements formatted I/O.
/* Print something */
func main() {
	list := []string{"a", "b", "c", "d", "e", "f"}
	for k, v := range list {
		// do what you want with k and v
		fmt.Printf("key::%d <---> value:: %s\n", k, v)
	}
}
