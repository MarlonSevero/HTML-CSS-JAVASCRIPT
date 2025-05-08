/*
O Math é um objeto embutido no JavaScript que fornece funções e constantes matemáticas. 
Ele não é um construtor, ou seja, você não cria instâncias com new Math().
Você simplesmente usa suas propriedades e métodos diretamente.

Principais Metodos:

    Math.abs(x);        // Retorna o valor absoluto (ex: Math.abs(-7) → 7)
    Math.ceil(x);       // Arredonda para cima (ex: Math.ceil(4.2) → 5)
    Math.floor(x);      // Arredonda para baixo (ex: Math.floor(4.9) → 4)
    Math.round(x);      // Arredonda para o inteiro mais próximo (ex: Math.round(4.5) → 5)
    Math.trunc(x);      // Remove as casas decimais (ex: Math.trunc(4.7) → 4)

    Math.max(a, b, ...); // Retorna o maior valor (ex: Math.max(10, 20) → 20)
    Math.min(a, b, ...); // Retorna o menor valor (ex: Math.min(10, 20) → 10)

    Math.pow(x, y);     // Potência (x^y) (ex: Math.pow(2, 3) → 8)
    Math.sqrt(x);       // Raiz quadrada (ex: Math.sqrt(9) → 3)

    Math.random();      // Número aleatório entre 0 e 1 (ex: Math.random() → 0.53)

*/

const numero = 50.79;

//Math.ceil()
console.log(`Número retornado: ${Math.ceil(numero)}`);

//Math.floor()
console.log(`Número retornado: ${Math.floor(numero)}`);

//Math.round()
console.log(`Número retornado: ${Math.round(25.34)}`);
console.log(`Número retornado: ${Math.round(25.84)}`); 

//Math.max()
console.log(`Número retornado: ${Math.max('13,45,23,89,12,11,2')}`);

//Math.min()
console.log(`Número retornado:${Math.min('13,45,23,89,12,11,2')}`);

//Math.pow()
console.log(`Número retornado: ${Math.pow(2,10)}`);

//Math.random()
console.log(`Número retornado: ${Math.random()}`);

// Math.sqrt()
console.log(`Número retornado: ${Math.sqrt(81)}`);

//Math.cbrt()
console.log(`Número retornado: ${Math.cbrt(27)}`);