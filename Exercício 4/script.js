var imagem = document.getElementById("picture");
var botaomenos = document.getElementById("menos");
var botaomais = document.getElementById("mais");

botaomais.addEventListener("click", function(){
     var aumentar = imagem.clientWidth;
     imagem.style.width = (aumentar + 10) + 'px';
});

botaomenos.addEventListener("click", function(){
    var diminuir = imagem.clientWidth;
    imagem.style.width = (diminuir - 10) + 'px';
});