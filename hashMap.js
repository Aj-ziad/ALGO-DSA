class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) this.dataMap[index] = [];
    for (let i = 0; i < this.dataMap[index].length; i++) {
      if (this.dataMap[index][i][0] === key) {
        this.dataMap[index][i][1] = value;
        return this;
      }
    }
    this.dataMap[index].push([key, value]);
    return this;
  }
  get(key) {
    let index = this._hash(key);
    if (!this.dataMap[index]) {
      return undefined;
    }
    for (let i = 0; i < this.dataMap[index].length; i++) {
      if (this.dataMap[index][i][0] === key) {
        return this.dataMap[index][i][1];
      }
    }
  }
  remove(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          const removedItem = this.dataMap[index].splice(i, 1);
          if (this.dataMap[index].length === 0) {
            this.dataMap[index] = undefined;
          }
          return removedItem[0][1];
        }
      }
    }
    return undefined;
  }
}

console.log("----- TEST 1 : SET & GET -----");
const myHashTable = new HashTable();

myHashTable.set("Laptops", 50);
myHashTable.set("Smartphones", 100);

const qteLaptops = myHashTable.get("Laptops");

const qtePhones = myHashTable.get("Smartphones");

if (qteLaptops === 50 && qtePhones === 100) {
  console.log("✅ SUCCÈS : Données récupérées correctement.");
} else {
  console.log("❌ ERREUR : Valeurs incorrectes.");
  console.log("Laptops:", qteLaptops, "(Attendu: 50)");
}

console.log("\n----- TEST 2 : COLLISIONS & UPDATE -----");

// Mise à jour d'une valeur existante
myHashTable.set("Laptops", 45); // On en a vendu 5

// Vérification update
if (myHashTable.get("Laptops") === 45) {
  console.log("✅ SUCCÈS : Mise à jour (Update) fonctionne.");
} else {
  console.log("❌ ERREUR : La valeur n'a pas été mise à jour.");
}

// Ajout massif pour forcer des collisions dans notre petit tableau de 7
myHashTable.set("Tablets", 20);
myHashTable.set("Monitors", 15);
myHashTable.set("Keyboards", 200);

// Si le code ne plante pas et retrouve tout, c'est que les collisions sont gérées
if (
  myHashTable.get("Keyboards") === 200 &&
  myHashTable.get("Monitors") === 15
) {
  console.log(
    "✅ SUCCÈS : Collisions gérées (tous les éléments sont accessibles).",
  );
} else {
  console.log("❌ ERREUR : Des données ont été perdues (écrasement ?).");
}

console.log("\n----- TEST 3 : REMOVE -----");

// On retire les Tablets
const removedValue = myHashTable.remove("Tablets");

// 1. Vérifier la valeur de retour
const checkReturn = removedValue === 20;

// 2. Vérifier que ça n'existe plus
const checkGone = myHashTable.get("Tablets") === undefined;

// 3. Vérifier que les voisins sont toujours là (Collision check)
const checkNeighbors = myHashTable.get("Keyboards") === 200;

if (checkReturn && checkGone && checkNeighbors) {
  console.log(
    "✅ SUCCÈS : Élément supprimé proprement sans casser les voisins.",
  );
} else {
  console.log("❌ ERREUR sur Remove.");
  console.log("Valeur retournée :", removedValue);
  console.log("Existe encore ?", !checkGone);
}