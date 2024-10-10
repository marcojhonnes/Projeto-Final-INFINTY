// Projeto Final
// As Indústrias Wayne, uma empresa renomada e inovadora liderada pelo
// lendário Bruce Wayne (também conhecido como Batman), está buscando
// uma solução tecnológica para otimizar seus processos internos e melhorar a
// segurança de Gotham City. Como parte de seu projeto final, você irá
// desenvolver uma aplicação web full stack que atenda às necessidades
// específicas das Indústrias Wayne.
// Descrição do Projeto: Sua missão é criar uma plataforma que aborde os
// requisitos que são abordados na próxima página do arquivo.

// DO PROJETO:
// Sistema de Gerenciamento de Segurança:
// Desenvolva um sistema de controle de acesso que permita apenas
// usuários autorizados a acessar áreas restritas das instalações das Indústrias
// Wayne.
// Implemente autenticação e autorização para diferentes tipos de usuários,
// como funcionários, gerentes e administradores de segurança.
// Gestão de Recursos:
// Desenvolva uma interface para gerenciar recursos internos, como
// inventário de equipamentos, veículos e dispositivos de segurança.
// Permita que os administradores possam adicionar, remover e atualizar
// informações sobre esses recursos de forma eficiente.
// Dashboard de Visualização:
// Crie um painel de controle visualmente atraente que exiba dados relevantes
// sobre segurança, recursos e atividades dentro das Indústrias Wayne

// Entrega:
// Apresente um protótipo funcional da aplicação, incluindo código
// fonte e documentação detalhada.
// Certifique-se de demonstrar a integração eficaz entre o frontend e
// o backend, bem como a implementação dos requisitos
// mencionados acima. 
// Use todo e qualquer conhecimento adquirido até aqui. Este projeto
// final, além de ser a sua avaliação, também lhe serve como um bom
// portfólio


// capiturando os objetos da pagina index.html
const cadastro = document.getElementById('cadastro')
const nome = document.getElementById('nome')
const senha = document.getElementById('senha')
const botao = document.getElementById('btn')
const resposta = document.getElementById('menssagem')
const titulos = document.getElementById('titulo')
const selecionar = document.getElementById('escolha')
const autenticar = document.getElementById('autenticar')
const option = document.getElementById('opcao')
const botaoinicio = document.getElementById('inicio')
const texto = document.getElementById('text')
const saudacao = document.getElementById('novaMenssagem')
const nomes = document.getElementById('nomes')

let armaduraBatman = {
    1:{armaduraNome: 'Batman Begins', situacao: 'indisponivel', anoFabricacao: '2005'}, 
    2:{armaduraNome: 'Batman Dark Knight', situacao: 'disponivel', anoFabricacao: '2008'},
    3:{armaduraNome: 'Batman Returns', situacao: 'disponivel', anoFabricacao: '2012'}, 
    4:{armaduraNome: 'Batman Vs. Superman', situacao: 'indisponivel', anoFabricacao: '2016'},
    5:{armaduraNome: 'Batman', situacao: 'indisponivel', anoFabricacao: '2022'}
 };

let funcionarios = {
    1: {id: 12, nome: 'João', nivel: 'Gerente', senha: '1234'},
    2: {id: 2, nome: 'Maria', nivel: 'Administrador', senha: '123'},
    3: {id: 3, nome: 'Marco', nivel: 'Administrador', senha: '123'},
    4: {id: 4, nome: 'Aurelio', nivel: 'Funcionario', senha: '123'},
    5: {id: 5, nome: 'Junior', nivel: 'Gerente', senha: '123'},
    6: {id: 6, nome: 'Christopher', nivel: 'Gerente', senha: '123'},
    7: {id: 7, nome: 'Alice', nivel: 'Funcionario', senha: '123'},
    8: {id: 8, nome: 'Arthur', nivel: 'Funcionario', senha: '123'}
};

let equipamentos = {
    1:{arma: 'pistola 9mm',municao: '50.000 unidades'},
    2:{arma: 'pistola 44mm',municao: '150.000 unidades'},
    3:{arma: 'fuzil 762',municao: '250.000 unidades'},
    4:{arma: 'fuzil ak 47',municao: '30.000 unidades'},
}

