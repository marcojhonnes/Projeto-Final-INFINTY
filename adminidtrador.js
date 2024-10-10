// capiturando os objetos da pagina administrador.html
const administrador = document.getElementById('adm')
const escolher = document.getElementById('escolha')
const mensagem = document.getElementById('msg')
const paragrafo = document.getElementById('equipamentos-lista')


function cadastrarUsuarios() {
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerHTML = ''
    const idUsuario = document.createElement('input')
    idUsuario.setAttribute('id', 'input1')
    idUsuario.setAttribute('type', 'number')
    idUsuario.setAttribute('placeholder', 'Digite o ID')

    const nivelSeguranca = document.createElement('input')
    nivelSeguranca.setAttribute('id', 'input2')
    nivelSeguranca.setAttribute('type', 'text')
    nivelSeguranca.setAttribute('placeholder', 'Digite o Cargo')
    
    const nomeUsuario = document.createElement('input')
    nomeUsuario.setAttribute('id', 'input3')
    nomeUsuario.setAttribute('type', 'text')
    nomeUsuario.setAttribute('placeholder', 'Digite o nome')

    const senhaUsuario = document.createElement('input')
    senhaUsuario.setAttribute('id', 'input4')
    senhaUsuario.setAttribute('type', 'text')
    senhaUsuario.setAttribute('placeholder', 'Digite a senha')

    const confirmarSenha = document.createElement('input')
    confirmarSenha.setAttribute('id', 'input5')
    confirmarSenha.setAttribute('type', 'text')
    confirmarSenha.setAttribute('placeholder', 'Confirme a senha')
    
    const botaoCadastrar = document.createElement('button')
    botaoCadastrar .textContent = 'Cadastrar'

    document.getElementById('adm').appendChild(idUsuario)
    document.getElementById('adm').appendChild(nivelSeguranca)
    document.getElementById('adm').appendChild(nomeUsuario)
    document.getElementById('adm').appendChild(senhaUsuario)
    document.getElementById('adm').appendChild(confirmarSenha)
    document.getElementById('adm').appendChild(botaoCadastrar)
    function cadastro() {
        const idUse = document.getElementById('input1').value;
        const funcao = document.getElementById('input2').value
        const nomeUsu = document.getElementById('input3').value;
        const senhaUsu = document.getElementById('input4').value;
        const confirmSenha = document.getElementById('input5').value;
        saudacao.innerText = `Olá seja bem vindo`

        if (idUse === '' || nomeUsu === '' || senhaUsu === '' || confirmSenha === '' || funcao === '') {
            mensagem.innerText = 'Preencha todos os campos';
        } else if (senhaUsu !== confirmSenha) {
            mensagem.innerText = 'As senhas não coincidem!';
        } else {
            mensagem.innerText = 'Usuário cadastrado com sucesso!';
            funcionarios[idUse] = {
                nivel: funcao,
                nome: nomeUsu,
                senha: senhaUsu
            };

            console.log(funcionarios); // Verifica os usuários no console

            
            document.getElementById('input1').value = '';
            document.getElementById('input2').value = '';
            document.getElementById('input3').value = '';
            document.getElementById('input4').value = '';
            document.getElementById('input5').value = '';
        }
    }

    botaoCadastrar.addEventListener('click', cadastro);
}

function mostrarFuncionarios() {
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerHTML = ''
    const entrada1 = document.createElement('input')
    entrada1.setAttribute('id', 'input1')
    entrada1.setAttribute('type', 'number')
    entrada1.setAttribute('placeholder', 'Digite o ID')

    const botaoBuscar = document.createElement('button')
    botaoBuscar.textContent = 'Pesquisar'
    document.getElementById('adm').appendChild(entrada1)
    document.getElementById('adm').appendChild(botaoBuscar)
    function buscar() {
        const membro = document.getElementById('input1').value
        if(funcionarios[membro]) {
            const funcionario = funcionarios[membro]
            const dadosFuncionario = `ID: ${funcionario.id}\nNOME: ${funcionario.nome}\nNIVEL: ${funcionario.nivel}\nSENHA: ${funcionario.senha} `
            // const dadositem = `nome: ${objeto.nomeDispositivo}\n situacao: ${objeto.situacao}\ndisponibilidade: ${objeto.disponibilidade} `
            mensagem.innerText = dadosFuncionario
            document.getElementById('input1').value = '';
        } else {
            mensagem.innerText = 'Funcionário não encontrado'
        }
    }
    
    console.log(funcionarios)
    botaoBuscar.addEventListener('click', buscar)
}

