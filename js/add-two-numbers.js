function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let one = new ListNode(1), two = new ListNode(2);
let t1 = one, t2 = two;
for (let num of [1, 3, 4, 6]) {
    t1.next = new ListNode(num);
    t1 = t1.next;
    t2.next = new ListNode(num + 1);
    t2 = t2.next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    let start = new ListNode();
    let curr = start;
    let carryOver = 0;
    do {
        curr.val = (l1?.val ? l1.val : 0) + (l2?.val ? l2.val : 0) + carryOver;
        carryOver = 0;
        if (curr.val >= 10) {
            carryOver = Math.trunc(curr.val / 10);
            curr.val = curr.val % 10;
        }
        l1 = l1?.next;
        l2 = l2?.next;
        if (Number.isFinite(l1?.val) || Number.isFinite(l2?.val) || carryOver > 0) {
            curr.next = new ListNode();
            curr = curr.next;
        }
    } while (Number.isFinite(l1?.val) || Number.isFinite(l2?.val) || carryOver > 0)
    return start;
};

let list = addTwoNumbers(one, two);
while (Number.isFinite(list?.val)) {
    console.log(list.val);
    list = list.next;
}