let veiculos = {
    1:{veiculo: 'Maserati MC20',placa: 'QMW1I50', cor:'Azul'},
    2:{veiculo: 'Ferrari 12Cilindri',placa: 'PQR9E87', cor:'Preto'},
    3:{veiculo: 'Lamborghini Aventador',placa: 'XMT2A00', cor: 'Amarelo'},
    4:{veiculo: 'Porche 911',placa: 'FHU6J35', cor: 'Branco'},
}
let dispositivoSeguranca = {
    1:{nomeDispositivo: 'bat-cinto',situacao: 'liberado', disponibilidade:'sim'},
    2:{nomeDispositivo: 'bat-armadura',situacao: 'liberado', disponiblizacao:'sim'},
    3:{nomeDispositivo: 'bat-movel',situacao: 'liberado', disponiblizacao: 'sim'},
    4:{nomeDispositivo: 'bat-moto',situacao: 'liberado', disponiblizacao: 'sim'},
    4:{nomeDispositivo: 'bat-movel',situacao: 'liberado', disponiblizacao: 'sim'},
    4:{nomeDispositivo: 'bat-jato',situacao: 'liberado', disponiblizacao: 'sim'},
}

let tarefas = {
    1:{tarefa: 'estudar', prioridade: '1', funcionario: 'not', situacao: 'em execussão'},
    2:{tarefa: 'almoçar', prioridade: '1', funcionario: 'not', situacao: 'aguardando execussão'},
    3:{tarefa: 'brincar', prioridade: '1', funcionario: 'not', situacao: 'concluida'}
}

function iniciar() {
    const entrada1 = document.createElement('input');
    entrada1.setAttribute('id', 'novoIput1');
    entrada1.setAttribute('type', 'text');
    entrada1.setAttribute('placeholder', 'Digite seu nome');
    
    const entrada2 = document.createElement('input');
    entrada2.setAttribute('id', 'novoIput2');
    entrada2.setAttribute('type', 'password');
    entrada2.setAttribute('placeholder', 'Digite sua senha');
    
    const botao3 = document.createElement('button');
    botao3.textContent = 'Inicio';
    
    document.getElementById('cadastro').appendChild(entrada1);
    document.getElementById('cadastro').appendChild(entrada2);
    document.getElementById('cadastro').appendChild(botao3);

    function entrar() {
        const nomeUsuario = document.getElementById('novoIput1').value;
        const senhaUsuario = document.getElementById('novoIput2').value;
        let autenticado = false;
        let gerente = false
        let funcionario = false
        
        for (let id in funcionarios) {
            if (funcionarios[id].nome === nomeUsuario && funcionarios[id].senha === senhaUsuario && funcionarios[id].nivel === 'Administrador') {
                // saudacao.innerText = funcionarios[id].nome
                
                autenticado = true;
                break;
            } else if (funcionarios[id].nome === nomeUsuario && funcionarios[id].senha === senhaUsuario && funcionarios[id].nivel === 'Gerente') {
                // saudacao.innerText = funcionarios[id].nome
                gerente = true;
                break;
            } else if(funcionarios[id].nome === nomeUsuario && funcionarios[id].senha === senhaUsuario && funcionarios[id].nivel === 'Funcionario') {
                funcionario = true
                break
            }
        }
        
        if (autenticado) {
            cadastro.innerHTML = '';
            const botaoPagina = document.createElement('button');
            botaoPagina.textContent = 'Navegar';
            document.getElementById('cadastro').appendChild(botaoPagina);
            // resposta.innerText = `Seja Bem Vindo SR. ${nomeUsuario} às Empresas WAYNE`;
            // saudacao.innerText = `Seja Bem Vindo SR. ${nomeUsuario} às Empresas WAYNE`
            
            
            // Função de navegação
            function navegarPara() {
                window.location.href = 'administrador.html';
                saudacao.innerText = `Seja Bem Vindo SR. ${nomeUsuario}`
            }
            window.addEventListener('click', navegarPara);
        } else if(gerente) {
            function navegarGerente() {
                window.location.href = 'gerente.html';
            }
            window.addEventListener('click', navegarGerente)
        } else if(funcionario) {
            function navegarFuncionario() {
                window.location.href = 'funcionario.html';
            }
            window.addEventListener('click', navegarFuncionario)
        } else  {
            resposta.innerHTML = 'Nome ou senha inválidos, tente novamente!';
        }
    }
    botao3.addEventListener('click', entrar);
}

botaoinicio.addEventListener('click', iniciar);

function nomeFuncionario() {

}
