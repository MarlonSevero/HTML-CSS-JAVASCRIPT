/*
// Comprimento
    str.length;                 // Retorna o número de caracteres da string

// Acesso por índice
    str.charAt(index);          // Retorna o caractere na posição especificada
    str.charCodeAt(index);      // Código Unicode do caractere

// Substrings
    str.slice(start, end);      // Retorna parte da string (pode usar negativos)
    str.substring(start, end);  // Retorna entre os índices (sem negativos)
    str.substr(start, length);  // Retorna trecho com comprimento específico

// Pesquisa
    str.indexOf('texto');       // Retorna o índice da primeira ocorrência
    str.lastIndexOf('texto');   // Retorna o índice da última ocorrência
    str.includes('texto');      // Retorna true/false se contém a string
    str.startsWith('texto');    // Verifica se começa com o texto
    str.endsWith('texto');      // Verifica se termina com o texto

// Modificação
    str.toUpperCase();            // Converte para MAIÚSCULAS
    str.toLowerCase();            // Converte para minúsculas
    str.trim();                   // Remove espaços em branco nas bordas
    str.replace('velho', 'novo'); // Substitui a primeira ocorrência
    str.replaceAll('a', 'b');     // Substitui todas as ocorrências (ES2021+)
    str.repeat(n);                // Repete a string n vezes

// Divisão e junção
str.split('');                  // Divide em array usando separador


*/

let nome = "        bruce wayne ";
console.log(nome.trim().toUpperCase()); // "BRUCE WAYNE"