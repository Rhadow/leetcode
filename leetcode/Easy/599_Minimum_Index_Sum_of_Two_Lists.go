func findRestaurant(list1 []string, list2 []string) []string {
    result := []string{}
    currentMinimal := len(list1) + len(list2)
    nameIndexMap := make(map[string][]int)
    for i, name := range(list1) {
        nameIndexMap[name] = append(nameIndexMap[name], i)
    }
    for i, name := range(list2) {
        nameIndexMap[name] = append(nameIndexMap[name], i)
    }
    for res, indexes := range(nameIndexMap) {
        if len(indexes) == 2 {
            tempMinimal := indexes[0] + indexes[1]
            if tempMinimal == currentMinimal {
                result = append(result, res)
            } else if tempMinimal < currentMinimal {
                result = []string{res}
                currentMinimal = tempMinimal
            }
        }
    }
    return result
}
