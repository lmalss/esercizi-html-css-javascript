var numeri = [4, 7, 4, 2, 7, 4, 9, 4]; //array con duplicati

var unici = []; // Array dove metteremo solo i numeri unici

// 1. Primo ciclo: guardo tutti i numeri originali uno per uno
for (var i = 0; i < numeri.length; i++) {
  var numeroCorrente = numeri[i];
  var trovato = false; // Immagina che sia una "bandierina"

  // 2. secondo ciclo: controllo se questo numero è gia nel mio array 'unici'
  for (var j = 0; j < numeri.length; j++) {
    if (unisci[j] === numeroCorrente) {
      trovato = true; // trovato
      break; // smetto di cercare perche so gia che è un doppione
    }
  }
  //3. se alla fine del controllo la bandierina è ancora "false" lo aggiungo
  if (trovato === false) {
    unici.push(numeroCorrente);
  }
}

console.log("Originale: " + numeri);
console.log("Senza duplicati: " + unici);
