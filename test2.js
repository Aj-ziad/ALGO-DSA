//push on the linked list
class Node{
    constructor(value){
        this.value=this.value
        this.next=null
    }
    
}
   class Stack{
        constructor() {
            this.top=null
            this.length=0
            
        }
        push(value){
            let newNode= new Node(value)
            if(this.length===0){
                this.top=newNode
            }else{
                newNode.next=this.top
                this.top=newNode
            }
            this.length++
            return this
        }
  isEmpty() {
        return this.length === 0;
        // Alternative: return this.top === null;
    }
    toString(){
        let curr = this.top
        while(curr){
            console.log(curr.value + "\n");
            curr=curr.next;
        }
    }
    }
    const linkedStack = new Stack();
linkedStack.push(10);
linkedStack.push(20);
linkedStack.push(30);
linkedStack.push(40);
console.log(linkedStack.toString())
