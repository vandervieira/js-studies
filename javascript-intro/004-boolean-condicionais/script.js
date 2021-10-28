// Verifique se a sua idade é maior do que a de algum parente
var minhaIdade = 24;
var idadeMeuParente = 32;
if(minhaIdade > idadeMeuParente){
  console.log("Idade menor");
} else if(minhaIdade === idadeMeuParente){
  console.log("Idade igual");
} else {
  console.log("Idade menor");
}
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
//3
console.log(expressao);
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //True
var idade = 28; //True
var possuiDoutorado = false; //False
var empregoFuturo; //False
var dinheiroNaConta = 0; //False
if(possuiDoutorado){
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}