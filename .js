'use strict';// ativa o modo restrito
// Este modo faz com que o JavaScript opere de
//forma mais segura e rigorosa, ajudando a evitar
//erros comuns de programação
/* Consumo de API - https://viacep.com.br/ */

// Função para limpar campos preenchidos 
const limparFormulario = () => {
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('UF').value = '';
    document.getElementById('Numero').value = '';
    document.getElementById('Complemento').value = '';
}

// Verifica se o CEP é valido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8