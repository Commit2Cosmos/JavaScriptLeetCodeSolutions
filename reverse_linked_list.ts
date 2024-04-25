import { printLinkedList, ListNode, createList } from "./definitions/linkedList";

let reverseList = function(head: ListNode | null) {

    let cur = head;
    let prev: ListNode | null = null;

    while (cur) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    return prev
}

let reverseListRecur = function(node: ListNode | null) {
    if (!node || !node.next) {
        return node;
    }

    let last_list_elements = reverseListRecur(node.next);
    //* reverses a connection
    node.next.next = node;
    //* rewrites last element to null
    node.next = null;

    return last_list_elements;
}

     // head  next next.next
// null -> 1 -> 2 -> 3 -> null
// 3 -> 2 -> null

let linked_list = createList([1,2,3]);

const new_list = reverseListRecur(linked_list);

console.log(new_list);