function listarVeiculos() {
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerHTML = ''
    let conjuntoVeiculos = Object.values(veiculos);
    let todosveiculos = conjuntoVeiculos.map(function(veiculo) {
        return `Veiculo: ${veiculo.veiculo}, Placa do Veiculo: ${veiculo.placa}, Cor do Veiculo: ${veiculo.cor}`;
    }).join('<br>'); 
    document.getElementById('equipamentos-lista').innerHTML = todosveiculos;
}

function cadastrarVeiculos() {
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    
    const entrada1 = document.createElement('input')
    entrada1.setAttribute('id', 'input1')
    entrada1.setAttribute('type', 'number')
    entrada1.setAttribute('placeholder', 'Digite o ID do Veiculo ')

    const entrada2 = document.createElement('input')
    entrada2.setAttribute('id', 'input2')
    entrada2.setAttribute('type', 'text')
    entrada2.setAttribute('placeholder', 'Digite o nome do Veiculo ')

   const entrada3 = document.createElement('input')
   entrada3.setAttribute('id', 'input3')
   entrada3.setAttribute('type', 'text')
   entrada3.setAttribute('placeholder', 'Digite a Placa do Veiculo')

   const entrada4 = document.createElement('input')
   entrada4.setAttribute('id', 'input4')
   entrada4.setAttribute('type', 'text')
   entrada4.setAttribute('placeholder', 'Digite a Cor do Veiculo')

    const botaoCadastrar = document.createElement('button')
    botaoCadastrar .textContent = 'Cadastrar'

    document.getElementById('adm').appendChild(entrada1)
    document.getElementById('adm').appendChild(entrada2)
    document.getElementById('adm').appendChild(entrada3)
    document.getElementById('adm').appendChild(entrada4)
    document.getElementById('adm').appendChild(botaoCadastrar)
    function adicionarVeiculo() {
        const idVeiculo = document.getElementById('input1').value
        const nomeVeiculo = document.getElementById('input2').value
        const placaoVeiculo = document.getElementById('input3').value
        const corVeiculo = document.getElementById('input4').value
        if(idVeiculo === '' || nomeVeiculo === '' || placaoVeiculo === '' || corVeiculo === '') {
            mensagem.innerText = 'preencha todos os campos'
            mensagem.style.color = 'red'
        } else {
            veiculos[idVeiculo] = {
                nome: nomeVeiculo,
                placa: placaoVeiculo,
                cor: corVeiculo
             }
             mensagem.innerText = `O veiculo: ${nomeVeiculo} com ID: ${idVeiculo} foi cadastrada com sucesso`
             mensagem.style.color = 'green'
             console.log(tarefas)
             document.getElementById('input1').value = '';
             document.getElementById('input2').value = '';
             document.getElementById('input3').value = '';
         }
         
         }
         botaoCadastrar.addEventListener('click', adicionarVeiculo)
        }

function excluirVeiculo() {
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerHTML = ''
    const entrada1 = document.createElement('input')
    entrada1.setAttribute('id', 'input1')
    entrada1.setAttribute('type', 'number')
    entrada1.setAttribute('placeholder', 'Digite o ID do veiculo a ser excluído:')

    const botaoEcluir  = document.createElement('button')
    botaoEcluir.textContent = 'EXCLUIR'

    document.getElementById('adm').appendChild(entrada1)
    document.getElementById('adm').appendChild(botaoEcluir)
    function excluir(){
        const id = document.getElementById('input1').value
        if(veiculos[id]) {
            delete veiculos[id]
            mensagem.innerText = 'Veiculo excluído com sucesso!'
            mensagem.style.color = 'green'
            document.getElementById('input1').value = ''
        } else {
            mensagem.innerText = 'Veiculo não encontrado!'
            mensagem.style.color = 'red'
            document.getElementById('input1').value = ''
        }
    }
    botaoEcluir.addEventListener('click', excluir)
}