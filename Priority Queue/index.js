// User defined class
// To store elements and its property
class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

// PriorityQueue class
class PriorityQueue {
    // Array implementation
    constructor() {
        this.array = [];
    }

    // isEmpty function
    isEmpty() {
        return this.array.length == 0;
    }

    // Enqueue function
    enqueue(element, priority) {
        let element1 = new QElement(element, priority);
        let contain = false;

        // Loop through the array
        // Add element at the correct location of the Queue
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i].priority > element1.priority) {
                this.array.splice(i, 0, element1);
                contain = true;
                break;
            }
        }

        // If the element have the highest priority 
        // it is added at the end of the queue 
        if (!contain) {
            this.array.push(element1);
        }
    }

    // Dequeue function
    dequeue() {
        if (this.array.length == 0) {
            return "Underflow";
        }
        return this.array.shift();
    }

    // Front function
    front() {
        if (this.array.length == 0) {
            return "Queue is empty";
        }
        console.log("The front element in the priority queue is", this.array[0]);
        return this.array[0];
    }

    // Rear function
    rear() {
        if (this.array.length == 0) {
            return "Queue is empty";
        }
        console.log("The rear element in the priority queue is", this.array[this.array.length - 1]);
        return this.array[this.array.length - 1];
    }

    // PrintPQueue function
    printPriorityQueue() {
        let res = "";
        for (let i = 0; i < this.array.length; i++) {
            res += ">" + this.array[i].element;
        }
        return res;
    }
}

const PQueue1 = new PriorityQueue();

console.log("The queue is empty or not ", PQueue1.isEmpty());

PQueue1.enqueue("Ash", 1);
PQueue1.enqueue("Ram", 1);
PQueue1.enqueue("Deva", 2);
PQueue1.enqueue("Buvi", 3);
PQueue1.enqueue("Sp", 2);
console.log(PQueue1.printPriorityQueue());

PQueue1.front();

PQueue1.rear();

PQueue1.dequeue();
console.log(PQueue1.printPriorityQueue());