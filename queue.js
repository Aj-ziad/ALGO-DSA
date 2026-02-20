class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}





class Queue {
  constructor() {
    this.front= null
    this.end=null
    this.length=0
  }
  enqueue(value){
    const newNode=new Node(value)
    if ( this.length===0){
        this.end=newNode
        this.front=newNode
    }else{
            this.end.next = newNode          
            this.end=newNode
    }
            this.length++


  }
  dequeue(){
    if(this.isEmpty()){
        return null
    }
        const temp=this.front
       if(this.length===1){
          this.front= null
          this.end=null

       }else{
          this.front=this.front.next
          temp.next = null;

       }
     
       this.length--
       return temp

  }
  peek(){
    return this.front
  }
  isEmpty(){
    return this.length===0
  }
  clear(){
    this.front= null
    this.end=null
    this.length=0
  }




}


console.log("----- TEST 1 : ENQUEUE & PEEK -----");
const linkedQueue = new Queue();

// Arrivée dans l'ordre
linkedQueue.enqueue("Client A");
linkedQueue.enqueue("Client B");
linkedQueue.enqueue("Client C");

// État attendu : Front [A] -> [B] -> [C] End
// Le prochain servi (Peek) DOIT être A
// Le dernier arrivé (End) DOIT être C

const premier = linkedQueue.peek(); // Retourne le nœud A
const dernier = linkedQueue.end;    // Retourne le nœud C

if (premier.value === "Client A" && dernier.value === "Client C" && linkedQueue.length === 3) {
    console.log("✅ SUCCÈS : Client A est devant, Client C est derrière.");
} else {
    console.log("❌ ERREUR : Pointeurs incorrects.");
    console.log("Front :", premier ? premier.value : "null");
    console.log("End :", dernier ? dernier.value : "null");
}

console.log("\n----- TEST 2 : DEQUEUE (FIFO) -----");
// File actuelle : A -> B -> C

const nodeA = linkedQueue.dequeue(); // Sort A
const nodeB = linkedQueue.dequeue(); // Sort B

// Il doit rester C en tête
const nouveauFront = linkedQueue.peek(); // Doit être le nœud C

if (nodeA.value === "Client A" && nodeB.value === "Client B" && nouveauFront.value === "Client C") {
    console.log("✅ SUCCÈS : A et B sont sortis, C est le nouveau chef.");
} else {
    console.log("❌ ERREUR : FIFO non respecté ou liens brisés.");
}

console.log("\n----- TEST 3 : EMPTY & CLEAR -----");

// Il reste C. On le sort.
linkedQueue.dequeue(); 

// Maintenant la file doit être vide
// IMPORTANT : front ET end doivent être null
if (linkedQueue.isEmpty() && linkedQueue.front === null && linkedQueue.end === null) {
    console.log("✅ SUCCÈS : Vide et propre (Front/End sont null).");
} else {
    console.log("❌ ERREUR : Il reste des pointeurs fantômes.");
    console.log("Front:", linkedQueue.front);
    console.log("End:", linkedQueue.end);
}

// Test Clear
linkedQueue.enqueue("Test");
linkedQueue.clear();
if (linkedQueue.length === 0) console.log("✅ SUCCÈS : Clear fonctionne.");

