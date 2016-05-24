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
var detectCycle = function(head) {
    var slow = head,
        fast = head;
    do {
        if (!fast) return null;
        slow = slow.next;
        fast = fast.next !== null ? fast.next.next : fast.next;
        if (!fast) return null;
    } while (slow !== fast);
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};
