function controllonumero(numero) {
  if (numero > 0) {
    console.log("Il numero " + numero + " è positivo.");
  } else if (numero < 0) {
    console.log("Il numero " + numero + " è negativo.");
  } else {
    console.log("Il numero è zero.");
  }
}

console.log("--- Esecuzione ---");
controllonumero(10);
controllonumero(-5);
controllonumero(0);
controllonumero(12.5);
