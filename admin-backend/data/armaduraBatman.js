// data/armaduraBatman.js

let armaduraBatman = {
    1: { armaduraNome: 'Batman Begins', situacao: 'indisponivel', anoFabricacao: '2005' }, 
    2: { armaduraNome: 'Batman Dark Knight', situacao: 'disponivel', anoFabricacao: '2008' },
    3: { armaduraNome: 'Batman Returns', situacao: 'disponivel', anoFabricacao: '2012' }, 
    4: { armaduraNome: 'Batman Vs. Superman', situacao: 'indisponivel', anoFabricacao: '2016' },
    5: { armaduraNome: 'Batman', situacao: 'indisponivel', anoFabricacao: '2022' }
};

// Função para listar todas as armaduras
function listarArmaduras() {
    return Object.values(armaduraBatman);
}

// Função para cadastrar uma nova armadura
function cadastrarArmadura(id, nome, situacao, anoFabricacao) {
    if (!armaduraBatman[id]) {
        armaduraBatman[id] = { armaduraNome: nome, situacao: situacao, anoFabricacao: anoFabricacao };
        return { message: `A armadura ${nome} foi cadastrada com sucesso!` };
    } else {
        return { error: `Armadura com ID ${id} já existe!` };
    }
}

// Função para alterar a situação de uma armadura
function mudarSituacao(id, novaSituacao) {
    if (armaduraBatman[id]) {
        armaduraBatman[id].situacao = novaSituacao;
        return { message: `Situação da armadura ${id} alterada para ${novaSituacao}` };
    } else {
        return { error: `Armadura com ID ${id} não encontrada!` };
    }
}

// Função para excluir uma armadura
function excluirArmadura(id) {
    if (armaduraBatman[id]) {
        delete armaduraBatman[id];
        return { message: `Armadura ${id} excluída com sucesso!` };
    } else {
        return { error: `Armadura com ID ${id} não encontrada!` };
    }
}

module.exports = {
    listarArmaduras,
    cadastrarArmadura,
    mudarSituacao,
    excluirArmadura
};
