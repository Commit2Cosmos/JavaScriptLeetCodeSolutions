interface ListNodeInt {
    val: number;
    next: ListNode | null;
}

export class ListNode implements ListNodeInt {
    val: number;
    next: ListNode | null;
    
    constructor(val: number, next: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


export const printLinkedList = function(list: ListNode | null) {
    console.log("START")
    while (list) {
        console.log(list.val)
        list = list.next
    }
    console.log("END")
}


export const createList = function(arr: number[]): ListNode | null {
    let dummy: ListNode = new ListNode(0, null);
    let dummy_head: ListNode = dummy;

    for (let i of arr) {
        dummy.next = new ListNode(i, null);
        dummy = dummy.next;
    }

    return dummy_head.next;
}