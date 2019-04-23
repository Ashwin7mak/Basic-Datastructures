// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    // Initialzing the root node
    constructor() {
        this.root = null;
    }

    // Insert data
    add(data) {
        let newNode = new Node(data);
        const node = this.root;
        // Check if the root node is null
        // If so insert in the root
        if(this.root === null) {
            this.root = newNode;
            return;
        } else {
            // SearchTree function looks for right place to insert node
            const searchTree = function(node) {
                // Check if the newNode data is the less then node data
                if (data < node.data) {
                    // If so check if the node.left is null
                    // If so insert newNode to it  
                    // else search the tree for the correct left node          
                    if(node.left === null) {
                        node.left = newNode;
                        return;
                    } else if(node.left !== null) {
                        return searchTree(node.left);
                    }
                } 
                // If newNode data is greater than node data
                else if(data > node.data) {
                    // If so check if the right node is null
                    // If so insert newNode to it
                    // Else search the tree for the correct right node
                    if(node.right === null) {
                        node.right = newNode;
                        return;
                    } else if(node.right !== null) {
                        return searchTree(node.right);
                    }
                } 
                // If newNode data is equal to the data
                else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    // Find min node in the BST
    findMin() {
        let current = this.root;
        // Check until if the left node is null in the tree
        while(current.left != null) {
            current = current.left;
        }
        return current.data;
    }

    // Find max node in the BST
    findMax() {
        let current = this.root;
        // Check until if the right node is null in the tree
        while(current.right != null) {
            current = current.right;
        }
        return current.data;
    }

    // Find if the data is present in the node of tree or not
    isPresent(data) {
        let current = this.root;
        // Check if the data is equal to 
        while(current) {
            if(data === current.data) {
                return true;
            } 
            if(data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    // Remove data
    remove(data) {
        const removeNode = function(node, data) {
            // Check if the node is null(empty tree)
            if(node === null) {
                return null;
            }
            // Check if the node data is equal to given data
            if(data === node.data) {
                // Check if the node has no children
                if(node.left === null && node.right === null) {
                    return null;
                }
                // Check if node as left child
                if(node.left === null) {
                    return node.right;
                }
                // Check if node as right child
                if(node.right === null) {
                    return node.left;
                }
                // Check if node as two children
                let tempNode = node.right;
                // Check until if the tempNode left is not null
                while(tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                // Assign right node through the recurr of rightNode
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } 
            // Check if data is less than node data
            else if (data < node.data) {
                node.left = removeNode(node.left, data);
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        };
        return this.root = removeNode(this.root, data);
    }

}


let bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);


bst.remove(4);

console.log(bst.findMax());
console.log(bst.findMin());
console.log(bst.findMax());

console.log(bst.isPresent(4));
