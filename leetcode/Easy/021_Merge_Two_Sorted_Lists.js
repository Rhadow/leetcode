/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var startIndex, subIndex, currentIndex, tempOne;

    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    startIndex = l1.val > l2.val ? l2 : l1;
    subIndex = l1.val > l2.val ? l1 : l2;
    currentIndex = startIndex;

    while (currentIndex.next !== null) {
        if (currentIndex.next.val > subIndex.val) {
            tempOne = currentIndex.next;
            currentIndex.next = subIndex;
            subIndex = tempOne;
        }
        currentIndex = currentIndex.next;
    }
    currentIndex.next = subIndex;
    return startIndex;
};
