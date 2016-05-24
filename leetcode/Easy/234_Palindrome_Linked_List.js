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
var isPalindrome = function(head) {
    var pointer = head;
    var values = [];

    if (!pointer || !pointer.next) {
        return true;
    }
    while (pointer.next) {
        values.push(pointer.val);
        pointer = pointer.next;
    }
    values.push(pointer.val);

    return values.slice(0).reverse().join('') === values.join('');
};
