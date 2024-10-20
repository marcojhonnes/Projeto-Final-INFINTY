const express = require('express');
const router = express.Router();
let tarefas = require('../data/tarefas');

// Listar todas as tarefas
router.get('/listar', (req, res) => {
    res.json(tarefas);
});

// Cadastrar nova tarefa
router.post('/cadastrar', (req, res) => {
    const { id, tarefa, prioridade } = req.body;
    if (!id || !tarefa || !prioridade) {
        return res.status(400).json({ error: 'Preencha todos os campos.' });
    }
    if (tarefas[id]) {
        return res.status(400).json({ error: 'ID já existente.' });
    }

    tarefas[id] = { tarefa, prioridade, funcionario: 'not', situacao: 'aguardando execução' };
    res.status(201).json({ message: 'Tarefa cadastrada com sucesso!', tarefa: tarefas[id] });
});

// Excluir tarefa por ID
router.delete('/excluir/:id', (req, res) => {
    const id = req.params.id; // O ID vem como string
    if (!tarefas[id]) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }
    delete tarefas[id];
    res.json({ message: 'Tarefa excluída com sucesso!' });
});

// Executar tarefa
router.put('/executar/:id', (req, res) => {
    const id = req.params.id; // O ID vem como string
    if (!tarefas[id]) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }
    if (tarefas[id].situacao === 'aguardando execução') {
        tarefas[id].situacao = 'em execução';
        tarefas[id].funcionario = req.body.funcionario || 'Desconhecido';
        return res.json({ message: `A tarefa ${id} está em execução.`, tarefa: tarefas[id] });
    } else {
        return res.status(400).json({ error: `A tarefa ${id} não está em estado de execução.` });
    }
});

// Concluir tarefa
router.put('/concluir/:id', (req, res) => {
    const id = req.params.id; // O ID vem como string
    if (!tarefas[id]) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }
    tarefas[id].situacao = 'concluída';
    res.json({ message: `Tarefa ${id} concluída com sucesso!`, tarefa: tarefas[id] });
});

module.exports = router;
