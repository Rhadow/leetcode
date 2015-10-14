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
var swapPairs = function(head) {
    var result;
    var temp = head;
    var temp2;
    var count = 0;
    var lists = [];

    if (!head || !head.next) {
        return head;
    }
    if (!head.next.next) {
        result = head.next;
        head.next.next = head;
        head.next = null;
        return result;
    }
    while (temp) {
        if (count % 2 === 1) {
            temp2 = temp.next;
            temp.next = null;
            temp = temp2;
        } else {
            lists.push(temp);
            temp = temp.next;
        }
        count++;
    }
    result = lists.map(swapPairs);
    for (var i = result.length - 1; i > 0; i--) {
        result[i - 1].next.next = result[i];
    }

    return result[0];
};
