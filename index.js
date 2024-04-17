var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let qComparacoes = Number(lines.shift());
let pegarValores = (linha) => linha.split(' ').map((item) => Number(item));
let [c1, c2, cp1, cp2] = pegarValores(lines.shift());
let [c3, c4, cp3, cp4] = pegarValores(lines.shift());
let [c5, c6, cp5, cp6] = pegarValores(lines.shift());
let [c7, c8, cp7, cp8] = pegarValores(lines.shift());
let [c9, c10, cp9, cp10] = pegarValores(lines.shift());
let [c11, c12, cp11, cp12] = pegarValores(lines.shift());
let i = 0;

while(i < qComparacoes){
    i++;
    let [] = pegarValores(lines.shift());
}    

