function verificar(){
    let nome = document.getElementById('nome').value;
    if (nome == ""){
        alert("Obrigatório o preenchimento do nome")
        document.getElementById('nome').focus;
    }
}

function verificar(){
    let nome = document.getElementById('cep').value;
    if (nome == ""){
        alert("Obrigatório o preenchimento do nome")
        return
    }
}