function contaVocali(str) {
    const match = str.match(/[aeiou]/gi);
    return match ? match.length : 0;
}
console.log("Vocali in 'Intelligenza Artificiale':", contaVocali("Intelligenza Artificiale"));
