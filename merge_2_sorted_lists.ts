import { printLinkedList, ListNode, createList } from "./definitions/linkedList";


var mergeTwoLists = function(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let dummy: ListNode = new ListNode(0, null);
    let dummy_head: ListNode = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            dummy.next = list1
            list1 = list1.next
        } else {
            dummy.next = list2
            list2 = list2.next
        }
        dummy = dummy.next
    }

    if (!list1) {
        dummy.next = list2
    } else {
        dummy.next = list1
    }

    return dummy_head.next
};


let list1 = createList([1,2,4]);
let list2 = createList([1,3,4]);


// printLinkedList(mergeTwoLists(list1, list2))