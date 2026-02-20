class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }

    // Hash 1 (Pour l'index de départ)
    _hash1(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }

    // Hash 2 (Uniquement pour le Double Hashing)
    _hash2(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 29) % this.dataMap.length;
        }
        // Le +1 garantit que le pas n'est jamais nul
        return (hash % (this.dataMap.length - 1)) + 1;
    }
    //Stratégie A : Linear Probing (set et get)
    // set(key, value){
    //     let index= this._hash1(key)
    //     while(this.dataMap[index]&&this.dataMap[index].key!== key){
    //         index==(index+1)%this.dataMap.length
    //     }
    //     if(this.dataMap[index] && this.dataMap[index].key=== key){
    //         this.dataMap[index].value=value
    //     }else{
    //         this.dataMap[index]= new Node(key , value)
    //     }
    //     return this
    // }
    // get(key){
    //     let index= this._hash1(key)
    //     while(this.dataMap[index]){
    //         if(this.dataMap[index].key ===key ){
    //             return this.dataMap[index].value
    //         }
    //         index= (index+1)%this.dataMap.length
    //     }
    // }
    //Stratégie B : Quadratic Probing (set et get)
    set(key,value){
        let index = this._hash1(key)
        let i = 0
        while(this.dataMap[index] && this.dataMap[index].key !== key){
            i++
            index = (this._hash1(key) + i * i) % this.dataMap.length
            if(i > this.dataMap.length){
                throw new Error('hash table is full')
            }
            
        } 
        this.dataMap[index] = new Node(key,value)
        return this
       }
       get(key){
        let index = this._hash1(key)
        let i = 0
        while(this.dataMap[index]){
            if(this.dataMap[index].key === key){
                return this.dataMap[index].value
            }
            i++
            index =  (this._hash1(key) + i *i )% this.dataMap.length
            if(i > this.dataMap.length){
                return undefined
            }
            return undefined

        }
       }
       //Stratégie C : Double Hashing (set et get)
    //    set(key,value){
    //     let index =this._hash1(key)
    //     let hash2 =this._hash2(key)
    //     let i=0
    //     while(this.dataMap[index]&& this.dataMap[index].key!==key){
    //         i++
    //         index = (this._hash1(key)+i*hash2)% this.length
    //         if(i>this.length){
    //             throw new Error("hashtable is full");
                
    //         }
    //     }
    //     if(!this.dataMap[index]){
    //         this.dataMap[index] = new Node(key, value)
    //     }else{
    //         this.dataMap[index].value = value

    //     }
    //     return this



    //    }
    //    get(key){
    //     let index = this._hash1(key)
    //     let hash2 = this._hash2(key)
    //     let i =0
    //      while(this.dataMap[index]){
    //         if (this.dataMap[index].key === key){
    //              i++
    //         index =  (this._hash1(key) +i *hash2 )% this.dataMap.length
    //         if(i > this.dataMap.length){
    //             return undefined
    //         }
    //         return undefined
    //         }
    //      }

       


    //     }
    }
 console.log("----- TEST : LINEAR PROBING -----");
const ht = new HashTable(7);

// Supposons Hash("A")=1, Hash("B")=1
ht.set("A", 10);
ht.set("B", 20); // Collision -> Index 2
ht.set("C", 30); // Collision -> Index 3

if (ht.get("B") === 20 && ht.get("C") === 30) {
    console.log("✅ SUCCÈS Linear : Collisions gérées par +1.");
}

console.log("----- TEST : QUADRATIC PROBING -----");
// Réinitialisez votre classe avec la logique Quadratique
const htQ = new HashTable(7);

// Hash("A")=1. 
htQ.set("A", 10); // Index 1
htQ.set("B", 20); // Hash=1. Collision. Saut +1^2 -> Index 2
htQ.set("C", 30); // Hash=1. Collision. Saut +2^2 (4) -> 1+4 = Index 5

// Si C est bien en 5, le get fonctionnera
if (htQ.get("C") === 30) {
    console.log("✅ SUCCÈS Quadratic : C a sauté de l'index 1 à 5.");
}
console.log("----- TEST : DOUBLE HASHING -----");
// Réinitialisez avec la logique Double Hash
const htD = new HashTable(7);

htD.set("A", 10);
htD.set("B", 20); 

// Ici, impossible de prédire l'index exact sans calculer le Hash2 à la main,
// mais si le .get("B") fonctionne, c'est que la logique est respectée.
if (htD.get("B") === 20) {
    console.log("✅ SUCCÈS Double Hashing : Élément retrouvé.");
}

