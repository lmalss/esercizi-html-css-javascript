const prompt = require("prompt-sync")();

// 1. Definisco l'array bidimensionale (un array di array)
var orario = [
  ["Informatica", "Sistemi", "TPS"], // Giorno 1 (indice 0)
  ["Italiano", "Matematica", "Inglese"], // Giorno 2 (indice 1)
];

// --- PARTE A: Stampa di tutto l'orario ---
console.log("--- ORARIO COMPLETO ---");

// Primo ciclo (esterno): scorre le righe (i GIORNI)
for (var i = 0; i < orario.length; i++) {
  // Secondo ciclo (interno): scorre gli elementi dentro quella riga (le ORE)
  // Nota: orario[i].length mi dice quante materie ci sono in quel giorno specifico
  for (var j = 0; j < orario[i].length; j++) {
    // Uso (i + 1) e (j + 1) solo per la stampa estetica (l'umano conta da 1, il PC da 0)
    // Per accedere ai dati uso i veri indici [i][j]
    console.log(
      "Giorno " + (i + 1) + " - Ora " + (j + 1) + ": " + orario[i][j]
    );
  }
}

console.log("-----------------------");

// --- PARTE B: Richiesta utente e controllo ---

// Chiedo i dati (ricorda Number per convertire la stringa in numero)
var giornoUtente = Number(prompt("Inserisci il giorno (es. 1 o 2): "));
var oraUtente = Number(prompt("Inserisci l'ora (es. 1, 2 o 3): "));

// CONVERSIONE: L'utente scrive 1, ma per noi è l'indice 0. Tolgo 1.
var riga = giornoUtente - 1;
var colonna = oraUtente - 1;

// CONTROLLO VALIDITÀ (Validazione)
// 1. Controllo se la riga esiste (deve essere tra 0 e la lunghezza delle righe)
if (riga >= 0 && riga < orario.length) {
  // 2. Se la riga esiste, controllo se la colonna esiste IN QUELLA riga
  if (colonna >= 0 && colonna < orario[riga].length) {
    // Se tutto è ok, stampo la materia
    console.log("La materia è: " + orario[riga][colonna]);
  } else {
    console.log("Errore: Quell'ora non esiste in questo giorno.");
  }
} else {
  console.log("Errore: Quel giorno non esiste.");
}
