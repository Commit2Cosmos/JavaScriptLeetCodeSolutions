class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


class BST {
    root: TreeNode | null

    constructor() {
        this.root = null;
    }

    addNode(node: number) {
        if (this.root === null) {
            this.root = new TreeNode(node);
            return;
        }
        
        const dum = this.root;
        
        let traverse = () => {
            if (this.root!.val > node) {
                if (this.root!.left) {
                    this.root = this.root!.left
                    traverse()
                } else this.root!.left = new TreeNode(node);
            } else {
                if (this.root!.right) {
                    this.root = this.root!.right
                    traverse()
                } else this.root!.right = new TreeNode(node);
            }
        }

        traverse();
        this.root = dum
    }


    printBFS(head: TreeNode | null) {

        let queue: (TreeNode | null)[] = [];
        
        let BFS = (head: TreeNode | null) => {
            if (!head) {
                if (queue.length > 0) {
                    BFS(queue.splice(0, 1)[0])
                } else return;
            } else {
                console.log(head.val)
                if (head.left) queue.push(head.left)
                if (head.right) queue.push(head.right)
                BFS(queue.splice(1)[0])
            }
        }

        BFS(head)
    }
}

const tree = new BST();
tree.addNode(1)
tree.addNode(2)
tree.addNode(3)

// console.log(tree.root)


tree.printBFS(tree.root)


// export function createBinaryTree(arr: (number | null)[]) {
//     let tree = new BST();
//     let head = tree.root;

    
// }