function listarFuncionarios() {
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerText = ''

    let conjuntoFuncionarios = Object.values(funcionarios)
    let todosFuncionarios = conjuntoFuncionarios.map(function(funcionario){
        return `Nome do funcionario: ${funcionario.nome}, Cargo:  ${funcionario.nivel}`
    }).join('<br>')
    document.getElementById('equipamentos-lista').innerHTML = todosFuncionarios
}

function excluirFuncionario() {
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
        mensagem.innerText = `Funcionario: ${funcionarios[id].nome}, Cargo: ${funcionarios[id].nivel}. Funcionário excluído com sucesso!`
        if(funcionarios[id]) {
            delete funcionarios[id]
            
            document.getElementById('input1').value = ''
        } else {
            mensagem.innerText = 'Funcionário não encontrado!'
            document.getElementById('input1').value = ''
        }
    }
    botaoEcluir.addEventListener('click', excluir)
}

function excluirGeremteFuncionario() {
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
        mensagem.innerText = `Funcionario: ${funcionarios[id].nome}, Cargo: ${funcionarios[id].nivel}. Funcionário excluído com sucesso!`
        if(funcionarios[id] && funcionarios[id].nivel != 'administrador') {
            delete funcionarios[id]
            
            document.getElementById('input1').value = ''
        } else if(funcionarios[id] && funcionarios[id].nivel === 'administrador') {
            mensagem.innerText = 'Você não tem permissão para escluir esteFuncionário!'
            document.getElementById('input1').value = ''
        }
    }
    botaoEcluir.addEventListener('click', excluir)
}
// ======================================================================================================================================================
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
        } else {
            mensagem.innerText = `O Dispositivo: ${nomeDispositivo}, foi cadastrado com sucesso!`;
            
            
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
        document.getElementById('input1').value = '';
    } else {
        mensagem.innerText = 'Item de segurança não encontrado'
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
            document.getElementById('input1').value = ''
        } else {
            mensagem.innerText = 'Dispositivo de Segurança não encontrado!'
            document.getElementById('input1').value = ''
        }
    }
    botaoEcluir.addEventListener('click', excluir)
}
// ======================================================================================================================================================

function listarVeiculos() {
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerHTML = ''
    let conjuntoVeiculos = Object.values(veiculos);
    let todosveiculos = conjuntoVeiculos.map(function(veiculo) {
        return `Tarefa: ${veiculo.veiculo}, Prioridade da tarefa: ${veiculo.placa}, ${veiculo.cor}`;
    }).join('<br>'); // Formata cada item e junta com quebras de linha
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
        } else {
            veiculos[idVeiculo] = {
                nome: nomeVeiculo,
                placa: placaoVeiculo,
                cor: corVeiculo
             }
             mensagem.innerText = `O veiculo: ${nomeVeiculo} com ID: ${idVeiculo} foi cadastrada com sucesso`
             console.log(tarefas)
             document.getElementById('input1').value = '';
             document.getElementById('input2').value = '';
             document.getElementById('input3').value = '';
         }
         
         }
         botaoCadastrar.addEventListener('click', excluirVeiculo)
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
            document.getElementById('input1').value = ''
        } else {
            mensagem.innerText = 'Veiculo não encontrado!'
            document.getElementById('input1').value = ''
        }
    }
    botaoEcluir.addEventListener('click', excluir)
}
// ======================================================================================================================================================

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
                funcionario: 'not',
                situacao: situacaoTarefa
             }
             mensagem.innerText = `A tarefa com ID: ${idTarefa} foi cadastrada com sucesso`
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
        }).join('<br>'); // Formata cada item e junta com quebras de linha
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
                document.getElementById('input1').value = ''
            } else {
                mensagem.innerText = 'A tarefa não encontrada!'
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
            if(pegarTarefa ==='sim') {
                const suaTarefa = `${tarefas[id].funcionario} sua tarefa é: ${tarefas[id].tarefa}`
                tarefas[id].situacao = 'em execução'
                mensagem.innerText = suaTarefa
            paragrafo.innerText = 'boa tarefa'
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
                } 
            } else {
                paragrafo.innerText = 'ID Invalido'
            }
        }
        botaoConfirmar.addEventListener('click', concluida)
    }

