var botao = document.getElementById("botao");


botao.addEventListener("click", function(){
    var paragrafo = document.getElementById("conta");
    var pegar = parseInt(paragrafo.textContent);
    pegar++;
    paragrafo.textContent = pegar;
})