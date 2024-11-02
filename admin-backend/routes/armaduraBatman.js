// route/armaduraBatman.js

const express = require('express');
const router = express.Router();
const {
    listarArmaduras,
    cadastrarArmadura,
    mudarSituacao,
    excluirArmadura
} = require('../data/armaduraBatman');

// Rota para listar todas as armaduras
router.get('/armaduras', (req, res) => {
    const armaduras = listarArmaduras();
    res.json(armaduras);
});

// Rota para cadastrar uma nova armadura
router.post('/armaduras', (req, res) => {
    const { id, nome, situacao, anoFabricacao } = req.body;
    const result = cadastrarArmadura(id, nome, situacao, anoFabricacao);
    if (result.error) {
        res.status(400).json({ error: result.error });
    } else {
        res.status(201).json({ message: result.message });
    }
});

// Rota para mudar a situação de uma armadura
router.put('/armaduras/:id/situacao', (req, res) => {
    const id = req.params.id;
    const { situacao } = req.body;
    const result = mudarSituacao(id, situacao);
    if (result.error) {
        res.status(404).json({ error: result.error });
    } else {
        res.status(200).json({ message: result.message });
    }
});

// Rota para excluir uma armadura
router.delete('/armaduras/:id', (req, res) => {
    const id = req.params.id;
    const result = excluirArmadura(id);
    if (result.error) {
        res.status(404).json({ error: result.error });
    } else {
        res.status(200).json({ message: result.message });
    }
});

module.exports = router;
