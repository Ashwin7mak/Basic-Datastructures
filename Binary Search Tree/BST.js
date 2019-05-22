// Node class
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(val) {
        this.root = new Node(val);
        // To keep count of no. of nodes in the BST
        this.count = 1;
    }

    size() {
        return this.count;
    }

    insert(val) {
        this.count++;
        let newNode = new Node(val);
        // SearchTree function that checks for the correct place to insert the values in the tree
        const searchTree = function(node) {
            // If val < node.val, search in the left tree
            if(val < node.val) {
                // If node.left is empty, insert the newNode
                if(!node.left) {
                    node.left = newNode;
                }
                // Else search recursively in the left tree
                else {
                    searchTree(node.left);
                }
            }
            // If val > node.val, search in the right tree
            else if(val > node.val) {
                // If node.right is empty, insert the newNode
                if(!node.right) {
                    node.right = newNode;
                }
                // Else search recursively in the right tree
                else {
                    searchTree(node.right);
                }
            }
        }
        return searchTree(this.root);
        
    }

    min() {
        let currentNode = this.root;
        // Continue traversing Left tree untill finds the last left element(min element)
        while(currentNode.left) {
            currentNode = currentNode.left;
        }
        console.log("Min element", currentNode.val);
        return currentNode.val;
    }

    max() {
        let currentNode = this.root;
        // Continue traversing Right tree untill finds the last left element(max element)
        while (currentNode.right) {
            currentNode = currentNode.right;
        }
        console.log("Max element", currentNode.val);
        return currentNode.val;
    }

    contains(val) {
        let currentNode = this.root;

        while(currentNode) {
            if(val == currentNode.val) {
                return true;
            }
            if(val < currentNode.val) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }    

    print() {
        if (!this.root) {
            return console.log("No root node found");
        }
        let newline = new Node("|");
        let queue = [this.root, newline];
        let string = "";
        console.log("type", typeof(string));
        while (queue.length) {
            let node = queue.shift();
            string += node.val.toString() + " ";
            if (node === newline && queue.length) queue.push(newline);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        console.log(string.slice(0, -2).trim());
    };
}

const b1 = new BST(15);

b1.insert(3);
b1.insert(36);
b1.insert(2);
b1.insert(12);
b1.insert(28);
b1.insert(39);

//b1.print();

b1.min();

b1.max();
