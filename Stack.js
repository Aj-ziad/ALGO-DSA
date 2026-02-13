class Node{
    constructor(value){
        
        this.value=value
        this.next=null

    }

}
class Stack{
    constructor(){
    
        this.top= null
        this.length=0
    }
    push(value){
        let NewNode= new Node( value)
        if(this.length===0){
            this.top=NewNode
        }else{
            NewNode.next=this.top
            this.top=NewNode
        }
        this.length++
        return this

    }
    pop(){
        if(this.length===0) return null
           let temp= this.top
           this.top=this.top.next
           temp.next = null
       this.length--
       return temp

    }
    peek(){
        return this.top
    }
    isEmpty(){
       return this.length===0
    } 
    clear(){
        this.top=null
        this.length=0
    }

}
console.log("----- TEST 1 : PUSH (Linked List) -----");
const linkedStack = new Stack();
linkedStack.push(10);
linkedStack.push(20);
linkedStack.push(30);

// Visuel attendu :
// 30 (Top) -> pointe vers 20
// 20 -> pointe vers 10
// 10 -> pointe vers null

if (linkedStack.top.value === 30 && linkedStack.top.next.value === 20 && linkedStack.length === 3) {
    console.log("✅ SUCCÈS : 30 est bien au sommet et pointe vers 20.");
} else {
    console.log("❌ ERREUR : Les liens sont brisés.");
    console.log("Top actuel :", linkedStack.top);
}

console.log("\n----- TEST 2 : POP (Linked List) -----");
// État actuel : 30 -> 20 -> 10

const removedNode = linkedStack.pop(); // Doit être 30

// État attendu : 20 -> 10
const newTop = linkedStack.peek(); // Doit être 20

if (removedNode.value === 30 && newTop.value === 20 && linkedStack.length === 2) {
    console.log("✅ SUCCÈS : 30 retiré, 20 est le nouveau chef.");
} else {
    console.log("❌ ERREUR : Problème sur Pop.");
    console.log("Retiré :", removedNode);
    console.log("Nouveau Top :", newTop);
}

console.log("\n----- TEST 3 : CLEAR -----");
linkedStack.clear();

if (linkedStack.top === null && linkedStack.length === 0) {
    console.log("✅ SUCCÈS : La stack est vide (Head est null).");
} else {
    console.log("❌ ERREUR : Il reste des éléments.");
}

