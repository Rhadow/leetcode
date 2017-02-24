/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    // Original solution
    if (!head) {
        return head;
    }
    let prev = head;
    let current = head.next;
    while (current) {
        let temp = head;
        let tempPrev = null;
        while (temp !== current) {
            if (temp.val > current.val) {
                prev.next = current.next;
                if (tempPrev) {
                    tempPrev.next = current;
                } else {
                    head = current;
                }
                current.next = temp;
                current = prev;
                break;
            } else {
                tempPrev = temp;
                temp = temp.next;
            }
        }
        prev = current;
        current = current.next;
    }
    return head;
};
