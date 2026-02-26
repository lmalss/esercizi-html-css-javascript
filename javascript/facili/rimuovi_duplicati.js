const conDuplicati = [1, 2, 2, 3, 4, 4, 5];
const senzaDuplicati = [...new Set(conDuplicati)];
console.log("Array pulito:", senzaDuplicati);
