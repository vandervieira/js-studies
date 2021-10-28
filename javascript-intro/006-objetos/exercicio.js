// Crie um objeto com os seus dados pessoais
var dadosPessoais = {
  nome: "Vander",
  sobrenome: "Vieira",
  idade: 24,
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
  },
}
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "Labrador",
  cor: "preto",
  idade: 10,
  verHomem() {
    console.log(`${this.raca} latindo AU AU AU`);
  }
}
