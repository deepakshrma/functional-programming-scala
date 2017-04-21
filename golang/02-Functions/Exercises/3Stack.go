package main

import (
	"fmt"
	"strconv"
)

type stack struct {
	top  int
	data [10]int
}

func main() {
	s := new(stack)
	s.push(25)
	s.push(14)
	s.push(12)
	fmt.Printf("stack %v\n", s)
	fmt.Printf("stack %s\n", s.String())
	b := s.pop()
	fmt.Printf("stack %d\n", b)
	b = s.pop()
	fmt.Printf("stack %d\n", b)
	b = s.pop()
	fmt.Printf("stack %d\n", b)
}
func (s *stack) push(item int) {
	if s.top > 9 {
		return
	}
	s.data[s.top] = item
	s.top++
	return
}
func (s *stack) pop() int {
	s.top--
	if s.top < 0 {
		return 0
	}
	return s.data[s.top]
}
func (s stack) String() string {
	var str string
	for i := 0; i < s.top; i++ {
		str = str + "[" + strconv.Itoa(i) + ":" + strconv.Itoa(s.data[i]) + "]"
	}
	return str
}
