/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var list = [],
        currentNode = head;

    while (currentNode.next !== null) {
        list.push(currentNode);
        currentNode = currentNode.next;
    }
    list.push(currentNode);

    if (list.length - n - 1 >= 0 && list.length - n + 1 < list.length) {
        list[list.length - n - 1].next = list[list.length - n + 1];
        return list[0];
    }
    if (list.length - n - 1 < 0) {
        return list.length <= 1 ? [] : list[1]
    }
    if (list.length - n + 1 >= list.length) {
        list[list.length - n - 1].next = null;
        return list[0];
    }
};
