var b = document.getElementById('botao');
b.addEventListener("click", function(){
var l = document.getElementById('lista');
var itens = l.getElementsByTagName('li');
var itensArray = Array.prototype.slice.call(itens);
l.innerHTML = '';

for (var i = itensArray.length - 1; i >= 0; i--) {
    l.appendChild(itensArray[i]);
}
})