/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var slow = head ? head : null;
    var fast = head ? head.next ? head.next : null : null;

    while (slow && fast) {
        if (slow.val === fast.val) {
            return true;
        }
        slow = slow.next;
        fast = fast.next ? fast.next.next : null;
    }

    return false;

};
