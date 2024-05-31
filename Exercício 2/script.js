var paragrafo = document.getElementById("campotexto");
var botao = document.getElementById("botao");

botao.addEventListener("click", function(){
    document.getElementById("mostrar").innerText = paragrafo.value;
});