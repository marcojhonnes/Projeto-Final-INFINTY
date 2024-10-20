// routes/funcionarios.js

const express = require('express');
const router = express.Router();
const { getAllFuncionarios, getFuncionarioById } = require('../data/funcionarios');

// Rota para obter todos os funcionários
router.get('/funcionarios', (req, res) => {
    res.status(200).json(getAllFuncionarios());
});

// Rota para obter um funcionário por ID
router.get('/funcionarios/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const funcionario = getFuncionarioById(id);
    if (funcionario) {
        res.status(200).json(funcionario);
    } else {
        res.status(404).json({ message: 'Funcionário não encontrado' });
    }
});

module.exports = router;
