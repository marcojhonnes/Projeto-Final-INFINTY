// pagina script.js

export const administrador = document.getElementById('adm')
export const escolher = document.getElementById('escolha')
export const mensagem = document.getElementById('msg')
export const paragrafo = document.getElementById('equipamentos-lista')

export const cadastro = document.getElementById('cadastro')
export const botao = document.getElementById('btn')
export const resposta = document.getElementById('menssagem')
export const titulos = document.getElementById('titulo')
export const selecionar = document.getElementById('escolha')
export const autenticar = document.getElementById('autenticar')
export const option = document.getElementById('opcao')
export const botaoinicio = document.getElementById('inicio')
export const texto = document.getElementById('text')
export const saudacao = document.getElementById('novaMenssagem')
export const nomeFuncionarioLogado = localStorage.getItem('nomeUsuario');


export let funcionarios = {
    1: {id: 1, nome: 'João', nivel: 'Gerente', senha: '123', dataAdmissao: '15/05/2023'},
    2: {id: 2, nome: 'Maria', nivel: 'Administrador', senha: '123', dataAdmissao: '15/05/2023'},
    3: {id: 3, nome: 'Marco', nivel: 'Administrador', senha: '123', dataAdmissao: '15/05/2023'},
    4: {id: 4, nome: 'Aurelio', nivel: 'Funcionario', senha: '123', dataAdmissao: '15/05/2023'},
    5: {id: 5, nome: 'Junior', nivel: 'Gerente', senha: '123', dataAdmissao: '15/05/2023'},
    6: {id: 6, nome: 'Christopher', nivel: 'Gerente', senha: '123', dataAdmissao: '15/05/2023'},
    7: {id: 7, nome: 'Alice', nivel: 'Funcionario', senha: '123', dataAdmissao: '15/05/2023'},
    8: {id: 8, nome: 'Arthur', nivel: 'Funcionario', senha: '123', dataAdmissao: '15/05/2023'}
};

export let armaduraBatman = {
    1:{armaduraNome: 'Batman Begins', situacao: 'indisponivel', anoFabricacao: '2005'}, 
    2:{armaduraNome: 'Batman Dark Knight', situacao: 'disponivel', anoFabricacao: '2008'},
    3:{armaduraNome: 'Batman Returns', situacao: 'disponivel', anoFabricacao: '2012'}, 
    4:{armaduraNome: 'Batman Vs. Superman', situacao: 'indisponivel', anoFabricacao: '2016'},
    5:{armaduraNome: 'Batman', situacao: 'indisponivel', anoFabricacao: '2022'}
 };

 export let equipamentos = {
    1:{arma: 'pistola 9mm',municao: '50.000 unidades'},
    2:{arma: 'pistola 44mm',municao: '150.000 unidades'},
    3:{arma: 'fuzil 762',municao: '250.000 unidades'},
    4:{arma: 'fuzil ak 47',municao: '30.000 unidades'},
}

export let veiculos = {
    1:{nome: 'Maserati MC20',placa: 'QMW1I50', cor:'Azul'},
    2:{nome: 'Ferrari 12Cilindri',placa: 'PQR9E87', cor:'Preto'},
    3:{nome: 'Lamborghini Aventador',placa: 'XMT2A00', cor: 'Amarelo'},
    4:{nome: 'Porche 911',placa: 'FHU6J35', cor: 'Branco'},
}
export let dispositivoSeguranca = {
    1:{nomeDispositivo: 'bat-cinto',situacao: 'liberado', disponibilidade:'sim'},
    2:{nomeDispositivo: 'bat-armadura',situacao: 'liberado', disponiblizacao:'sim'},
    3:{nomeDispositivo: 'bat-movel',situacao: 'liberado', disponiblizacao: 'sim'},
    4:{nomeDispositivo: 'bat-moto',situacao: 'liberado', disponiblizacao: 'sim'},
    5:{nomeDispositivo: 'bat-movel',situacao: 'liberado', disponiblizacao: 'sim'},
    6:{nomeDispositivo: 'bat-jato',situacao: 'liberado', disponiblizacao: 'sim'},
}



export let tarefas = {
    1:{tarefa: 'estudar', prioridade: '1', funcionario: 'not', situacao: 'em execussão'},
    2:{tarefa: 'almoçar', prioridade: '1', funcionario: 'not', situacao: 'aguardando execussão'},
    3:{tarefa: 'brincar', prioridade: '1', funcionario: 'not', situacao: 'concluida'},
    4:{tarefa: 'trabalhar', prioridade: '1', funcionario: 'not', situacao: 'aguardando execussão'}
}

export function iniciar() {
    botaoinicio.disabled = true
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
                
                autenticado = true;
                localStorage.setItem('nomeUsuario', nomeUsuario )
                break;
            } else if (funcionarios[id].nome === nomeUsuario && funcionarios[id].senha === senhaUsuario && funcionarios[id].nivel === 'Gerente') {
                // saudacao.innerText = funcionarios[id].nome
                gerente = true;
                 localStorage.setItem('nomeUsuario', nomeUsuario)
                break;
            } else if(funcionarios[id].nome === nomeUsuario && funcionarios[id].senha === senhaUsuario && funcionarios[id].nivel === 'Funcionario') {
                funcionario = true
                localStorage.setItem('nomeUsuario', nomeUsuario)
                break
            }
        }
        
        if (autenticado) {
            cadastro.innerHTML = '';
            const botaoPagina = document.createElement('button');
            botaoPagina.textContent = 'Navegar';
            document.getElementById('cadastro').appendChild(botaoPagina);
            
            function navegarPara() {
                const testando = document.createElement('p')    
                window.location.href = 'administrador.html';
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
            resposta.style.color = 'red'
        }
    }
    botao3.addEventListener('click', entrar);
}
document.addEventListener("DOMContentLoaded", function() {
    const botaoinicio = document.getElementById("inicio");
    
    botaoinicio.addEventListener("click", iniciar);
});
// botaoinicio.addEventListener('click', iniciar);


