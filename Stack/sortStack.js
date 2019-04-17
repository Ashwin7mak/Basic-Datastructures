class Stack {
    constructor() {
        this.array = [];
    }

    isEmpty() {
        console.log("Stack is empty ?", this.array.length === 0);
        return this.array.length === 0;
    }


    push(element) {
        return this.array.push(element);
    }

    pop() {
        if (this.array.length < 0) {
            return "Stack is empty";
        } else {
            return this.array.pop();
        }
    }


    peek() {
        console.log("Peek element is ", this.array[this.array.length - 1]);
        return this.array[this.array.length - 1];
    }

    printStack() {
        let res = '';

        for(let i = 0; i < this.array.length; i++) {
            res += this.array[i] + '-';
        }
        console.log("Stack is ", res);
    }

}

Stack.prototype.sortStack = function() {

    let result = new Stack();
    // Check if given stack is empty or not
    while (this.array.length !== 0) {
        // Insert each element of stack array into result array
        let temp = this.array.pop();
        // Check if popped element is less than top item in the result array
        // If so push it into the stack array
        // Push the smaller element into the result array
        while (result.length !== 0 && temp < result.peek()) {
            this.array.push(result.pop());
        }
        result.push(temp);
    }

    // Push the elements in result array back into stack array
    // while (result.length !== 0) {
    //     this.array.push(result.pop());
    // }
    console.log("Sorted Stack is", result);
}


let stack1 = new Stack();

stack1.push(3);
stack1.push(6);
stack1.push(1);
stack1.push(8);
stack1.push(5);

stack1.printStack();

// stack1.peek();

// stack1.push(200);
// stack1.printStack();

// stack1.pop();
// stack1.printStack();


stack1.sortStack();
// stack1.printStack();