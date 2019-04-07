// Queue Class 
class Queue {
    // Array is used to implement queue
    constructor() {
        this.array = [];
    }

    // Enqueue Operation
    enqueue(element) {
        return this.array.push(element);
    }

    // Dequeue Operation
    dequeue() {
        if (this.array.length < 0) {
            return "Underflow";
        }
        return this.array.shift();    
    }

    // Front function
    front() {
        if (this.array.length < 0) {
            return "Queue is empty";
        }
        console.log("The head in the queue is ", this.array[0]);
        return this.array[0];
    }

    // isEmpty function
    isEmpty() {
        console.log("Yes, the queue is empty");
        return this.array.length == 0;
    }

    // Print elements in the queue
    printQueue() {
        let res = '';

        for (let i = 0; i < this.array.length; i++) {
            res += "<" + this.array[i];
        }
        console.log("----->", res);
    }
}


let queue1 = new Queue();

queue1.isEmpty();

queue1.enqueue(20);
queue1.enqueue(40);
queue1.enqueue(60);
queue1.enqueue(80);
queue1.printQueue();

queue1.front();

queue1.dequeue();
queue1.printQueue();

queue1.enqueue(200);
queue1.printQueue();

// queue1.dequeue();
// queue1.printQueue();