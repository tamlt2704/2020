/**
 ** Definition for singly-linked list.
 ** function ListNode(val) {
 **     this.val = val;
 **     this.next = null;
 ** }

 [1,2,3,4,5] -> [3,4,5]
 [1,2,3,4,5,6] -> [4,5,6]
 **/
/**
 *  * @param {ListNode} head
 *   * @return {ListNode}
 *    */
var middleNode = function(head) {
    var p1 = head;
    var p2 = head;

    while (p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next;

        p2 = p2 ? p2.next : p2;
    }

    return p1;
};
