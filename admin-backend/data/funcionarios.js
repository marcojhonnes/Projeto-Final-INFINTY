// data/funcionarios.js

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

// Função para buscar funcionarios por  nome
const getFuncionarioBynome = (nome) => {
    return funcionarios[nome] || null
}
// Exportando as funções e o objeto
module.exports = {
    getAllFuncionarios,
    getFuncionarioById,
    getFuncionarioBynome,
};
