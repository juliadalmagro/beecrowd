const pegarValores = (linha) => linha.split(' ').map((item) => Number(item));

let [dado1, dado2, dado3] = pegarValores(lines.shift());
codigo1 = dado1;
valor1 = dado2 * dado3;

let [dado4, dado5, dado6] = pegarValores(lines.shift());
codigo2 = dado4;
valor2 = dado5 * dado6;

let valorTotal = (valor1 + valor2).toFixed(2);

console.log(`VALOR A PAGAR: R$ ${valorTotal}`);