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
var reverseList = function(head) {
    var temp = [],
        current = head,
        tempVal;

    if (current) {
        while (current.next !== null) {
            temp.push(current);
            current = current.next;
        }
        temp.push(current);

        for (var i = temp.length - 1; i >=0; i--) {
            tempVal = i === 0 ? null : temp[i - 1];
            temp[i].next = tempVal;
        }
    }
    return head ? temp[temp.length - 1] : head;
};
