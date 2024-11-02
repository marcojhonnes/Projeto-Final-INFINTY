import { administrador } from "./script.js";
import {mensagem, paragrafo, escolher} from "./script.js";

import {cadastrarUsuarios, mostrarFuncionariosId, listarFuncionariosIdAdministrador, listarFuncionariosAdministrador, listarFuncionariosGerente, mostrarNomeFuncionariosAdministrador, mostrarNomeFuncionariosGerente, excluirGeremteFuncionario, excluirFuncionarioAdministrador} from './funcionarios.js'

import {cadastrarDispositivoSeguranca, pesquisarDispositivoSeguranca, excluirDispositivoSeguranca, retornarTodosDispositivoSeguraca} from './dispositivoSeguranca.js'

import {cadastrarVeiculos, listarVeiculos, excluirVeiculo} from './veiculos.js'

import {cadastrararmadura, listarArmaduras, mudarSituacaoArmaduras, excluirArmadura} from './armadurasBatman.js'

import { listarTarefas, cadastrarTarefas, excluirtarefa, executarTarefa, tarefaConcluida } from './tarefas.js'

import {cadastrarEquipamento, retornarTodosEquipamentos, pesquisarEquipamento, excluirEquipamento} from './equipamentos.js'
window.onload = function() {
    const nomeFuncionario = localStorage.getItem('nomeUsuario');
    if (nomeFuncionario) {
        document.getElementById('novaMenssagem').innerText = `Bem-vindo às Indústrias Wayne!`;
        const texto = document.getElementById('text');
        texto.innerText = nomeFuncionario;
    }
};

export function limparPagina() {
    administrador.innerHTML = ''
    paragrafo.innerHTML = ''
    mensagem.innerHTML = ''
    }

export function sair() {
    window.location.href = 'index.html';
}

// colocar a foto do usuario a foto do carro a foto da armadura do armadura Batman
// adiconar os input para pedir as Fotos estilizar as fotos no css

escolher.addEventListener('change', function() {
    const opcaoEscolida = escolher.value
    if(opcaoEscolida === '0') {
        limparPagina()
    } else if(opcaoEscolida === '1') {
        cadastrarUsuarios()
    } else if(opcaoEscolida === '2') {
        mostrarFuncionariosId()
    } else if (opcaoEscolida === '3'){ 
        listarFuncionariosIdAdministrador()
    } else if(opcaoEscolida === '4') {
        listarFuncionariosAdministrador()
    } else if(opcaoEscolida === '5') {
        listarFuncionariosGerente()
    } else if(opcaoEscolida === '6') {
        mostrarNomeFuncionariosAdministrador()
    } else if(opcaoEscolida === '7') {
        mostrarNomeFuncionariosGerente()
    } else if(opcaoEscolida === '8') {
        excluirFuncionarioAdministrador()
    } else if(opcaoEscolida === '9') {
        excluirGeremteFuncionario()
    } else if(opcaoEscolida === '10') {
        cadastrarDispositivoSeguranca()
    } else if(opcaoEscolida === '11') {
        pesquisarDispositivoSeguranca()
    } else if(opcaoEscolida === '12') {
        retornarTodosDispositivoSeguraca()
    } else if(opcaoEscolida === '13') {
        excluirDispositivoSeguranca()
    } else if(opcaoEscolida === '14') {
        cadastrarTarefas()
    } else if(opcaoEscolida === '15') {
        listarTarefas()
    } else if(opcaoEscolida === '16') {
        executarTarefa()
    } else if(opcaoEscolida === '17') {
        tarefaConcluida()
    }  else if(opcaoEscolida === '18') {
        excluirtarefa()
    } else if(opcaoEscolida === '19') {
        listarVeiculos()
    } else if(opcaoEscolida === '20') {
        cadastrarVeiculos()
    } else if(opcaoEscolida === '21') {
        excluirVeiculo()
    } else if(opcaoEscolida === '22') {
        listarArmaduras()
    } else if(opcaoEscolida === '23') {
        cadastrararmadura()
    } else if(opcaoEscolida === '24') {
        mudarSituacaoArmaduras()
    } else if(opcaoEscolida === '25') {
        excluirArmadura()
    }  else if(opcaoEscolida === '26') {
        cadastrarEquipamento()
    } else if(opcaoEscolida === '27') {
        pesquisarEquipamento()
    } else if(opcaoEscolida === '28') {
        retornarTodosEquipamentos()
    } else if(opcaoEscolida === '29') {
        excluirEquipamento()
    } else if(opcaoEscolida === '30') {
        sair()
    }
    }
    )