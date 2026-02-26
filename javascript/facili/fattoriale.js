function fattoriale(n) {
    if (n === 0 || n === 1) return 1;
    return n * fattoriale(n - 1);
}
console.log("Il fattoriale di 5 è:", fattoriale(5));
