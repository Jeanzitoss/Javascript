// const operacoes = require('./operacoes');
// const calculadora_idade = require('./calculadora_idade');
import {somar, subtrair, multiplicar, dividir} from './operacoes.js';
import * as calculadora_idade from './calculadora_idade.js';

console.log("Somar: " + somar(10, 5)); // 15
console.log("Subtração: " + subtrair(10, 5)); // 5
console.log("Multiplicação: " + multiplicar(10, 5)); // 50
console.log("Divisão: " + dividir(10, 5)); // 2

console.log(calculadora_idade.idade('Ana', 1990));