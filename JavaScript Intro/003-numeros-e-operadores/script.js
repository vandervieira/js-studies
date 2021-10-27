var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)
 
// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35

// Crie duas expressões que retornem NaN
var naN1 = 2 / 0;
var naN2 = 'Teste' - 2;

// Somar a string '200' com o número 50 e retornar 250
var string200errado = '200' + 50;
var string200certo = +'200' + 50;
// Incremente o número 5 e retorne o seu valor incrementado
var cincoIncrementado = 5;
console.log(++cincoIncrementado); //Ou antes do console.log rodar somente cincoIncrementado++; e depois chamar console.log

// Como dividir o peso por 2?
var numero = '80'; //Colocar aqui o + na frente do 80 e dividir por dois
//numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)