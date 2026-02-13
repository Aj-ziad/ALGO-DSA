class Stack {
    constructor(){
        this.items =[]
    }
    push(elm){
        this.items.push(elm)
    }
    pop(){
        if(this.items.length ===0){
            return "stack is empty"
        }
        return this.items.pop()
    }
    peek(){
         if(this.items.length ==0){
            return "stack is empty"
        }
         return this.items[this.items.length-1]

    }
    isEmpty(){
        return (this.items.length === 0)?true:false
    }
    size(){
        return this.items.length
    }
    clear(){
         return this.items= []
    }
    toString(){
       return this.items.slice().reverse().join(",")
    }
   
}

console.log("----- TEST 1 : PUSH & PEEK -----");
const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);

// État attendu : [10, 20, 30] (30 est au sommet)

const sommet = myStack.peek(); // Doit être 30
const taille = myStack.size(); // Doit être 3

if (sommet === 30 && taille === 3) {
    console.log("✅ SUCCÈS : 30 est bien au sommet.");
} else {
    console.log("❌ ERREUR : Peek ou Size incorrect.");
    console.log("Sommet obtenu :", sommet);
}
console.log("\n----- TEST 2 : POP (LIFO) -----");
// Pile actuelle : 10, 20, 30 (Haut)

const removed1 = myStack.pop(); // Doit être 30
const removed2 = myStack.pop(); // Doit être 20

// Il doit rester 10
const nouveauSommet = myStack.peek(); // Doit être 10

if (removed1 === 30 && removed2 === 20 && nouveauSommet === 10) {
    console.log("✅ SUCCÈS : Ordre de sortie respecté (30, puis 20).");
} else {
    console.log("❌ ERREUR : LIFO non respecté.");
    console.log("Sortie 1 :", removed1);
    console.log("Sortie 2 :", removed2);
}
console.log("\n----- TEST 3 : CLEAR & TOSTRING -----");
myStack.clear();

const estVide = myStack.isEmpty(); // Doit être true

myStack.push(100);
myStack.push(200);
// Visuel attendu : 200 en haut, 100 en bas.

const affichage = myStack.toString();
// Vérifions si 200 apparaît avant 100 dans la chaîne
const index200 = affichage.indexOf("200");
const index100 = affichage.indexOf("100");

if (estVide === true && index200 < index100) {
    console.log("✅ SUCCÈS : La pile a été vidée, puis l'affichage est correct (Haut vers Bas).");
    console.log("Rendu visuel :\n" + affichage);
} else {
    console.log("❌ ERREUR : Problème sur Clear ou toString.");
    console.log("Est vide ?", estVide);
    console.log("Affichage :", affichage);
}