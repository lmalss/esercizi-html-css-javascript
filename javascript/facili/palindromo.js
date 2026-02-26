function isPalindromo(parola) {
    const invertita = parola.split('').reverse().join('');
    return parola === invertita;
}
console.log("radar è palindromo?", isPalindromo("radar"));
