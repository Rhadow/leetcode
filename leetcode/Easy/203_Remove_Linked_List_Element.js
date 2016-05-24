/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var index = head;
    var newHead = head;

    while (index) {
        if (newHead && newHead.val === val && index.val === val) {
            newHead = index.next;
            index = index.next;
        } else if (index.next && index.next.val === val) {
            index.next = index.next.next;
        } else {
            index = index.next;
        }
    }

    return newHead;
};
