//instanciando o objeto Date 
const data = new Date();

//pegando o mês contido no objeto
const mes = data.getMonth() + 1;

//criando o if ternário
const semestre = (mes <= 6 ? 'primeiro semestre' : 'segundo semestre');

//exibindo no console
console.log(`Estamos no mês ${mes}`);
console.log(`Estamos no ${semestre} do ano de
${data.getFullYear()}`);