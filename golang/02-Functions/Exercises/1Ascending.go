package main

import (
	"fmt"
)

func main() {
	var xs = []float64{1, 5, 3, 4, 5, 6}
	fmt.Printf("%.2f\n", average(xs))
}
func average(xs []float64) (avg float64) {
	var sum = 0.0
	if len(xs) == 0 {
		return avg
	}
	for _, val := range xs {
		sum += val
	}
	avg = sum / float64(len(xs))
	return
}
