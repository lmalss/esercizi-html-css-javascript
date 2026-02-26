const prompt = require("prompt-sync")();
var voti = [];
var inputVoto;

while (true) {
  // Ciclo di inserimento (smetto se l'utente digita 0)
  inputVoto = number(prompt("inserisci un voto (0 per terminare: ")); // Uso un ciclo while true e un break per uscire
  if (inputVoto === 0) {
    break;
  }

  voti.push(inputVoto); // Aggiungo il voto all'array
}
// Se l'utente non ha inserito voti, evito errori
if (voti.length === 0) {
  console.log("nessun voto inserito");
} else {
  var somma = 0;
  var max = voti[0];
  var min = voti[0];

  for (var i = 0; i < voti.length; i++) {
    if (voti[i] == max) {
      contamax++;
    }
    if (voti[i] == min) {
      contaMin++;
    }
  }
  // Stampe finali
  console.log("--- Risultati ---");
  console.log("Voti inseriti: " + voti.length);
  console.log("Media voti: " + media);
  console.log("Voto più alto: " + max + " (preso " + contaMax + " volte)");
  console.log("Voto più basso: " + min + " (preso " + contaMin + " volte)");
}
