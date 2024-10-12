window.onload = function() {
    const nomeUsuario = localStorage.getItem('nomeUsuario', ''); 
    if (nomeUsuario) {
        document.getElementById('novaMenssagem').innerText = `Bem-vindo, ${nomeUsuario}, às Indústrias Wayne!`;
    }
};

function sair() {
    window.location.href = 'index.html';
    paragrafo.innerText = `Seja Bem Vindo SR. ${nomeUsuario}`
    mensagem.style.color = 'green'
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
        mostrarFuncionariosAdministrador()
    } else if(opcaoEscolida === '4') {
        listarFuncionariosAdministrador()
    } else if(opcaoEscolida === '5') {
        listarFuncionarios()
    } else if(opcaoEscolida === '6') {
        excluirFuncionario()
    } else if(opcaoEscolida === '7') {
        cadastrarDispositivo()
    } else if(opcaoEscolida === '8') {
        pesquisarDispositivo()
    } else if(opcaoEscolida === '9') {
        retornarTodosEquipamentos()
    } else if(opcaoEscolida === '10') {
        excluirDispositivoSeguranca()
    } else if(opcaoEscolida === '11') {
        cadastrarTarefas()
    } else if(opcaoEscolida === '12') {
        listarTarefas()
    } else if(opcaoEscolida === '13') {
        executarTarefa()
    } else if(opcaoEscolida === '14') {
        tarefaConcluida()
    }  else if(opcaoEscolida === '15') {
        excluirtarefa()
    } else if(opcaoEscolida === '16') {
        listarVeiculos()
    } else if(opcaoEscolida === '17') {
        cadastrarVeiculos()
    } else if(opcaoEscolida === '18') {
        excluirVeiculo()
    } else if(opcaoEscolida === '19') {
        listarArmaduras()
    } else if(opcaoEscolida === '20') {
        cadastrararmadura()
    } else if(opcaoEscolida === '21') {
        mudarSituacaoArmaduras()
    } else if(opcaoEscolida === '22') {
        excluirArmadura()
    } else if(opcaoEscolida === '23') {
        excluirGeremteFuncionario()
    } else if(opcaoEscolida === '24') {
        mostrarNomeFuncionariosAdministrador()
    } else if(opcaoEscolida === '25') {
        mostrarNomeFuncionariosGerente()
    } else if(opcaoEscolida === '26') {
        sair()
    }
}
    )