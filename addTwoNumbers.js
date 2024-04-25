function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function solution(l1, l2) {

    let res = new ListNode();
    current = res;
    console.log(res)
    console.log(res.next)

    let carry = 0;

    while (l1 || l2 || carry) {
        let val1 = l1.val ? l1.val : 0
        let val2 = l2.val ? l2.val : 0

        // compute next digit
        let nextDigit = val1 + val2 + carry;
        carry = Math.floor(nextDigit / 10);
        nextDigit = nextDigit % 10;
        current.next = new ListNode(nextDigit);

        // update pointers
        current = current.next;
        l1 = l1.next ? l1.next : null;
        l2 = l2.next ? l2.next : null;
    }
    return res.next;
}

solution([2,4,3], [5,6,4])