let board = ['', '', '', '', '', '', '', '', ''];
let giocatoreCorrente = 'X';
let finePartita = false;

const celle = document.querySelectorAll('.cella');
const stato = document.getElementById('stato');

const comboVincenti = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function controllaVincitore() {
  for (let i = 0; i < comboVincenti.length; i++) {
    const [a, b, c] = comboVincenti[i];
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  if (board.every(function(cella) { return cella !== ''; })) {
    return 'pareggio';
  }
  return null;
}

celle.forEach(function(cella) {
  cella.addEventListener('click', function() {
    const i = parseInt(cella.dataset.i);

    // ignora se cella già occupata o partita finita
    if (board[i] !== '' || finePartita) return;

    // segna la cella
    board[i] = giocatoreCorrente;
    cella.textContent = giocatoreCorrente;

    // controlla vincitore
    const risultato = controllaVincitore();

    if (risultato === 'pareggio') {
      stato.textContent = 'Pareggio!';
      finePartita = true;
    } else if (risultato !== null) {
      stato.textContent = 'Ha vinto ' + risultato + '!';
      finePartita = true;
    } else {
      // cambia turno
      giocatoreCorrente = giocatoreCorrente === 'X' ? 'O' : 'X';
      stato.textContent = 'Turno di ' + giocatoreCorrente;
    }
  });
});

document.getElementById('btnReset').addEventListener('click', function() {
  board = ['', '', '', '', '', '', '', '', ''];
  giocatoreCorrente = 'X';
  finePartita = false;
  celle.forEach(function(cella) {
    cella.textContent = '';
    cella.style.backgroundColor = '';
  });
  stato.textContent = 'Turno di X';
});
