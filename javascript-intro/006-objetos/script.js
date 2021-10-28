var pessoa = {
  nome: 'Vander',
  idade: 24,
}

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro(lado) { //Atualização ES6
    return this.lados * lado;
  },
}

quadrado.lados; // 4
quadrado.area(5); // 25
console.log(quadrado.perimetro(5)); // 20


var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return this.height / 2;
  }
}

menu.backgroundColor = '#000';
menu.color = 'blue';
menu.esconder = function() {

}
var bg = menu.backgroundColor;