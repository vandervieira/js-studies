// nomeie 3 propriedades ou métodos de strings
var nome = "Vander";
nome.toLowerCase(); // 'vander'
nome.slice(2,4); // 'nd'
nome.concat(" Vieira"); // 'Vander Vieira'
// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
btn.innerText.bold();
btn.hidden = false;
btn.getAttributeNames(); //href, class
btn.addEventListener("click", function(){
  navigator.clipboard.writeText(btn.innerHTML);btn.innerHTML;
});
//btn.innerHTML = "Trocado"; // Substitui a palavra Clique por Trocado do html
//btn.outerHTML = "<h1>Teste</h1>"; //Troca a tag de <a> para <h1>

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
function copyToClipboard() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

