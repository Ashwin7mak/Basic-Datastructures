// User Defined Class Node     
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}


// User Defined Class LinkedList
class Linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add element to the list
    addElement(element) {
        
        // Create a node
        let node = new Node(element);
        // Variable to store current element 
        let current;

        // Check if the list is empty
        if(this.head === null) {
            // Add element and make it as head
            this.head = node;
        } else {
            // Make current as head
            current = this.head;

            // Iterate to the end of list 
            while(current.next) {
                current = current.next;
            }
            // Add element at the end of list
            current.next = node;        
        }
        // Increment the size
        this.size++;
    }


    // Insert position
    insertAt(element, index) {
        // Check if index is greater than 0 and size of list
        if(index > 0 && index > this.size) {
            return false;
        } else {

            let node = new Node(element);

            let curr, prev;

            curr = this.head;

            // Insert at index 0 (as first element)
            if(index == 0) {

                node.next = head;
                this.head = node;

            } else {     

                curr = this.head;

                let it = 0;

                while(it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // Add the element
                node.next = curr;
                prev.next = node;
            }
        }
        // Increment the size
        this.size++;
    }

    // Remove element based on index
    removeFrom(index) {

        if(index > 0 && index > this.size) {
            return -1;
        } else {

            let curr, prev, it = 0;

            curr = this.head;

            prev = curr;
            // Check if the index is 0
            if(index === 0) {
                // Remove head and make next element as head
                this.head = curr.next;
            } else {
                // Iterate to the end of the list
                // Remove the last element from the list 
                // Make prev element as the last element
                while(it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                prev.next = curr.next;
            }
            this.size--;
            // Return the removed element
            return curr.element;
        }
    }
    
    // Remove element from the list
    removeElement(element) {
        let curr = this.head;
        let prev = null;

        while(curr !== null) {
            if(curr.element === element) {
                if(prev === null) {
                    this.head = curr.next;
                } else {
                    prev.next = curr.next;
                }
                this.size--;
                return curr.element; 
            }
            prev = curr;
            curr = curr.next; 
        }
        return -1;      
    }

    // Prints the list
    printList() {
        let curr = this.head;
        let res = '';
        while(curr) {
            res += curr.element + '->';
            curr = curr.next;
        }
        console.log("==", res);
    }


}


let list1 = new Linkedlist();

list1.addElement(5);
list1.addElement(10);
list1.addElement(15);
list1.addElement(25);

list1.printList();


list1.insertAt(20, 3);
list1.printList();

list1.removeFrom(2);
list1.printList();

list1.removeElement(25);
list1.printList();
