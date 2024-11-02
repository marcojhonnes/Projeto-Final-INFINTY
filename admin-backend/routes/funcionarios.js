// routes/funcionarios.js

const express = require('express');
const router = express.Router();
const { getAllFuncionarios, getFuncionarioById, getFuncionarioByNome, excluirFuncionarioPorId } = require('../data/funcionarios');

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

// Rota para obter um funcionário por nome
router.get('/funcionarios/nome/:nome', (req, res) => {
    const nome = req.params.nome.toLowerCase();
    const funcionario = getFuncionarioByNome(nome); 
    if (funcionario) {
        res.status(200).json(funcionario);
    } else {
        res.status(404).json({ message: 'Funcionário não encontrado' });
    }
});

router.post('/funcionarios', (req, res) => {
    const { id, nome, nivel, senha, dataAdmissao } = req.body;

    // Verifica se todos os campos estão presentes
    if (!id || !nome || !nivel || !senha || !dataAdmissao) {
        return res.status(400).json({ message: 'Por favor, preencha todos os campos' });
    }

    // Verifica se o funcionário já existe
    const funcionarioExistente = funcionarios.find(func => func.id === id);
    if (funcionarioExistente) {
        return res.status(409).json({ message: 'Funcionário já cadastrado com este ID' });
    }

    // Adiciona o novo funcionário
    const novoFuncionario = {
        id,
        nome,
        nivel,
        senha,
        dataAdmissao
    };

    funcionarios.push(novoFuncionario);

    // Rota para excluir um funcionário - Administrador pode excluir qualquer funcionário, Gerente não pode excluir Administradores
router.delete('/funcionarios/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);  // ID do funcionário a ser excluído
    const { nivelUsuario } = req.body; // Nível do usuário que está tentando excluir

    try {
        // Exclui o funcionário com base no ID e no nível do usuário
        const mensagem = excluirFuncionarioPorId(id, nivelUsuario);
        res.status(200).json({ message: mensagem });
    } catch (error) {
        res.status(403).json({ message: error.message });
    }
});


    res.status(201).json({ message: 'Funcionário cadastrado com sucesso', funcionario: novoFuncionario });
});


module.exports = router;
