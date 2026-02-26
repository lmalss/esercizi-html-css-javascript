[cite_start]; // Array di partenza [cite: 244]
var voti = [30, 18, 24, 20, 30, 27, 22, 19];

// --- PARTE 1: Ordinamento (Bubble Sort) ---
// Prima facciamo una copia manuale dell'array.
// Perché? Perché l'esercizio dopo chiede di usare l'ordine "originale".
// Se ordiniamo direttamente 'voti', perdiamo la sequenza iniziale.

var votiOrdinati = [];
for (var i = 0; i < voti.length; i++) {
  votiOrdinati.push(voti[i]);
}

// Algoritmo di ordinamento "Bubble Sort" (scambio di variabili)
for (var i = 0; i < votiOrdinati.length; i++) {
  for (var j = 0; j < votiOrdinati.length - 1; j++) {
    // Confronto due numeri vicini.
    // Se il primo è MINORE del secondo, li scambio (perché voglio decrescente)
    if (votiOrdinati[j] < votiOrdinati[j + 1]) {
      var temp = votiOrdinati[j]; // Salvo il valore temporaneamente
      votiOrdinati[j] = votiOrdinati[j + 1]; // Sposto il più grande a sinistra
      votiOrdinati[j + 1] = temp; // Metto il più piccolo a destra
    }
  }
}

console.log("1. Voti ordinati (Decrescente): " + votiOrdinati);

[cite_start]; // --- PARTE 2: Filtrare voti >= 24 --- [cite: 245]
// Usiamo l'array originale 'voti', non quello ordinato
var votiAlti = [];

for (var i = 0; i < voti.length; i++) {
  if (voti[i] >= 24) {
    votiAlti.push(voti[i]);
  }
}

console.log("2. Voti alti (Ordine originale): " + votiAlti);

[cite_start]; // --- PARTE 3: Pari e Dispari --- [cite: 246]
// Lavoriamo sull'array appena creato 'votiAlti'
var votiModificati = [];

for (var i = 0; i < votiAlti.length; i++) {
  var numero = votiAlti[i];

  // Verifico se è pari usando il modulo (resto della divisione per 2)
  if (numero % 2 === 0) {
    // È PARI: Moltiplico per 2
    votiModificati.push(numero * 2);
  } else {
    // È DISPARI: Divido per 2
    votiModificati.push(numero / 2);
  }
}

console.log("3. Voti modificati: " + votiModificati);
