// data/veiculos.js

let veiculos = {
    1: { veiculo: 'Maserati MC20', placa: 'QMW1I50', cor: 'Azul' },
    2: { veiculo: 'Ferrari 12Cilindri', placa: 'PQR9E87', cor: 'Preto' },
    3: { veiculo: 'Lamborghini Aventador', placa: 'XMT2A00', cor: 'Amarelo' },
    4: { veiculo: 'Porche 911', placa: 'FHU6J35', cor: 'Branco' },
};

// Função para listar todos os veículos
function listarVeiculos() {
    return Object.values(veiculos);
}

// Função para adicionar um novo veículo
function adicionarVeiculo(id, nome, placa, cor) {
    if (!veiculos[id]) {
        veiculos[id] = {
            veiculo: nome,
            placa: placa,
            cor: cor
        };
        return { mensagem: `Veículo ${nome} com ID ${id} cadastrado com sucesso!`, sucesso: true };
    } else {
        return { mensagem: `ID ${id} já existe. Escolha outro ID.`, sucesso: false };
    }
}

// Função para excluir um veículo
function excluirVeiculo(id) {
    if (veiculos[id]) {
        delete veiculos[id];
        return { mensagem: `Veículo com ID ${id} excluído com sucesso!`, sucesso: true };
    } else {
        return { mensagem: `Veículo com ID ${id} não encontrado.`, sucesso: false };
    }
}

module.exports = {
    listarVeiculos,
    adicionarVeiculo,
    excluirVeiculo
};
