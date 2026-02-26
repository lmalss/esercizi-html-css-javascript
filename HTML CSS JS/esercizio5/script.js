const pokemon = [
  { name: 'bulbasaur', id: 1, desc: 'Ha un seme sul dorso che cresce con lui. Assorbe energia solare.' },
  { name: 'charmander', id: 4, desc: 'La fiamma sulla coda indica il suo stato di salute.' },
  { name: 'squirtle', id: 7, desc: 'Schizza acqua con precisione dalla sua bocca rotonda.' },
  { name: 'pikachu', id: 25, desc: 'Accumula elettricità nelle sue guance e la scarica quando si sente minacciato.' },
  { name: 'mewtwo', id: 150, desc: 'Un Pokémon creato geneticamente. Estremamente potente.' },
  { name: 'eevee', id: 133, desc: 'Può evolversi in molte forme diverse a seconda delle pietre.' },
];

const listaPokemon = document.getElementById('listaPokemon');
const dettaglio = document.getElementById('dettaglio');

pokemon.forEach(function(p) {
  const li = document.createElement('li');
  li.textContent = p.name.charAt(0).toUpperCase() + p.name.slice(1);

  li.addEventListener('click', function() {
    // rimuove classe attivo da tutti
    document.querySelectorAll('#listaPokemon li').forEach(function(el) {
      el.classList.remove('attivo');
    });

    // aggiunge classe attivo a quello cliccato
    li.classList.add('attivo');

    // mostra i dettagli
    dettaglio.innerHTML = `
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png" alt="${p.name}">
      <h2>${p.name}</h2>
      <p>${p.desc}</p>
    `;
  });

  listaPokemon.appendChild(li);
});
