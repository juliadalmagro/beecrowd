const pegarValores = (linha) => linha.split(' ').map((item) => Number(item));

let [dado1, dado2, dado3] = pegarValores(lines.shift());
let a = dado1;
let b = dado2;
let c = dado3;

let maiorAB = ((a + b) + Math.abs(a - b)) / 2;

let maior = ((maiorAB + c) + Math.abs(maiorAB - c)) / 2;

console.log(`${maior} eh o maior`);
