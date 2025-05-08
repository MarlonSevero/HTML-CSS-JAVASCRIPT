/*
INTRO 

NAVEGADOR QUE REALIZA A INTERPRETACAO. 

- Case sensitive
- ';' final da linha náo é obrigatorio.
- Podemos usar aspas simples e duplas.
- 

//conseguimos usar o console para tratamento de erros.
console.log("hello World Javascript"); 


VARIAVEIS E CONSTANTES

//declarando as variaveis
    let userId = 4567;
    let userName = 'usuarioJavascript';
    let userLogged = true;
    let userEmail;

//exibindo no console
    console.log(userId);
    console.log(userName);
    console.log(userLogged);
    console.log(userEmail);

    //declarando as constantes
    const DATA_NASCIMENTO = '01/01/1995';
    const CPF = '252.433.368-04';
    const RG_SP = '29.365.924-6';

    //exibindo no console
    console.log(DATA_NASCIMENTO);
    console.log(CPF);
    console.log(RG_SP);
    
// COERÇÃO IMPLÍCITA
    let x = '10' + 2;          // "102" -> o número 2 vira string automaticamente
    console.log(x, typeof x); // "102", string

    let y = '10' * 2;          // 20 -> a string '10' vira número automaticamente
    console.log(y, typeof y); // 20, number

// COERÇÃO EXPLÍCITA
    let a = '123';
    let b = Number(a);        // força a conversão para número
    console.log(b, typeof b); // 123, number


//VAR, LET E CONST

	•	var: evite usar, é legado e propenso a bugs por causa do hoisting e escopo de função.
	•	let: use quando o valor vai mudar.
	•	const: use como padrão. Só use let quando realmente precisar reatribuir.

    | Característica               | VAR                               | LET                         | CONST                       |
    |------------------------------|-----------------------------------|-----------------------------|-----------------------------|
    |*Escopo                       | Função                            | Bloco ({})                  | Bloco ({})                  |
    |*Hoisting                     | Sim (inicializado como undefined) | Sim (não inicializada)      | Sim (não inicializada)      |
    |*Reatribuição                 | Sim                               | Sim                         | Não                         |
    |*Redeclaração no mesmo escopo | Sim                               | Não (gera erro)             | Não (gera erro)             |
    |*Mutação (em objetos/arrays)  | Sim                               | Sim                         | Sim                         |

    PS: Hoisting (içamento) é um comportamento do JavaScript onde declarações de variáveis e funções são “movidas” para o topo do seu escopo antes da execução do código.
    Mas só a declaração é içada — não a atribuição de valor.

TEMPLATE STRING:
    const nome = "Marlon";
    const idade = 25;

    const mensagem = `Meu nome é ${nome} e tenho ${idade} anos.`;

    console.log(mensagem);
    // Saída: Meu nome é Marlon e tenho 25 anos.

    📌 Vantagens das template strings
        1.	Interpolação fácil com ${...}
        2.	Multilinhas sem precisar de \n
        3.	Pode usar expressões JavaScript dentro do ${...}

    Exemplo Expressao:
    const a = 10;
    const b = 5;

    console.log(`A soma de ${a} + ${b} é ${a + b}`);
    // Saída: A soma de 10 + 5 é 15


*/

