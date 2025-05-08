/*
✅ Sintaxe básica:

    if (condição) {
        // bloco se a condição for verdadeira
    } else {
        // bloco se a condição for falsa
    }

        if (condição 1) {
        // bloco se a condição 1 for verdadeira
    } else if (condição 2) {
        // bloco se a condição 2 for atendida
    }else{
        //bloco se nenhuma das 2 condicoes for verdadeira 
    }

*/

//EXEMPLO 001

    let nome = prompt("Qual é o seu nome?");
    let idade = prompt("Quantos anos você tem?");

    idade = Number(idade); // converte string para número

    if (idade >= 18) {
    alert(`Olá, ${nome}! Você é maior de idade.`);
    } else {
    alert(`Olá, ${nome}! Você ainda é menor de idade.`);
    }

//EXEMPLO 002

const numSorteado1 = Math.floor(Math.random() * 100);
const numSorteado2 = Math.floor(Math.random() * 100);
console.log(`Números sorteados: ${numSorteado1} e
${numSorteado2}`);
if (numSorteado1 > numSorteado2) {
    console.log(`O número ${numSorteado1} é maior que o número
${numSorteado2}`);
}
else if (numSorteado2 > numSorteado1) {
    console.log(`O número ${numSorteado2} é maior que o número
${numSorteado1}`);
}
else {
    console.log(`${numSorteado1} é igual ao número
${numSorteado2}`);
}