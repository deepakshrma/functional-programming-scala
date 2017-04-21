package main

func main() {
	str := "ibibo界1界"
	charArray := []rune(str)
	length := len(charArray)
	for i, j := 0, length-1; i < j; i, j = i+1, j-1 {
		println("char:", string(charArray[i]), string(charArray[j]))
		temp := charArray[i]
		charArray[i] = charArray[j]
		charArray[j] = temp
		//a[i], a[j] = a[j], a[i] Parallel assignment
		println("char:", string(charArray[i]), string(charArray[j]))
	}
	println("reversed string: " + string(charArray))
}
