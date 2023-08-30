function verifica() {
   
    /* Pegando os valores do email e senha */
    let email = document.querySelector("#email").value;
    let senha = document.getElementById("password").value;

    if (email=="" || senha=="") {
        alert("Obrigatório o preenchimento do email")
        document.querySelector("#email").focus()
    } else {
        alert("Você preencheu!");
    };
    
};

function pesquisa(email, senha) {
    if (email == "guilhermearaujo@gmail.com" && senha == "12345") {

        window.open("../assets/formulario.html");
        window.close();
    } else{
        alert("Email ou senha inválido");
        document.querySelector("#email").focus()
    }
}


