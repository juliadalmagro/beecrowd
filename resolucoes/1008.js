let numero = Number(lines.shift());
let horasTrabalhadas = Number(lines.shift());
let valorPorHora = Number(lines.shift());

let salario = horasTrabalhadas * valorPorHora;



console.log(`NUMBER = ${numero}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);