/*
✅ Sintaxe do while:
    while (condição) {
    // bloco de código a ser executado
    }

let contador = 0;

while (contador < 5) {
  console.log("Contador vale:", contador);
  contador++;
}

*/


//declarando as variáveis
let numerosSorteados;
let totalSorteio = 10;

//declarando o for
for (let i = 0; i <= 9; i++) {

    //sorteando os números
    numerosSorteados = Math.ceil(Math.random() * 100);

    fazendo o while para verificar se o número não é par
    while(numerosSorteados % 2 !== 0)
    {
        //quando número ímpar, entra e refaz o sorteio
        numerosSorteados = Math.ceil(Math.random() * 100);

        //somando 1 cada vez que fizer novo sorteio
        totalSorteio++;        
    }
    
    //exibindo os números sorteados
    console.log(`Números sorteados: ${numerosSorteados}`);
}

//exibindo a quantidade de sorteios
console.log(`Quantidade de sorteios realizados:
${totalSorteio}`);