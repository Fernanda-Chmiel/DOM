document.addEventListener("DOMContentLoaded", function(){
    var botao = document.getElementById("botao1");
    var lista = document.getElementById("list");

botao.addEventListener("click", function(){
    var item = document.createElement("li");
    item.textContent = "item novo";
    lista.appendChild(item);
});
 });