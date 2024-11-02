import {equipamentos, administrador, mensagem, paragrafo,} from "./script.js";
export function cadastrarEquipamento() {
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerHTML = ''
    const entrada1 = document.createElement('input')
    entrada1.setAttribute('id', 'input1')
    entrada1.setAttribute('type', 'number')
    entrada1.setAttribute('placeholder', 'Digite o ID')

    const entrada2 = document.createElement('input')
    entrada2.setAttribute('id', 'input2')
    entrada2.setAttribute('type', 'text')
    entrada2.setAttribute('placeholder', 'Digite o do equipmento')

    const entrada3 = document.createElement('input')
    entrada3.setAttribute('id', 'input3')
    entrada3.setAttribute('type', 'text')
    entrada3.setAttribute('placeholder', 'Digite a quantidade de munição')
    
    const botaoCadastrar = document.createElement('button')
    botaoCadastrar .textContent = 'Cadastrar'

    document.getElementById('adm').appendChild(entrada1)
    document.getElementById('adm').appendChild(entrada2)
    document.getElementById('adm').appendChild(entrada3)
    document.getElementById('adm').appendChild(botaoCadastrar)

    function adicionnarEquipamento() {
        const idEquipamento = document.getElementById('input1').value;
        const nomeEquipamento = document.getElementById('input2').value
        const quantidadeEquipamento = document.getElementById('input3').value;

        if (idEquipamento === '' || nomeEquipamento === '' || quantidadeEquipamento === '') {
            mensagem.innerText = 'Preencha todos os campos';
            mensagem.style.color = 'red'
        } else {
            mensagem.innerText = `O Equipamento: ${nomeEquipamento}, foi cadastrado com sucesso!`;
            mensagem.style.color = 'green'
                
            equipamentos[idEquipamento] = {
                arma: nomeEquipamento,
                municao: quantidadeEquipamento,
            };

            document.getElementById('input1').value = '';
            document.getElementById('input2').value = '';
            document.getElementById('input3').value = '';
            document.getElementById('input4').value = '';
           
        }
    }

    botaoCadastrar.addEventListener('click', adicionnarEquipamento);
} 

export function retornarTodosEquipamentos() {
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerHTML = ''
    let equipamentosArray = Object.values(equipamentos);
    let listaFormatada = equipamentosArray.map(function(equipamento) {
        return `Arma: ${equipamento.arma}, Quantidade de Munição: ${equipamento.municao}`;
    }).join('<br>');
    document.getElementById('equipamentos-lista').innerHTML = listaFormatada;
}

export function pesquisarEquipamento(){
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerHTML = ''
    const dispSeguranca = document.createElement('input')
    dispSeguranca.setAttribute('id', 'input1')
    dispSeguranca.setAttribute('type', 'number')
    dispSeguranca.setAttribute('placeholder', 'ID do equipamento')

    const botaoPesquisar = document.createElement('button')
    botaoPesquisar.textContent = 'Pesquisar'

    document.getElementById('adm').appendChild(dispSeguranca)
    document.getElementById('adm').appendChild(botaoPesquisar)
    function armamento() {
        const item = document.getElementById('input1').value 
    if(equipamentos[item]) {
        const objeto = equipamentos[item]
        const dadositem = `nome: ${objeto.arma}\n Quantidade de munição: ${objeto.municao}`
        mensagem.innerText = dadositem
        mensagem.style.color = 'green'
        document.getElementById('input1').value = '';
    } else {
        mensagem.innerText = 'Equipamento não encontrado'
        mensagem.style.color = 'red'
    }
}
    botaoPesquisar.addEventListener('click', armamento)
}

export function excluirEquipamento() {
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerHTML = ''
    const entrada1 = document.createElement('input')
    entrada1.setAttribute('id', 'input1')
    entrada1.setAttribute('type', 'number')
    entrada1.setAttribute('placeholder', 'Digite o ID do equipamento a ser excluído:')

    const botaoEcluir  = document.createElement('button')
    botaoEcluir.textContent = 'EXCLUIR'

    document.getElementById('adm').appendChild(entrada1)
    document.getElementById('adm').appendChild(botaoEcluir)
    function excluir(){
        const id = document.getElementById('input1').value
        if(equipamentos[id]) {
            delete equipamentos[id]
            mensagem.innerText = 'Equipamento excluído com sucesso!'
            mensagem.style.color = 'green'
            document.getElementById('input1').value = ''
        } else {
            mensagem.innerText = 'Equipamento não encontrado!'
            mensagem.style.color = 'red'
            document.getElementById('input1').value = ''
        }
    }
    botaoEcluir.addEventListener('click', excluir)
}
