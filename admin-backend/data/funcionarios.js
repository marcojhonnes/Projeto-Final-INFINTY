const funcionarios = {
    1: {id: 1, nome: 'João', nivel: 'Gerente', senha: '123', dataAdmissao: '15/05/2023'},
    2: {id: 2, nome: 'Maria', nivel: 'Administrador', senha: '123', dataAdmissao: '15/05/2023'},
    3: {id: 3, nome: 'Marco', nivel: 'Administrador', senha: '123', dataAdmissao: '15/05/2023'},
    4: {id: 4, nome: 'Aurelio', nivel: 'Funcionario', senha: '123', dataAdmissao: '15/05/2023'},
    5: {id: 5, nome: 'Junior', nivel: 'Gerente', senha: '123', dataAdmissao: '15/05/2023'},
    6: {id: 6, nome: 'Christopher', nivel: 'Gerente', senha: '123', dataAdmissao: '15/05/2023'},
    7: {id: 7, nome: 'Alice', nivel: 'Funcionario', senha: '123', dataAdmissao: '15/05/2023'},
    8: {id: 8, nome: 'Arthur', nivel: 'Funcionario', senha: '123', dataAdmissao: '15/05/2023'}
};

// Função para obter todos os funcionários
const getAllFuncionarios = () => {
    return Object.values(funcionarios);
};

// Função para buscar funcionário por ID
const getFuncionarioById = (id) => {
    return funcionarios[id] || null;
};

// Função para buscar funcionário por nome
function getFuncionarioByNome(nome) {
    // Transforma o objeto funcionarios em um array e usa o método find
    return Object.values(funcionarios).find(funcionario => funcionario.nome.toLowerCase() === nome.toLowerCase());
}

// Função para adicionar novo funcionário
function adicionarFuncionario(novoFuncionario) {
    // Verifica se o ID já existe no sistema
    const funcionarioExistente = getFuncionarioById(novoFuncionario.id);

    if (funcionarioExistente) {
        throw new Error('Funcionário já cadastrado com este ID');
    }

    // Adiciona o novo funcionário à lista de funcionários
    funcionarios[novoFuncionario.id] = novoFuncionario;
}

// Função para excluir um funcionário - Administrador pode excluir qualquer um, Gerente não pode excluir Administradores
function excluirFuncionarioPorId(id, nivelUsuario) {
    const funcionario = getFuncionarioById(id);

    if (!funcionario) {
        throw new Error('Funcionário não encontrado');
    }

    // Se o usuário for um gerente, ele não pode excluir administradores
    if (nivelUsuario === 'Gerente' && funcionario.nivel === 'Administrador') {
        throw new Error('Gerentes não podem excluir administradores');
    }

    // Remove o funcionário da lista
    delete funcionarios[id];
    return `Funcionário ${funcionario.nome} excluído com sucesso!`;
}

// Exportando as funções e o objeto
module.exports = {
    getAllFuncionarios,
    getFuncionarioById,
    getFuncionarioByNome,
    adicionarFuncionario,
    excluirFuncionarioPorId,
    funcionarios
};
