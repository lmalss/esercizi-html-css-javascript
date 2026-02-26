// 1. Array iniziale
var animali = ["cane", "gatto", "topo"];

// Sostituisco "topo" (indice 2) con "tigre"
animali[2] = "tigre";

// Chiedo un nuovo animale all'utente
var nuovoAnimale = prompt("Inserisci un nuovo animale: ");

// Lo aggiungo alla lista
animali.push(nuovoAnimale);

// Stampo la lista formattata
console.log("--- Lista Animali ---");
for (var i = 0; i < animali.length; i++) {
  // Uso i + 1 per mostrare "Animale n.1" invece di "n.0" (più umano)
  console.log(animali[i] + " è l'animale n " + (i + 1));
}
