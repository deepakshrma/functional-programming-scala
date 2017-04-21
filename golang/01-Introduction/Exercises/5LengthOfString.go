package main

import (
	"fmt"
	"unicode/utf8"
)

func main() {
	str := "asSASA ddd dsjkdsjs界dk界"
	//fmt.Printf("String %s\nLength: %d, Runes: %d\n", str, len([]byte(str)), utf8.RuneCount([]byte(str)))
	println("length of the string:", len(str))
	println("no of char in string1:", utf8.RuneCountInString(str))
	println("no of char in string2:", len([]rune(str)))
	var length int
	for index, runeValue := range str {
		fmt.Printf("%#U starts at byte position %d\n", runeValue, index)
		length += utf8.RuneLen(runeValue)
	}
	fmt.Println("byte length of the string:", length)
}
