var mostrar = document.getElementById("mostrar");
var esconder = document.getElementById("esconder");
var imagem = document.getElementById("foto");

esconder.addEventListener("click", function(){
    imagem.style.display = 'none';
});

mostrar.addEventListener("click",function(){
imagem.style.display = 'block';
});