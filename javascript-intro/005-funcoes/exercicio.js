// Crie uma função para verificar se um valor é Truthy
function ehTruthy(valor){
  return !!valor;
}
// console.log(ehTruthy(true));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function retornaPerimetro(lado){
  return `O valor do perimetro é ${lado * 4}`;
}
// console.log(retornaPerimetro(2,2,2,2));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function retornaNomeCompleto(nome, sobrenome){
return `Seu nome completo é ${nome} ${sobrenome}`;
}

// Crie uma função que verifica se um número é par
function numeroPar(numero) {
  if(numero % 2 === 0){
    return true;
  } else { 
    return false;
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(variavel){
  return typeof variavel;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
  console.log('Vander Vieira');
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
