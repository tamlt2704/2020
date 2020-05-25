function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next=== undefined ? null : next);
}

function printNode(root) {
    var head = root;
    var vals = [];
    while (head) {
        vals.push(head.val);
        head = head.next;
    }
    console.log(vals.join('->'));
}


var addTwoNumbers = function(l1, l2) {
    const root = new ListNode();
    var head = root;

    var sum = 0;
    var carry = 0;

    while (l1!=null || l2!=null || sum > 0) {
        [sum, l1] = (l1 != null) ? [sum + l1.val, l1.next] : [sum, l1];
        [sum, l2] = (l2 != null) ? [sum + l2.val, l2.next] : [sum, l2];
        [carry, sum] = (sum >= 10) ? [1, sum-10] : [carry, sum];
        
        head.next = new ListNode(sum);
        head = head.next;

        [sum, carry] = [carry, 0];
    }

    return root.next;
}
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
const suml = addTwoNumbers(l1, l2);

printNode(l1);
printNode(l2);
printNode(suml);



