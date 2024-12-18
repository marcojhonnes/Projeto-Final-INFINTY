import { funcionarios, administrador, mensagem, paragrafo} from "./script.js";

export function cadastrarUsuarios() {
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
    senhaUsuario.setAttribute('type', 'password')
    senhaUsuario.setAttribute('placeholder', 'Digite a senha')

    const confirmarSenha = document.createElement('input')
    confirmarSenha.setAttribute('id', 'input5')
    confirmarSenha.setAttribute('type', 'password')
    confirmarSenha.setAttribute('placeholder', 'Confirme a senha')

    const dataAdmissao = document.createElement('input')
    dataAdmissao.setAttribute('id', 'input6')
    dataAdmissao.setAttribute('type', 'text')
    dataAdmissao.setAttribute('placeholder', 'Digite a data de admissão')

    const foto = document.createElement('input')
    foto.setAttribute('id', 'input6')
    foto.setAttribute('type', 'file')
    foto.setAttribute('accept', 'image/*')
    foto.setAttribute('placeholder', 'Escolha a foto')
    
    const botaoCadastrar = document.createElement('button')
    botaoCadastrar .textContent = 'Cadastrar'

    document.getElementById('adm').appendChild(idUsuario)
    document.getElementById('adm').appendChild(nivelSeguranca)
    document.getElementById('adm').appendChild(nomeUsuario)
    document.getElementById('adm').appendChild(senhaUsuario)
    document.getElementById('adm').appendChild(confirmarSenha)
    document.getElementById('adm').appendChild(dataAdmissao)
    document.getElementById('adm').appendChild(botaoCadastrar)
    function cadastro() {
        const idUse = document.getElementById('input1').value;
        // idUse.style.color = 'black'
        const funcao = document.getElementById('input2').value
        const nomeUsu = document.getElementById('input3').value;
        const senhaUsu = document.getElementById('input4').value;
        const confirmSenha = document.getElementById('input5').value;
        const admissaoData = document.getElementById('input6').value;

        if (idUse === '' || nomeUsu === '' || senhaUsu === '' || confirmSenha === '' || funcao === '' || dataAdmissao === '') {
            mensagem.innerText = 'Preencha todos os campos';
            mensagem.style.color = 'red'
        } else if (senhaUsu !== confirmSenha) {
            mensagem.innerText = 'As senhas não coincidem!';
            mensagem.style.color = 'red'
        } else {
            mensagem.innerText = 'Usuário cadastrado com sucesso!';
            mensagem.style.color = 'green'
            funcionarios[idUse] = {
                id: idUse,
                nome: nomeUsu,
                nivel: funcao,
                senha: senhaUsu,
                dataAdmissao: admissaoData
            };

            console.log(funcionarios); 
            
            document.getElementById('input1').value = '';
            document.getElementById('input2').value = '';
            document.getElementById('input3').value = '';
            document.getElementById('input4').value = '';
            document.getElementById('input5').value = '';
            document.getElementById('input6').value = '';
        }
    }
    botaoCadastrar.addEventListener('click', cadastro);
}

export function mostrarNomeFuncionariosGerente() {
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerHTML = ''

    
    const entrada1 = document.createElement('input')
    entrada1.setAttribute('id', 'input1')
    entrada1.setAttribute('type', 'text')
    entrada1.setAttribute('placeholder', 'Digite o Nome do funcionario')

    const botaoBuscar = document.createElement('button')
    botaoBuscar.textContent = 'Pesquisar'

    document.getElementById('adm').appendChild(entrada1)
    document.getElementById('adm').appendChild(botaoBuscar)
    botaoBuscar.addEventListener('click', function () {
        const nomeInput = document.getElementById('input1').value;
        pesquisarFuncionarioPorNome(nomeInput);
    })
}

