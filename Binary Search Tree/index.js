// Node class
class Node {
    constructor(node) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Binary Search Tree class
class BinarySearchTree {
    constructor() {
        // root of a binary search tree
        this.root = null;
    }

    // insert Data 
    insert(data) {
        // Creating a node and initialising with data
        let newNode = new Node(data);
        // If root is null then newNode will be added to tree and made root
        if(!root) {
            this.root = newNode;
        } else 
            // Find the correct position to insert newNode
            this.insertNode(this.root, newNode);
    } 

    insertNode(node, newNode) {
        // Check if newData is less than the node data
        // If so newData moves to left tree
        if(newNode.data < node.data) {
            // If left node is null 
            // Insert node in it else recurr until null is found
            if(node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } 
        // If newData is more than the node data
        // newData moves to right tree
        else {
            // If right node is null
            // Insert node in it else recurr until null if found
            if(node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // remove Node
    remove(data) {
        this.root = this.removeNode(this.root, newNode);
    }

    // Recursive Function to removeNode with the data
    removeNode(node, newData) {
        // Check if the root is null or not
        if(node === null) 
            return null;

        // If newData to be deleted is less than the root
        // Moves to left subtree 
        else if(newNode.data < node.data) {
            node.left = this.removeNode(node.left, newData);
            return node;
        }
        // If newData to be deleted is greater than the root
        // Moves to right subtree 
        else if(newNode.data > node.data) {
            node.right = this.removeNode(node.right, newData);
            return node;
        }
        // If newData is similar to root's data
        // Then delete this node
        else {
            // Deleting node with no children
            if(node.left === null && node.right === null) {
                node = null;
                return node;
            } 
            // Deleting node with one children
            if(node.right === null) {
                node = node.left;
                return node;
            } else if(node.left === null) {
                node = node.right;
                return node;
            }
        }
    }

    // Find minimum node in tree
    findMinNode(node) {
        if(node.left === null) {
            return null;
        } else {
            return this.findMinNode(node.left);
        }
    }
}