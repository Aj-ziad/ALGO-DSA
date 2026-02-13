class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}


class Stack {
    constructor(){
        this.list= []
        this.top = null
        this.length = 0
    }
    push(value){
        let newNode = new Node(value)
        if(this.length == 0) {
            this.top = newNode
        }else {
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
        this.list.push(value)
        return this
    }
    toString(){
        return this.list.slice().reverse().join("->")
    }
    pop(){
        if(this.length === 0 ) return null
        let temp = this.top 
        this.top = this.top.next
        temp.next = null
        this.length--
        // this.list.pop()
        return temp
    }

}


class MinStack {
    constructor(){
         this.list= []
        this.top = null
        this.length = 0
    }
    push(val){
        this.top = val
        this.list.push(val)
        this.length++
    }
    pop(){
        if(this.length === 0 ) return null
        this.top = this.list[this.length -1]
        this.list.pop()
        this.length--
    }

    top(){
        return this.top
    }
    getMin(){
        let temp = this.list.slice().reverse()
        temp.sort()
       return temp[0]
    }




}


const myList = new MinStack()
myList.push(5)
myList.push(3)
myList.push(80)
myList.push(2)
myList.pop()
console.log(myList.getMin())