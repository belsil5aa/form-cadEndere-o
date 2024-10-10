'use strict';// ativa o modo restrito
// Este modo faz com que o JavaScript opere de
//forma mais segura e rigorosa, ajudando a evitar
//erros comuns de programação
/* Consumo de API - https://viacep.com.br/ */

// Função para limpar campos preenchidos 
const limparFormulario = () => {
    document.getElementById('Logradouro').value = '';
    document.getElementById('Bairro').value = '';
    document.getElementById('Localidade').value = '';
    document.getElementById('UF').value = '';
    document.getElementById('Numero').value = '';
    document.getElementById('Complemento').value = '';
}

// Verifica se o CEP é valido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);


const preencherFormulario = (endereco) => {
    document.getElementById('Logradouro').value = endereco.logradouro;
    document.getElementById('Bairro').value = endereco.bairro;
    document.getElementById('UF').value = endereco.uf;
    document.getElementById('Localidade').value = endereco.localidade;

}

// Função para o consumo de API ViaCEP
const pesquisarCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${CEP.value}/json/`;
    
    if(cepValido(CEP.value)){
       const dados = await fetch(url);
       const addres = await dados.json(); // garante ter o formato seja json
       
       if(addres.hasOwnProperty('erro')){ // verifica se tem erro no CEP
         alert('CEP não encontrado');
       }else{
          preencherFormulario(addres);
       }

    }else{
        alert('CEP Incorreto');
    }
}

// chama escutado para disparar ação de preenchimento
document.getElementById('CEP').addEventListener('focusout', pesquisarCep); // adicionando um escutador de eventos

