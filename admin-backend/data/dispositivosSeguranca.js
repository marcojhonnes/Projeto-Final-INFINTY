// /data/dispositivosSeguranca.js

let dispositivoSeguranca = {
    1: {nomeDispositivo: 'bat-cinto', situacao: 'liberado', disponibilidade: 'sim'},
    2: {nomeDispositivo: 'bat-armadura', situacao: 'liberado', disponibilidade: 'sim'},
    3: {nomeDispositivo: 'bat-movel', situacao: 'liberado', disponibilidade: 'sim'},
    4: {nomeDispositivo: 'bat-jato', situacao: 'liberado', disponibilidade: 'sim'},
};

// Função para adicionar novo dispositivo
function adicionarDispositivo(id, nome, situacao, disponibilidade) {
    if (dispositivoSeguranca[id]) {
        throw new Error('Dispositivo com este ID já existe!');
    }
    dispositivoSeguranca[id] = {nomeDispositivo: nome, situacao: situacao, disponibilidade: disponibilidade};
}

// Função para pesquisar dispositivo por ID
function pesquisarDispositivo(id) {
    return dispositivoSeguranca[id] || null;
}

// Função para excluir dispositivo por ID
function excluirDispositivo(id) {
    if (!dispositivoSeguranca[id]) {
        throw new Error('Dispositivo não encontrado!');
    }
    delete dispositivoSeguranca[id];
}

// Exportando as funções para que possam ser usadas em outros arquivos
module.exports = {
    dispositivoSeguranca,
    adicionarDispositivo,
    pesquisarDispositivo,
    excluirDispositivo,
};
