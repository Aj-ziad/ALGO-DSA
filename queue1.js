class Queue {
    constructor(capacity = Infinity) {
        this.list = [];
        this.size = 0;
        this.capacity = capacity;
    }

    enqueue(val){
        this.size++;
        return this.list.push(val);

    }

    dequeue(){
        if(this.size === 0){
            return null;
        }else {
            this.size--;
            return this.list.shift();
        }
    }

    peek(){
        if(this.size === 0){
            return null;
        }
        return this.list[0];
    }
    isEmpty(){
        if(this.size === 0){
            return true;
        }return false;
    }
    isFull(){
        if(this.size >0){
            return true 

    }
        return false;
}
reverse(){
    let reversed = new Queue(this.capacity);
    for(let i = this.size - 1; i >= 0; i--){
        reversed.enqueue(this.list[i]);
    }
    return reversed;
}
}
const queue = new Queue();



// console.log(queue.isEmpty());

// console.log(queue.peek());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
const reversedQueue = queue.reverse();
console.log(reversedQueue.dequeue());
console.log(reversedQueue.dequeue());
console.log(reversedQueue.dequeue());

// console.log(queue.isFull());


// console.log(queue.peek());
// console.log(queue.dequeue());
// queue.enqueue(4);


// console.log(queue.peek());
// queue.dequeue();
// console.log(queue.peek());

// console.log(queue.dequeue());
// console.log(queue.dequeue());
// queue.enqueue(1);
// console.log(queue.isEmpty());
// queue.dequeue();
// console.log(queue.isEmpty());
