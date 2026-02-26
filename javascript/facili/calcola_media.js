const voti = [28, 30, 24, 29, 27];
const media = voti.reduce((a, b) => a + b, 0) / voti.length;
console.log("La media è:", media);
