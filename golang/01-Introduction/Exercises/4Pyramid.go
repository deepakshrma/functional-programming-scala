package main

func main() {
	pattern := "A"
	var current string
	for i := 0; i < 100; i++ {
		current += pattern
		println(current)
	}

}
