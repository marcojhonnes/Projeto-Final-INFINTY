let tarefas = {
    1: { tarefa: 'estudar', prioridade: '1', funcionario: 'not', situacao: 'em execução' },
    2: { tarefa: 'almoçar', prioridade: '1', funcionario: 'not', situacao: 'aguardando execução' },
    3: { tarefa: 'brincar', prioridade: '1', funcionario: 'not', situacao: 'concluída' },
    4: { tarefa: 'trabalhar', prioridade: '1', funcionario: 'not', situacao: 'aguardando execução' }
};

// Listar todas as tarefas
function listarTarefas() {
    return tarefas;
}

// Adicionar nova tarefa
function adicionarTarefa(id, tarefa, prioridade) {
    if (!id || !tarefa || !prioridade) {
        throw new Error('Preencha todos os campos.');
    }
    if (tarefas[id]) {
        throw new Error('ID já existente.');
    }

    tarefas[id] = { tarefa, prioridade, funcionario: 'not', situacao: 'aguardando execução' };
    return tarefas[id];
}

// Excluir tarefa por ID
function excluirTarefa(id) {
    if (!tarefas[id]) {
        throw new Error('Tarefa não encontrada.');
    }
    delete tarefas[id];
}

// Executar tarefa
function executarTarefa(id, funcionario = 'Desconhecido') {
    if (!tarefas[id]) {
        throw new Error('Tarefa não encontrada.');
    }
    if (tarefas[id].situacao === 'aguardando execução') {
        tarefas[id].situacao = 'em execução';
        tarefas[id].funcionario = funcionario;
        return tarefas[id];
    } else {
        throw new Error(`A tarefa ${id} não está em estado de execução.`);
    }
}

// Concluir tarefa
function concluirTarefa(id) {
    if (!tarefas[id]) {
        throw new Error('Tarefa não encontrada.');
    }
    tarefas[id].situacao = 'concluída';
    return tarefas[id];
}

module.exports = {
    listarTarefas,
    adicionarTarefa,
    excluirTarefa,
    executarTarefa,
    concluirTarefa
};
