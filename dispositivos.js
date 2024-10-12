function cadastrarDispositivo() {
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
    entrada2.setAttribute('placeholder', 'Digite o dispositivo de segurança')

    const entrada3 = document.createElement('input')
    entrada3.setAttribute('id', 'input3')
    entrada3.setAttribute('type', 'text')
    entrada3.setAttribute('placeholder', 'Digite a situação do dispositivo de segurança')

    const entrada4 = document.createElement('input')
    entrada4.setAttribute('id', 'input4')
    entrada4.setAttribute('type', 'text')
    entrada4.setAttribute('placeholder', 'Digite a disponibilidade do dispositivo')
    
    const botaoCadastrar = document.createElement('button')
    botaoCadastrar .textContent = 'Cadastrar'

    document.getElementById('adm').appendChild(entrada1)
    document.getElementById('adm').appendChild(entrada2)
    document.getElementById('adm').appendChild(entrada3)
    document.getElementById('adm').appendChild(entrada4)
    document.getElementById('adm').appendChild(botaoCadastrar)

    function adicionnarDispositivo() {
        const idDispositivo = document.getElementById('input1').value;
        const nomeDispositivo = document.getElementById('input2').value
        const situacaoDispositivo = document.getElementById('input3').value;
        const disponibilidadeDispositivo = document.getElementById('input4').value;

        saudacao.innerText = `Olá seja bem vindo`

        if (idDispositivo === '' || nomeDispositivo === '' || situacaoDispositivo === '' || disponibilidadeDispositivo === '') {
            mensagem.innerText = 'Preencha todos os campos';
            mensagem.style.color = 'red'
        } else {
            mensagem.innerText = `O Dispositivo: ${nomeDispositivo}, foi cadastrado com sucesso!`;
            mensagem.style.color = 'green'
                
            dispositivoSeguranca[idDispositivo] = {
                nomeDispositivo: nomeDispositivo,
                situacaoDispositivo: situacaoDispositivo,
                disponibilidadeDispositivo: disponibilidadeDispositivo
            };

            document.getElementById('input1').value = '';
            document.getElementById('input2').value = '';
            document.getElementById('input3').value = '';
            document.getElementById('input4').value = '';
           
        }
    }

    botaoCadastrar.addEventListener('click', adicionnarDispositivo);
} 

function retornarTodosEquipamentos() {
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerHTML = ''
    let equipamentosArray = Object.values(equipamentos);
    let listaFormatada = equipamentosArray.map(function(equipamento) {
        return `Arma: ${equipamento.arma}, Quantidade de Munição: ${equipamento.municao}`;
    }).join('<br>'); // Formata cada item e junta com quebras de linha
    document.getElementById('equipamentos-lista').innerHTML = listaFormatada;
}

function pesquisarDispositivo(){
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerHTML = ''
    const dispSeguranca = document.createElement('input')
    dispSeguranca.setAttribute('id', 'input1')
    dispSeguranca.setAttribute('type', 'number')
    dispSeguranca.setAttribute('placeholder', 'dispositivo de segurança')

    const botaoPesquisar = document.createElement('button')
    botaoPesquisar.textContent = 'Pesquisar'

    document.getElementById('adm').appendChild(dispSeguranca)
    document.getElementById('adm').appendChild(botaoPesquisar)
    function mudarSituacao() {
        const item = document.getElementById('input1').value 
    if(dispositivoSeguranca[item]) {
        const objeto = dispositivoSeguranca[item]
        const dadositem = `nome: ${objeto.nomeDispositivo}\n situacao: ${objeto.situacao}\ndisponibilidade: ${objeto.disponibilidade} `
        mensagem.innerText = dadositem
        mensagem.style.color = 'green'
        document.getElementById('input1').value = '';
    } else {
        mensagem.innerText = 'Item de segurança não encontrado'
        mensagem.style.color = 'red'
    }
}
    botaoPesquisar.addEventListener('click', mudarSituacao)
}

function excluirDispositivoSeguranca() {
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerHTML = ''
    const entrada1 = document.createElement('input')
    entrada1.setAttribute('id', 'input1')
    entrada1.setAttribute('type', 'number')
    entrada1.setAttribute('placeholder', 'Digite o ID do funcionário a ser excluído:')

    const botaoEcluir  = document.createElement('button')
    botaoEcluir.textContent = 'EXCLUIR'

    document.getElementById('adm').appendChild(entrada1)
    document.getElementById('adm').appendChild(botaoEcluir)
    function excluir(){
        const id = document.getElementById('input1').value
        if(dispositivoSeguranca[id]) {
            delete dispositivoSeguranca[id]
            mensagem.innerText = 'Dispositivo de Segurança excluído com sucesso!'
            mensagem.style.color = 'green'
            document.getElementById('input1').value = ''
        } else {
            mensagem.innerText = 'Dispositivo de Segurança não encontrado!'
            mensagem.style.color = 'red'
            document.getElementById('input1').value = ''
        }
    }
    botaoEcluir.addEventListener('click', excluir)
}