export function pesquisarFuncionarioPorNome(nome) {
    let funcionarioEncontrado = null;

    
    for (let key in funcionarios) {
        if (funcionarios[key].nome.toLowerCase() === nome.toLowerCase()) {
            funcionarioEncontrado = funcionarios[key];
            break;
        }
    }

    if (funcionarioEncontrado) {
        const dadosFuncionario = `ID: ${funcionarioEncontrado.id}\nNOME: ${funcionarioEncontrado.nome}\nNIVEL: ${funcionarioEncontrado.nivel}\n DATA ADMISSÃO:${funcionarioEncontrado.dataAdmissao}`;
        mensagem.innerText = dadosFuncionario;
    } else {
        mensagem.innerText = 'Funcionário não encontrado';
        mensagem.style.color = 'red'
    }

    
    document.getElementById('input1').value = '';
}


export function mostrarNomeFuncionariosAdministrador() {
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerHTML = ''

    
    const entrada1 = document.createElement('input')
    entrada1.setAttribute('id', 'input1')
    entrada1.setAttribute('type', 'text')
    entrada1.setAttribute('placeholder', 'Digite o Nome do funcionario')

    const botaoBuscar = document.createElement('button')
    botaoBuscar.textContent = 'Pesquisar'

    document.getElementById('adm').appendChild(entrada1)
    document.getElementById('adm').appendChild(botaoBuscar)

    
    botaoBuscar.addEventListener('click', function () {
        const nomeInput = document.getElementById('input1').value;
        pesquisarFuncionarioPorNome(nomeInput);
    })


    function pesquisarFuncionarioPorNome(nome) {
    let funcionarioEncontrado = null;

    for (let key in funcionarios) {
        if (funcionarios[key].nome.toLowerCase() === nome.toLowerCase()) {
            funcionarioEncontrado = funcionarios[key];
            break;
        }
    }

    if (funcionarioEncontrado) {
        const dadosFuncionario = `ID: ${funcionarioEncontrado.id} \n NOME: ${funcionarioEncontrado.nome} \n NIVEL: ${funcionarioEncontrado.nivel} \n SENHA: ${funcionarioEncontrado.senha} \n DATA DE ADMISSÃO: ${funcionarioEncontrado.dataAdmissao}`;
        mensagem.innerText = dadosFuncionario;
    } else {
        mensagem.innerText = 'Funcionário não encontrado';
        mensagem.style.color = 'red'
    }

    document.getElementById('input1').value = '';
}
}

export function mostrarFuncionariosId() {
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerHTML = ''
    const entrada1 = document.createElement('input')
    entrada1.setAttribute('id', 'input1')
    entrada1.setAttribute('type', 'text')
    entrada1.setAttribute('placeholder', 'Digite o Nome do funcionario')

    const botaoBuscar = document.createElement('button')
    botaoBuscar.textContent = 'Pesquisar'
    document.getElementById('adm').appendChild(entrada1)
    document.getElementById('adm').appendChild(botaoBuscar)
    function buscar() {
        const membro = document.getElementById('input1').value
        if(funcionarios[membro]) {
            const funcionario = funcionarios[membro]
            const dadosFuncionario = `ID: ${funcionario.id}\nNOME: ${funcionario.nome}\nNIVEL: ${funcionario.nivel}\nDATA ADMISSÃO: ${funcionario.dataAdmissao}`
            // const dadositem = `nome: ${objeto.nomeDispositivo}\n situacao: ${objeto.situacao}\ndisponibilidade: ${objeto.disponibilidade} `
            mensagem.innerText = dadosFuncionario
            document.getElementById('input1').value = '';
        } else {
            mensagem.innerText = 'Funcionário não encontrado'
            mensagem.style.color = 'red'
        }
    }
    
    botaoBuscar.addEventListener('click', buscar)
}

