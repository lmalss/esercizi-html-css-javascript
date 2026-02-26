const immagini = [
  'https://picsum.photos/seed/s1/400/250',
  'https://picsum.photos/seed/s2/400/250',
  'https://picsum.photos/seed/s3/400/250',
  'https://picsum.photos/seed/s4/400/250',
  'https://picsum.photos/seed/s5/400/250',
];

let indiceCorrente = 0;

const sliderImg = document.getElementById('sliderImg');
const counter = document.getElementById('counter');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

function aggiornaSlider() {
  sliderImg.src = immagini[indiceCorrente];
  counter.textContent = (indiceCorrente + 1) + ' / ' + immagini.length;
  btnPrev.disabled = indiceCorrente === 0;
  btnNext.disabled = indiceCorrente === immagini.length - 1;
}

btnPrev.addEventListener('click', function() {
  indiceCorrente = indiceCorrente - 1;
  aggiornaSlider();
});

btnNext.addEventListener('click', function() {
  indiceCorrente = indiceCorrente + 1;
  aggiornaSlider();
});

// avvia lo slider con la prima immagine
aggiornaSlider();
