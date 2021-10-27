function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7

//Sempre que tiver duvida sobre uma função, botar ela no console.log que retorna a implementaçãoo da função
//console.log(pi);  //Sem o parenteses

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}
imc(80, 1.80) // 80 e 1.80 são os argumentos
console.log(imc(95, 1.86));

//ARGUMENTOS PODEM SER FUNÇÕES
//Chamadas de Callback, geralmente são funções que ocorrem após algum evento.
addEventListener('click', function() {
  console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima
//Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}

//Hoisting
//Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória
imc2(80, 1.80); // imc aparece no console

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}
