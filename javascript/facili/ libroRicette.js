// 1. STRUMENTO PER SCRIVERE NEL TERMINALE
var prompt = require("prompt-sync")();

// 2. CREIAMO IL LIBRO (ARRAY DI OGGETTI)
// Ho usato gli accenti gravi (backticks) ` ` per poter andare a capo col testo
var libro = [
  // Indice 0 (Pagina vuota)
  { titolo: "Copertina", contenuto: "Libro Chiuso" },

  // Indice 1 (Pagina Indice)
  { titolo: "Indice", contenuto: "Sommario..." },

  // Indice 2 (PAGINA SINISTRA DELLO SCREENSHOT)
  {
    titolo: "IL MIO LIBRO DI RICETTE",
    contenuto: `
Benvenuto nel ricettario di casa.
A sinistra trovi introduzioni,
note, suggerimenti ed appunti.

Puoi usare queste pagine per
annotare variazioni, segreti
di famiglia o menù completi.

Idee da appuntare:
• Menù della settimana
• Lista della spesa
• Abbinamenti vino / piatto

"Una ricetta non è una regola,
ma un punto di partenza."`,
  },

  // Indice 3 (PAGINA DESTRA DELLO SCREENSHOT)
  {
    titolo: "PASTA AL POMODORO",
    contenuto: `
Tempo: 20 minuti
Difficoltà: Facile

Ingredienti:
• Pasta
• Passata di pomodoro
• Olio d'oliva
• Sale
• Basilico fresco

Procedimento:
1. Porta a bollore l'acqua.
2. Sala e cuoci la pasta.
3. Scalda olio e pomodoro in padella.
4. Scola e salta la pasta nel sugo.
5. Guarnisci con basilico fresco.`,
  },
];

// 3. CHIEDIAMO ALL'UTENTE QUALE PAGINA APRIRE
console.log("\n--- BENVENUTO ---");
var risposta = prompt("Inserisci il numero di pagina (es. 2): ");
var numeroPagina = parseInt(risposta); // Trasformiamo il testo in numero intero

// 4. RECUPERIAMO LE DUE PAGINE (Quella scelta + quella successiva)
var paginaSinistra = libro[numeroPagina];
var paginaDestra = libro[numeroPagina + 1];

// 5. STAMPIAMO IL RISULTATO
console.log("\n==============================================");

// Stampa Pagina Sinistra
if (paginaSinistra) {
  console.log("PAGINA " + numeroPagina);
  console.log("TITOLO: " + paginaSinistra.titolo);
  console.log("----------------------------------------------");
  console.log(paginaSinistra.contenuto);
} else {
  console.log("Pagina " + numeroPagina + " non esistente.");
}

console.log("\n===================  |  ====================\n");

// Stampa Pagina Destra (Adiacente)
if (paginaDestra) {
  console.log("PAGINA " + (numeroPagina + 1));
  console.log("TITOLO: " + paginaDestra.titolo);
  console.log("----------------------------------------------");
  console.log(paginaDestra.contenuto);
} else {
  console.log("Fine del libro (nessuna pagina successiva).");
}

console.log("==============================================\n");