export function listarFuncionariosGerente() {
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerText = ''

    let conjuntoFuncionarios = Object.values(funcionarios)
    let todosFuncionarios = conjuntoFuncionarios.map(function(funcionario){
        return `ID: ${funcionario.id} Nome: ${funcionario.nome} Cargo:  ${funcionario.nivel} \n DATA ADMISSÃO: ${funcionario.dataAdmissao}`
    }).join('<br>')
    document.getElementById('equipamentos-lista').innerHTML = todosFuncionarios
}

export function listarFuncionariosIdAdministrador() {
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerHTML = ''
    const entrada1 = document.createElement('input')
    entrada1.setAttribute('id', 'input1')
    entrada1.setAttribute('type', 'text')
    entrada1.setAttribute('placeholder', 'Digite o Nome do funcionario')

    const botaoBuscar = document.createElement('button')
    botaoBuscar.textContent = 'Pesquisar'
    document.getElementById('adm').appendChild(entrada1)
    document.getElementById('adm').appendChild(botaoBuscar)
    function buscar() {
        const membro = document.getElementById('input1').value
        if(funcionarios[membro]) {
            const funcionario = funcionarios[membro]
            const dadosFuncionario = `ID: ${funcionario.id} \n NOME: ${funcionario.nome}\nNIVEL: ${funcionario.nivel} \n SENHA: ${funcionario.senha} \n DATA ADMISSÃO: ${funcionario.dataAdmissao} `
            mensagem.style.color = 'green'
            // const dadositem = `nome: ${objeto.nomeDispositivo}\n situacao: ${objeto.situacao}\ndisponibilidade: ${objeto.disponibilidade} `
            mensagem.innerText = dadosFuncionario
            document.getElementById('input1').value = '';
        } else {
            mensagem.innerText = 'Funcionário não encontrado'
            mensagem.style.color = 'red'
        }
    }
    
    botaoBuscar.addEventListener('click', buscar)
}

export function listarFuncionariosAdministrador() {
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerText = ''

    let conjuntoFuncionarios = Object.values(funcionarios)
    let todosFuncionarios = conjuntoFuncionarios.map(function(funcionario){
        return `ID: ${funcionario.id} \n Nome do funcionario: ${funcionario.nome}, Cargo:  ${funcionario.nivel}, Senha: ${funcionario.senha} \n DATA ADMISSÃO: ${funcionario.dataAdmissao}`
    }).join('<br>')
    document.getElementById('equipamentos-lista').innerHTML = todosFuncionarios
    
}

export function excluirFuncionarioAdministrador() {
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
        mensagem.innerText = `Funcionario: ${funcionarios[id].nome}, Cargo: ${funcionarios[id].nivel} \n DATA ADMISSÃO: ${funcionarios.dataAdmissao}. Funcionário excluído com sucesso!`
        mensagem.style.color = 'green'
        if(funcionarios[id]) {
            delete funcionarios[id]
            
            document.getElementById('input1').value = ''
        } else {
            mensagem.innerText = 'Funcionário não encontrado!'
            mensagem.style.color = 'red'
            document.getElementById('input1').value = ''
        }
    }
    botaoEcluir.addEventListener('click', excluir)
}

export function excluirGeremteFuncionario() {
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
        
        if(funcionarios[id]) {
           if(funcionarios[id].nivel === 'Administrador') {
            mensagem.innerText = `Você não tem permissão para escluir o ADMINISTRADOR, "${funcionarios[id].nome}"!`
            mensagem.style.color = 'red'
            document.getElementById('input1').value = ''
            console.log(funcionarios)
           } else {
            mensagem.innerText = `Funcionário, "${funcionarios[id].nome}" excluído com sucesso!`
            mensagem.style.color = 'green'
            delete funcionarios[id]
            
             document.getElementById('input1').value = ''
            console.log(funcionarios)
           }
            
        } else {
            mensagem.innerText = 'Funcionario não encontrado!'
            mensagem.style.color = 'red'
            document.getElementById('input1').value = ''
        }
    }
    botaoEcluir.addEventListener('click', excluir)
}