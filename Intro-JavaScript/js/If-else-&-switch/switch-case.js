/*
✅ Sintaxe básica do switch:

switch (expressao) {
  case valor1:
    // código a ser executado se expressao === valor1
    break;
  case valor2:
    // código se expressao === valor2
    break;
  default:
    // código se nenhum dos casos for satisfeito
}
*/

//Exemplo 

let dia = prompt("Digite um número de 1 a 7 para o dia da semana:");

switch (dia) {
  case "1":
    alert("Domingo");
    break;
  case "2":
    alert("Segunda-feira");
    break;
  case "3":
    alert("Terça-feira");
    break;
  case "4":
    alert("Quarta-feira");
    break;
  case "5":
    alert("Quinta-feira");
    break;
  case "6":
    alert("Sexta-feira");
    break;
  case "7":
    alert("Sábado");
    break;
  default:
    alert("Número inválido. Digite entre 1 e 7.");
}