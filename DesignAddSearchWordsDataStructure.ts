class TrieNode {
    public children: { [id: string]: TrieNode } = {};
    public isWord: boolean = false;
    public value: string;

    constructor(val: string = '') {
        this.value = val;
    }
}


class Trie {
    public root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    protected insert(word: string) {
        let current = this.root

        for (let i = 0; i < word.length; i++) {
            let nextLetter: TrieNode | undefined = current.children[word[i]];

            if (!nextLetter) {
                nextLetter = new TrieNode(word[i]);
                current.children[word[i]] = nextLetter
            }

            current = nextLetter
        }

        current.isWord = true
    }

    protected find_word(word: string): boolean {
        let current = this.root;
        
        let BFS = (node: TrieNode, counter = 0): boolean => {
            if (counter > word.length) return false
            if (counter == word.length && node.isWord) return true

            if (word[counter] != '.') {
                if (!node.children[word[counter]]) return false

                //* call same function on next letter
                return BFS(node.children[word[counter]], counter+1);
            } else {
                let b = false;
                for (let k of [...Object.values(node.children)]) {
                    // console.log(k)
                    b = b || BFS(k, counter+1)
                }
                return b
            }
        }

        return BFS(current)
    }
}



class WordDictionary extends Trie {

    constructor() {
        super();
    }

    addWord(word: string): void {
        this.insert(word);
    }

    search(word: string): boolean {
        return this.find_word(word)
    }
}


const obj = new WordDictionary()

// console.log(obj)

const words = ["at", "and"]

for (let w of words) {
    obj.addWord(w)
}


// console.log(obj.root.children)

const param_1 = obj.search("a.d")
const param_2 = obj.search("an.")

console.log(param_1)
console.log(param_2)