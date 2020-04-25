// Class Node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// Class DoublyLinkedList
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addElement(element) {
        let node = new Node(element);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    addElementAt(element, index) {
        // Check if the index is valid
        if (index < 0 || index > this.size) {
            console.log("Sorry, given index is out of list");
            return false;
        }

        let current = this.head;
        let node = new Node(element);
        let counter = 1;

        if (index == 0) {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        } else {
            while (current) {
                current = current.next;
                if (counter == index) {
                    node.prev = current.prev;
                    current.prev.next = node;
                    node.next = current;
                    current.prev = node;
                }
                counter++;
            }
        }
        this.size++;
    }

    removeElement(element) {
        let current = this.head;

        while (current) {
            if (current.data == element) {
                // If current is only element in the DLL
                if (current == this.head && current == this.tail) {
                    this.head = null;
                    this.tail = null;
                }
                // If current is the head in the DLL
                else if (current == this.head) {
                    this.head = this.head.next;
                    this.head.prev = null;
                }
                // If current is the tail in the DLL
                else if (current == this.tail) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                }
                // If current is any element in the DLL
                else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
            }
            current = current.next;
        }
        this.size--;
    }

    removeElementFrom(element, index) {
        // Check if the index is valid
        if (index < 0 || index > this.size) {
            console.log("Sorry, given index is out of list");
            return false;
        }

        let current = this.head;
        let counter = 1;
        // Check if the index is at head
        if (index == 0) {
            this.head = this.head.next;
            this.head.prev = null;
        } else {
            while (current) {
                current = current.next;
                // Check if the index is at tail
                if (current == this.tail) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                }
                // Check if the index is other than at head and tail
                else if (counter == index) {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                counter++;
            }
        }
        this.size--;
    }

    reverse() {
        let current = this.head;
        let prev = null;

        while (current) {
            let next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        }

        this.tail = this.head;
        this.head = prev;
    }

    printList() {
        let current = this.head;
        let result = '';

        while (current) {
            result += current.data + '<-->';
            current = current.next;
        }
        console.log("DoublyLinkedList is ", result);
    }

}


let dll = new DoublyLinkedList();

dll.addElement(10);
dll.addElement(20);
dll.addElement(30);
dll.addElement(40);

dll.printList();

dll.addElementAt(50, 0);

dll.printList();

dll.removeElement(50);

dll.printList();

dll.addElement(40);

dll.removeElementFrom(30, 2);

dll.printList();

dll.reverse();

dll.printList();