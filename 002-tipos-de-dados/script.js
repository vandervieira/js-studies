var time = null;
console.log(typeof time); //Retorna objetct pois é algo novo do js

//Somar String é concatenar ela
var nome = 'Vander';
var sobrenome = 'Vieira';
var nomeCompleto = nome + ' ' + sobrenome;


//Template string
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
console.log(frase2);

// Declare uma variável contendo uma string
var fraseEx = "Testando";
// Declare uma variável contendo um número dentro de uma string
var numeroStr = "32";

// Declare uma variável com a sua idade
var minhaIdade = 24;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nomeAluno= 'Vander', 
    sobrenomeAluno = 'Vieira';
var nomeSobrenome = `${nomeAluno} ${sobrenomeAluno}`;
console.log(nomeSobrenome);
// Coloque a seguinte frase em uma variável: It's time
var fraseNaVariavel = "It's time";
// Verifique o tipo da variável que contém o seu nome
console.log(typeof nomeAluno);