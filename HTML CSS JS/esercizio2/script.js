let risultato = 1;

const moltiplica = document.getElementById("bottonex2");
const risultatoSpan = document.getElementById("risultato:");

moltiplica.addEventListener("click", function () {
  risultato = risultato * 2;
  risultatoSpan.textContent = risultato;
});
