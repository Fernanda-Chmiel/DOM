
var botao = document.getElementById("botao1");
botao.onclick =function(){
    var campo = document.getElementById("campotexto").value;
    if (campo.trim() !== "") {
        var lista = document.getElementById("lista");
        var item = document.createElement("li");
        item.textContent = campo;
        lista.appendChild(item);
        document.getElementById("campotexto").value = "";
}
}