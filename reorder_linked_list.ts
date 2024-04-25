import { printLinkedList, ListNode, createList } from "./definitions/linkedList";

function reorderList(head: ListNode | null): void {
    //* find middle
    let slow = head;
    let fast = head?.next;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    // printLinkedList(head)
    // printLinkedList(slow)

    //* reverse second half
    let cur = slow!.next;
    let prev: ListNode | null = null;

    while (cur) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    
    //* merge one-by-one
    let first = head
    let second = prev

    while (second) {
        let tmp1 = first!.next;
        let tmp2 = second.next;

        first!.next = second
        second.next = tmp1

        first = tmp1
        second = tmp2
    }
    first!.next = null
};


//* 1,2,3    4
const nodes = [1];
let list1 = createList(nodes);

reorderList(list1)
printLinkedList(list1)