import { printLinkedList, ListNode, create_list } from "./merge_2_sorted_lists"

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

    // if (!head) {return head}
    let dummy = new ListNode(0, head);
    let left: ListNode | null = dummy;
    let right = head;

    let count = 0;

    while (right) {
        right = right.next
        count++

        if (n < count) {
            left = left!.next
        }
        // console.log(right?.val)
        // console.log(left?.val)
    }

    left!.next = left!.next!.next
    return dummy.next
};

let r = removeNthFromEnd(create_list([1,2]), 1)

printLinkedList(r)