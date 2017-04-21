package main

func main() {
	const (
		FIZZ = 3
		BUZZ = 5
	)
	for i := 0; i < 100; i++ {
		switch {
		case i%FIZZ == 0 && i%BUZZ == 0:
			print("number", i)
			println(":FuzzBuzz")
		case i%BUZZ == 0:
			print("number", i)
			println(":Buzz")
		case i%FIZZ == 0:
			print("number", i)
			println(":Fuzz")
		}
	}

}
