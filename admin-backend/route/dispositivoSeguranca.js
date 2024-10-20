// /routes/dispositivosRoutes.js
const express = require('express');
const router = express.Router();
const { adicionarDispositivo, pesquisarDispositivo, excluirDispositivo } = require('../data/dispositivosSeguranca');

// Rota para adicionar um novo dispositivo
router.post('/dispositivos', (req, res) => {
    const { id, nome, situacao, disponibilidade } = req.body;
    
    try {
        adicionarDispositivo(id, nome, situacao, disponibilidade);
        res.status(201).json({ message: 'Dispositivo cadastrado com sucesso!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Rota para pesquisar um dispositivo por ID
router.get('/dispositivos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const dispositivo = pesquisarDispositivo(id);
    
    if (dispositivo) {
        res.status(200).json(dispositivo);
    } else {
        res.status(404).json({ message: 'Dispositivo não encontrado' });
    }
});

// Rota para excluir um dispositivo por ID
router.delete('/dispositivos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    
    try {
        excluirDispositivo(id);
        res.status(200).json({ message: 'Dispositivo excluído com sucesso!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
