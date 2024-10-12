function cadastrarTarefas() {
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerHTML = ''
    
    const entrada1 = document.createElement('input')
    entrada1.setAttribute('id', 'input1')
    entrada1.setAttribute('type', 'number')
    entrada1.setAttribute('placeholder', 'Digite o ID tarefa ')

   const entrada2 = document.createElement('input')
   entrada2.setAttribute('id', 'input2')
   entrada2.setAttribute('type', 'text')
   entrada2.setAttribute('placeholder', 'Digite a tarefa')

   const entrada3 = document.createElement('input')
   entrada3.setAttribute('id', 'input3')
   entrada3.setAttribute('type', 'number')
   entrada3.setAttribute('placeholder', 'Digite a prioridade')

   const entrada4 = document.createElement('input')
   entrada4.setAttribute('id', 'input4')
   entrada4.setAttribute('type', 'number')
   entrada4.setAttribute('placeholder', 'Digite a prioridade')

    const botaoCadastrar = document.createElement('button')
    botaoCadastrar .textContent = 'Cadastrar'

    document.getElementById('adm').appendChild(entrada1)
    document.getElementById('adm').appendChild(entrada2)
    document.getElementById('adm').appendChild(entrada3)
    document.getElementById('adm').appendChild(entrada4)
    document.getElementById('adm').appendChild(botaoCadastrar)
    document.getElementById('adm').appendChild(botaoCadastrar)

    window.onload = function() {
        const nomeUsuario = localStorage.getItem('nomeUsuario', ''); // Recuperando o nome do usuário do localStorage
        if (nomeUsuario) {
            document.getElementById('novaMenssagem').innerText = `Bem-vindo, ${nomeUsuario}, às Indústrias Wayne!`;
        }
    };

    function adicionarTarefa() {
        const idTarefa = document.getElementById('input1').value
        const opcaoTarefa = document.getElementById('input2').value
        const prioridadeTarefa = document.getElementById('input3').value
        const situacaoTarefa = document.getElementById('input4').value
        if(idTarefa === '' || opcaoTarefa === '' || prioridadeTarefa === '' || situacaoTarefa === '') {
            mensagem.innerText = 'preencha todos os campos'
        } else {
            tarefas[idTarefa] = {
                tarefa: opcaoTarefa,
                prioridade: prioridadeTarefa,
                funcionario: saudacao,
                situacao: situacaoTarefa
             }
             mensagem.innerText = `A tarefa com ID: ${idTarefa} foi cadastrada com sucesso`
             mensagem.style.color = 'green'
             console.log(tarefas)
             document.getElementById('input1').value = '';
             document.getElementById('input2').value = '';
             document.getElementById('input3').value = '';
             document.getElementById('input4').value = '';
         }
         
         }
         botaoCadastrar.addEventListener('click', adicionarTarefa)
        }
           
    function listarTarefas() {
        administrador.innerHTML = ''
        paragrafo.innerHTML = ''
        mensagem.innerHTML = ''
        let todasTarefas = Object.values(tarefas);
        let listaFormatada = todasTarefas.map(function(tarefaDiaria) {
            return `Tarefa: ${tarefaDiaria.tarefa}, Prioridade da tarefa: ${tarefaDiaria.prioridade}, Situação da tarefa: ${tarefaDiaria.situacao}, Executada por: ${tarefaDiaria.funcionario}`;
        }).join('<br>'); 
        document.getElementById('equipamentos-lista').innerHTML = listaFormatada;
    }

    function excluirtarefa() {
        administrador.innerHTML = ''
        paragrafo.innerHTML = ''
        mensagem.innerHTML = ''
        const entrada1 = document.createElement('input')
        entrada1.setAttribute('id', 'input1')
        entrada1.setAttribute('type', 'number')
        entrada1.setAttribute('placeholder', 'Digite o ID da tarefa a ser excluído:')
    
        const botaoEcluir  = document.createElement('button')
        botaoEcluir.textContent = 'EXCLUIR'
    
        document.getElementById('adm').appendChild(entrada1)
        document.getElementById('adm').appendChild(botaoEcluir)
        function excluir(){
            const id = document.getElementById('input1').value
            if(tarefas[id]) {
                delete tarefas[id]
                mensagem.innerText = 'A tarefa foi excluída com sucesso!'
                mensagem.style.color = 'green'
                document.getElementById('input1').value = ''
            } else {
                mensagem.innerText = 'A tarefa não encontrada!'
                mensagem.style.color = 'red'
                document.getElementById('input1').value = ''
            }
        }
        botaoEcluir.addEventListener('click', excluir)
    }

    function executarTarefa() {
        administrador.innerHTML = ''
        paragrafo.innerHTML = ''
        mensagem.innerHTML = ''

   const entrada1 = document.createElement('input')
   entrada1.setAttribute('id', 'input1')
   entrada1.setAttribute('type', 'number')
   entrada1.setAttribute('placeholder', 'Digite o ID da tarefa') 

   const entrada2 = document.createElement('input')
   entrada2.setAttribute('id', 'input2')
   entrada2.setAttribute('type', 'text')
   entrada2.setAttribute('placeholder', 'Digite a tarefa que deseja realizar')

    const botaoExecutar = document.createElement('button')
    botaoExecutar .textContent = 'Cadastrar'

    document.getElementById('adm').appendChild(entrada1)
    document.getElementById('adm').appendChild(entrada2)
    document.getElementById('adm').appendChild(botaoExecutar)
    function executar() {
        const numero = document.getElementById('input1').value
        const id = Number(numero)
        const pegarTarefa = document.getElementById('input2').value
        if(tarefas[id]){
            if(pegarTarefa === 'sim' && tarefas[id].situacao === 'aguardando execussão') {
                const suaTarefa = `${tarefas[id].funcionario} sua tarefa é: ${tarefas[id].tarefa}`
                tarefas[id].situacao = 'em execução'
                mensagem.innerText = suaTarefa
                mensagem.style.color = 'green'
                paragrafo.innerText = 'Boa tarefa!'
                paragrafo.style.color = 'green'
            } else if(pegarTarefa === 'sim' && tarefas[id].situacao === 'em execussão'){
                paragrafo.innerText = `${tarefas[id].nome} A tarefa já esta sendo executada`
                paragrafo.style.color = 'red'
                // paragrafo.innerText = 'Opção invalida'
            } else if(pegarTarefa === 'sim' && tarefas[id].situacao === 'concluida'){
                paragrafo.innerText = `${tarefas[id].nome} A tarefa já foi executada`
                paragrafo.style.color = 'green'
                
            } else {
                paragrafo.innerText = 'Opção invalida'
            }
        } else {
            paragrafo.innerText = 'ID Invalido'
        }
    }
    botaoExecutar.addEventListener('click', executar)
    }

    function tarefaConcluida() {
        administrador.innerHTML = ''
        paragrafo.innerHTML = ''
        mensagem.innerHTML = '' 

        const entrada1 = document.createElement('input')
        entrada1.setAttribute('id', 'input1')
        entrada1.setAttribute('type', 'number')
        entrada1.setAttribute('placeholder', 'Digite o ID da TAREFA ')

        const entrada2 = document.createElement('input')
        entrada2.setAttribute('id', 'input2')
        entrada2.setAttribute('type', 'number')
        entrada2.setAttribute('placeholder', 'Digite 1 para CONCLUIDA')

        const botaoConfirmar = document.createElement('button')
        botaoConfirmar .textContent = 'Confirmar'

        document.getElementById('adm').appendChild(entrada1)
        document.getElementById('adm').appendChild(entrada2)
        document.getElementById('adm').appendChild(botaoConfirmar)

         function concluida() {  
           const id = document.getElementById('input1').value
           const confirmar = document.getElementById('input2').value
           const novaCnfirmar = Number(confirmar)
           if(tarefas[id]){
                if(novaCnfirmar === 1){
                    tarefas[id].situacao = 'concluida'
                paragrafo.innerText = 'situação da tarefa mudada com sucesso'
                paragrafo.style.color = 'green'
                } 
            } else {
                paragrafo.innerText = 'ID Invalido'
                paragrafo.style.color = 'green'
            }
        }
        botaoConfirmar.addEventListener('click', concluida)
    }