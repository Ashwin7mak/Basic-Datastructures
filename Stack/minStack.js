class MinStack {
    // Two arrays used one normal stack and other for maintaining min elements
    constructor() {
        this.min = [];
        this.stack = [];
    }

    // getMin function
    getMin() {
        let minEle = this.min[this.min.length - 1];
        console.log("Minimum element is", minEle);
        return this.min[this.min.length - 1];
    }

    // Push function
    push(x) {
        let min = this.getMin();

        this.stack.push(x);

        if (min == undefined || min >= x) {
            this.min.push(x);
        }
    }

    // Pop function
    pop() {
        let val = this.stack.pop();
        let min = this.getMin();

        if (val == min) {
            this.min.pop();
        }
    }

    // Top function
    top() {
        return this.stack[this.stack.length - 1];
    }

    // printStack function
    printStack() {
        let res = '';
        for (let i = 0; i < this.stack.length; i++) {
            res += this.stack[i] + '-';
        }
        console.log('---->', res);
    }

    // printMinStack function
    printMinStack() {
        let res = '';
        for (let i = 0; i < this.stack.length; i++) {
            res += this.min[i] + '-';
        }
        console.log('=', res);
    }

}

let obj = new MinStack();
obj.push(10);
obj.push(20);
obj.push(30);
obj.push(5);
obj.printStack();
obj.printMinStack();

obj.pop();
obj.printStack();
obj.printMinStack();

obj.getMin();