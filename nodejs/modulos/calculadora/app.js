const modulo = require('./meuModulo'); // Importando o módulo
const calc = require('./calculadora_idade'); // Importando o módulo

const mensagem = modulo.saudacao('Jean'); // Executando a função
const mensagemIdade = calc.idade('Jean', 2009); // Executando a função
console.log(mensagem);
console.log(mensagemIdade);