// ======================================================================================================================================================

            function listarArmaduras() {
                administrador.innerHTML = ''
                paragrafo.innerHTML = ''
                mensagem.innerHTML = ''
        
                let conjuntoArmaduras = Object.values(armaduraBatman)
                let todosArmaduras = conjuntoArmaduras.map(function(armadura){
                    return `a armadura: ${armadura.armaduraNome}, Situação da Armadura:  ${armadura.situacao}`
                }).join('<br>')
                document.getElementById('equipamentos-lista').innerHTML = todosArmaduras
            }  
            
            function cadastrararmadura() {
                administrador.innerHTML = ''
                paragrafo.innerHTML = ''
                mensagem.innerHTML = ''
                const entrada1 = document.createElement('input')
                entrada1.setAttribute('id', 'input1')
                entrada1.setAttribute('type', 'number')
                entrada1.setAttribute('placeholder', 'Digite o ID da Armadura ')
        
                const entrada2 = document.createElement('input')
                entrada2.setAttribute('id', 'input2')
                entrada2.setAttribute('type', 'text')
                entrada2.setAttribute('placeholder', 'Digite o nome da Armadura ')
            
               const entrada3 = document.createElement('input')
               entrada3.setAttribute('id', 'input3')
               entrada3.setAttribute('type', 'text')
               entrada3.setAttribute('placeholder', 'Digite a Situação da Armadura')
            
               const entrada4 = document.createElement('input')
               entrada4.setAttribute('id', 'input4')
               entrada4.setAttribute('type', 'number')
               entrada4.setAttribute('placeholder', 'Digite a data de fabricação da Ar')
            
                const botaoCadastrar = document.createElement('button')
                botaoCadastrar .textContent = 'Cadastrar'
            
                document.getElementById('adm').appendChild(entrada1)
                document.getElementById('adm').appendChild(entrada2)
                document.getElementById('adm').appendChild(entrada3)
                document.getElementById('adm').appendChild(entrada4)
                document.getElementById('adm').appendChild(botaoCadastrar)
                function adicionarArmadura() {
                    const idArmadura = document.getElementById('input1').value
                    const nomeArmadura = document.getElementById('input2').value
                    const situacaoArmadura = document.getElementById('input3').value
                    const fabricacaoAno = document.getElementById('input4').value
                    if(idArmadura === '' || nomeArmadura === '' || situacaoArmadura === '' || fabricacaoAno === '') {
                        mensagem.innerText = 'preencha todos os campos'
                    } else {
                        armaduraBatman[idArmadura] = {
                            armaduraNome: nomeArmadura,
                            situacao: situacaoArmadura,
                            anoFabricacao: fabricacaoAno
                         }
                         mensagem.innerText = `A Armadura: ${nomeArmadura} com ID: ${idArmadura} foi cadastrada com sucesso`
                         console.log(tarefas)
                         document.getElementById('input1').value = '';
                         document.getElementById('input2').value = '';
                         document.getElementById('input3').value = '';
                     }
                     
                     }
                     botaoCadastrar.addEventListener('click', adicionarArmadura)
                    }

            function mudarSituacaoArmaduras() {
                administrador.innerHTML = ''
                paragrafo.innerHTML = ''
                mensagem.innerHTML = '' 

                const entrada1 = document.createElement('input')
                entrada1.setAttribute('id', 'input1')
                entrada1.setAttribute('type', 'number')
                entrada1.setAttribute('placeholder', 'Digite o ID da ARMADURA ')

                const entrada2 = document.createElement('input')
                entrada2.setAttribute('id', 'input2')
                entrada2.setAttribute('type', 'number')
                entrada2.setAttribute('placeholder', 'Digite 1 para Disponivel e 2 para Indisponivel')

                const botaoMudar = document.createElement('button')
                botaoMudar .textContent = 'Cadastrar'

                document.getElementById('adm').appendChild(entrada1)
                document.getElementById('adm').appendChild(entrada2)
                document.getElementById('adm').appendChild(botaoMudar)

                 function mudarArmadura() {  
                   const id = document.getElementById('input1').value
                   const situacaoArmadura = document.getElementById('input2').value
                   const novaSituacao = Number(situacaoArmadura)
                   if(armaduraBatman[id]){
                        if(novaSituacao === 1){
                            armaduraBatman[id].situacao = 'disponivel'
                        paragrafo.innerText = 'situação da armaduara mudada com sucesso'
                        console.log(armaduraBatman[id])
                        } else if(novaSituacao === 2) {
                            armaduraBatman[id].situacao = 'insponivel'
                            paragrafo.innerText = 'situação da armaduara mudada com sucesso'
                        } else {
                            paragrafo.innerText = 'valor invalido para situação da armadura'
                        }
                    } else {
                        paragrafo.innerText = 'ID Invalido'
                    }
                }
                console.log(armaduraBatman)
                botaoMudar.addEventListener('click', mudarArmadura)
            }
            
            function excluirArmadura() {
                administrador.innerHTML = ''
                paragrafo.innerHTML = ''
                mensagem.innerHTML = ''
                const entrada1 = document.createElement('input')
                entrada1.setAttribute('id', 'input1')
                entrada1.setAttribute('type', 'number')
                entrada1.setAttribute('placeholder', 'Digite o ID do Armadura a ser excluída:')
            
                const botaoEcluir  = document.createElement('button')
                botaoEcluir.textContent = 'EXCLUIR'
            
                document.getElementById('adm').appendChild(entrada1)
                document.getElementById('adm').appendChild(botaoEcluir)
                function excluir(){
                    const id = document.getElementById('input1').value
                    if(armaduraBatman[id]) {
                        delete armaduraBatman[id]
                        mensagem.innerText = 'Armadura excluída com sucesso!'
                        document.getElementById('input1').value = ''
                    } else {
                        mensagem.innerText = 'Armadura não encontrada!'
                        document.getElementById('input1').value = ''
                    }
                }
                botaoEcluir.addEventListener('click', excluir)
            }
