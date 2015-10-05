/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var ALength = 0;
    var BLength = 0;
    var lengthDiff = 0;
    var result = null;
    var indexOne = headA;
    var indexTwo = headB;

    while (indexOne) {
        ALength++;
        indexOne = indexOne.next;
    }
    while (indexTwo) {
        BLength++;
        indexTwo = indexTwo.next;
    }

    lengthDiff = ALength > BLength ? ALength - BLength : BLength - ALength;
    indexOne = ALength > BLength ? headA : headB;
    indexTwo = ALength > BLength ? headB : headA;

    for (var i = 0; i < lengthDiff; i++) {
        indexOne = indexOne.next;
    }
    while (indexOne && indexTwo) {
        if (indexOne.val === indexTwo.val) {
            result = indexOne;
            break;
        }
        indexOne = indexOne.next;
        indexTwo = indexTwo.next;
    }

    return result;

};