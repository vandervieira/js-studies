// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImage = document.querySelector('img');
console.log(firstImage.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() { //criada funcao para poder usar dentro de onload
  const imagens = document.querySelectorAll('img');
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}
//Como js carrega antes das imagens, ele só saberá o width depois que carregarem
window.onload = function() { //Essa funcao só é ativa quando o onload ocorre
  somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const linksPagina = document.querySelectorAll('a');
linksPagina.forEach(item => {
  if(item.offsetWidth < 48 || item.offsetHeight < 48){
    console.log(item, "Nao possui o minimo recomendado")
  } else {
    console.log(item, "Possui o minimo recomendado")
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

if(window.innerWidth < 720){
  document.querySelector('.menu').classList.add('menu-mobile');
}