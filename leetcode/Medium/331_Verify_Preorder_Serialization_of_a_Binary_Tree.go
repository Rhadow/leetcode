// Without Pointer
import "strings"

func isValidSerialization(preorder string) bool {
    if (preorder == "#") {
        return true
    }
    nodes := strings.Split(preorder, ",")
    stack := []int{}
    for index, val := range nodes {
        if val == "#" {
            stack = reduceStack(stack)
        } else {
            stack = append(stack, 2)
        }
        if (len(stack) == 0 && index != len(nodes) - 1) {
            return false
        }
    }
    return len(stack) == 0
}

func reduceStack(stack []int) []int {
    if (len(stack) == 0) {
        return []int{}
    }
    stack[len(stack) - 1] -= 1
    if (stack[len(stack) - 1] == 0) {
        stack = reduceStack(stack[:len(stack) - 1])
    }
    return stack
}

// With Pointer
import "strings"

func isValidSerialization(preorder string) bool {
    if (preorder == "#") {
        return true
    }
    nodes := strings.Split(preorder, ",")
    stack := []int{}

    for index, val := range nodes {
        fmt.Println(stack)
        if val == "#" {
            reduceStack(&stack)
        } else {
            stack = append(stack, 2)
        }
        if (len(stack) == 0 && index != len(nodes) - 1) {
            return false
        }
    }
    return len(stack) == 0
}

func reduceStack(stack *[]int) {
    if (len(*stack) == 0) {
        return
    }
    (*stack)[len(*stack) - 1] -= 1
    if ((*stack)[len(*stack) - 1] == 0) {
        *stack = (*stack)[:len(*stack) - 1]
        reduceStack(stack)
    }
}
