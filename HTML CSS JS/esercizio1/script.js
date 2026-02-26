const carta = document.getElementById("productCard");
const cardImg = document.getElementById("cardImg");
const cartatitolo = document.getElementById("carta-titolo");

carta.addEventListener("click", function (event) {
  console.log(event);

  carta.style.backgroundColor = "#d0e8ff";

  cartatitolo.style.textTransform = "uppercase";

  // sostituire l'immagine
  cardImg.src = "https://picsum.photos/seed/product2/400/300";
});
