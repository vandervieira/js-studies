
//Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.

'use strict' // impede isso.
// function mostrarCarro() {
//   carro = 'Fusca';
//   console.log(carro);
// }

// mostrarCarro(); // Fusca
// console.log(carro); // Fusca

//Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.
//VAR VAZA O BLOCO
//Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.
if(true) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // Carro

//CONST E LET NO LUGAR DE VAR
//A partir de agora vamos utilizar apenas const e let para declarmos variáveis.