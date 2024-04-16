let nome = (lines.shift());
let salarioFixo = Number(lines.shift());
let montanteTotal = Number(lines.shift());

let salario = salarioFixo + (montanteTotal * 0.15);



console.log(`TOTAL = R$ ${salario.toFixed(2)}`);