// ======================================================================================================================================================
        
function limparPagina() {
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerHTML = ''
}

escolher.addEventListener('change', function() {
    const opcaoEscolida = escolher.value
    if(opcaoEscolida === '0') {
        limparPagina()
    } else if(opcaoEscolida === '1') {
        cadastrarUsuarios()
    } else if(opcaoEscolida === '2') {
        mostrarFuncionarios()
    } else if(opcaoEscolida === '3') {
        listarFuncionarios()
    } else if(opcaoEscolida === '4') {
        excluirFuncionario()
    } else if(opcaoEscolida === '5') {
        cadastrarDispositivo()
    } else if(opcaoEscolida === '6') {
        pesquisarDispositivo()
    } else if(opcaoEscolida === '7') {
        retornarTodosEquipamentos()
    } else if(opcaoEscolida === '8') {
        excluirDispositivoSeguranca()
    } else if(opcaoEscolida === '9') {
        cadastrarTarefas()
    } else if(opcaoEscolida === '10') {
        listarTarefas()
    } else if(opcaoEscolida === '11') {
        tarefaConcluida()
    } else if(opcaoEscolida === '12') {
        excluirtarefa()
    } else if(opcaoEscolida === '13') {
        listarVeiculos()
    } else if(opcaoEscolida === '14') {
        cadastrarVeiculos()
    } else if(opcaoEscolida === '15') {
        excluirVeiculo()
    } else if(opcaoEscolida === '16') {
        listarArmaduras()
    } else if(opcaoEscolida === '17') {
        cadastrararmadura()
    } else if(opcaoEscolida === '18') {
        mudarSituacaoArmaduras()
    } else if(opcaoEscolida === '19') {
        excluirArmadura()
    } else if(opcaoEscolida === '20') {
        executarTarefa()
    } else if(opcaoEscolida === '21') {
        excluirGeremteFuncionario()
    }
}
    )