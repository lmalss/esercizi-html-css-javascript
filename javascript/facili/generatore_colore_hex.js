function coloreCasuale() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
console.log("Colore generato:", coloreCasuale());
