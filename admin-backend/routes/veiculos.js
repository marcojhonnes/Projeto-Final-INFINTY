// route/veiculos.js

const express = require('express');
const router = express.Router();
const { listarVeiculos, adicionarVeiculo, excluirVeiculo } = require('../data/veiculos');

// Rota para listar todos os veículos
router.get('/', (req, res) => {
    const veiculos = listarVeiculos();
    res.json(veiculos);
});

// Rota para cadastrar um novo veículo
router.post('/cadastrar', (req, res) => {
    const { id, veiculo, placa, cor } = req.body;

    if (!id || !veiculo || !placa || !cor) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios!' });
    }

    const resultado = adicionarVeiculo(id, veiculo, placa, cor);
    if (resultado.sucesso) {
        res.status(201).json(resultado);
    } else {
        res.status(400).json(resultado);
    }
});

// Rota para excluir um veículo
router.delete('/excluir/:id', (req, res) => {
    const id = req.params.id;
    const resultado = excluirVeiculo(id);
    if (resultado.sucesso) {
        res.status(200).json(resultado);
    } else {
        res.status(404).json(resultado);
    }
});

module.exports = router;
