var input = require("prompt-sync");

var score = 100;

while (true) {
  var scelta = input("per uscire scrivi 'esc'");
  if ((scelta = "esc")) {
    break;
  }
  num1 = Math.floor(Math.random() * 8);
  num2 = Math.floor(Math.random() * 8);
  num3 = Math.floor(Math.random() * 8);
  array = [num1, num2, num3];
  console.log(array);
  array.sort();

  if (array[0] == array[1] && aray[1] == array[2]) {
    score *= 3;
  } else if ((array[0] + 1 == array[1]) == array[2]) {
    somma = array[0] + array[1] + array[2];
    score = score + somma;
  } else {
    score -= 10;
    if (score < 0) {
      console.log("hai perso");
      break;
    }
  }
}
console.log(`punteggio: ${score}`);
