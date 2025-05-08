/*
O do...while é um laço de repetição semelhante ao while, mas com uma diferença crucial:

Ele executa o bloco ao menos uma vez, mesmo que a condição seja falsa logo de início.

✅ Sintaxe:
do {
  // bloco de código
} while (condição);

*/

let i = 0;

do {
  console.log("Valor de i:", i);
  i++;
} while (i < 3);