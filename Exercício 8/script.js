var checkbox = document.getElementById('caixa');
var paragrafo = document.getElementById('paragrafo');

checkbox.addEventListener('change',function(){
if(this.checked){
    paragrafo.textContent = "Caixa Marcada!";
}else {
    paragrafo.textContent = "Caixa Desmarcada!";
}

})