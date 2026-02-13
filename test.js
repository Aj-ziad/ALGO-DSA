

class Stack {
    constructor(){
        this.list = [];
        this.top = null;
        this.length = 0;
    }

    push(num){
        this.top = num;
        this.list.push(num);
        this.length++;
    }

   isEmpty(){
       return this.length===0
    }

    toString(){
        return this.list.slice().reverse().join("\n")
    }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);
console.log(myStack.toString());