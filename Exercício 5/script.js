var lista = document.getElementById("list");
var botao = document.getElementById("botao");

botao.addEventListener("click", function(){
    while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
    }
    
});