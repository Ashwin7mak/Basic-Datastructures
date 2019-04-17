// Stack Class
class Stack {
    // Array implementation
    constructor() {
        this.item = [];
    }

    // Push element
    push(element) {
        return this.item.push(element);
    }

    // Pop element
    pop() {
        // Check if the length of stack is greater than 0
        // If not return underflow
        if (this.item.length < 0) {
            return "Underflow";
        } else {
            return this.item.pop();
        }
    }

    peek() {
        // Return the last element in the array
        console.log("Peek element is", this.item[this.item.length - 1]);
        return this.item[this.item.length - 1];
    }

    isEmpty() {
        if(this.item.length === 0) {
            console.log("Stack is empty");
        } else {
            console.log("Stack is not empty");
        } 
        return this.item.length === 0;
    }

    printStack() {
        let res = '';
        for (let i = 0; i < this.item.length; i++) {
            res += this.item[i] + "-"
        }
        console.log("--->", res);
    }
}


let stack1 = new Stack();
stack1.isEmpty();
stack1.push(10);
stack1.push(20);
stack1.push(30);
stack1.push(40);
stack1.push(50);

stack1.printStack();

stack1.peek();

stack1.push(100);
stack1.printStack();

stack1.pop();
stack1.printStack();


stack1.isEmpty();
stack1.printStack();