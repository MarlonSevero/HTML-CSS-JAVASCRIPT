//criando variáveis
let value1 = 50;
let value2 = 30;
let total = 0;

console.log(`Valor 1 = ${value1}`);
console.log(`Valor 2 = ${value2}`);
console.log('--------------------------');

//aplicando os operadores
value1++;
value2--;
console.log(`Novo Valor 1 = ${value1}`);
console.log(`Novo Valor 2 = ${value2}`);
console.log('--------------------------');
//operação pré-fixada
console.log("Operação pré-fixada");
value1 = 50;
total = ++value1 + 50;
console.log(`Valor total = ${total}`);
console.log(`Novo Valor 1 = ${value1}`);
console.log('--------------------------');

//operação pós-fixada
console.log("Operação pós-fixada");
value1 = 50;
total = value1++ + 50;
console.log(`Valor total = ${total}`);
console.log(`Novo Valor 1 = ${value1}`);
console.log('--------------------------');