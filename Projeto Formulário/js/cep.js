//Arrow function
const pesquisaCEP = async() => {
    const cep = document.getElementById('cep').value;

    /* Passsando o CEP para API viacep*/
    /* Usando template script ``*/
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    
    const dados = await fetch(url);
    const endereco = await dados.json();

    preencherFormulario(endereco);
};

//Função para preencher o Formulário

const preencherFormulario = (endereco) => {
    document.getElementById('cep').value = endereco.cep;
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('uf').value = endereco.uf;
    document.getElementById('email');
};

/* Criando um evento do input CEP */
document.getElementById('cep')
    .addEventListener('focusout',pesquisaCEP);

 
