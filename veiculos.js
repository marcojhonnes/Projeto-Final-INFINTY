// veiculos.js
import {veiculos, mensagem, paragrafo, administrador} from "./script.js";

export function listarVeiculos() {
    administrador.innerHTML = '';
    paragrafo.innerHTML = '';
    mensagem.innerHTML = '';
    
    let conjuntoVeiculos = Object.values(veiculos);
    let todosveiculos = conjuntoVeiculos.map(function(veiculo) {
        return `Veiculo: ${veiculo.nome}, Placa do Veiculo: ${veiculo.placa}, Cor do Veiculo: ${veiculo.cor}`;
    }).join('<br>'); 
    
    document.getElementById('equipamentos-lista').innerHTML = todosveiculos;
}

export function cadastrarVeiculos() {
    administrador.innerHTML = '';
    paragrafo.innerHTML = '';

    const entrada1 = document.createElement('input');
    entrada1.setAttribute('id', 'input1');
    entrada1.setAttribute('type', 'number');
    entrada1.setAttribute('placeholder', 'Digite o ID do Veiculo');

    const entrada2 = document.createElement('input');
    entrada2.setAttribute('id', 'input2');
    entrada2.setAttribute('type', 'text');
    entrada2.setAttribute('placeholder', 'Digite o nome do Veiculo');

    const entrada3 = document.createElement('input');
    entrada3.setAttribute('id', 'input3');
    entrada3.setAttribute('type', 'text');
    entrada3.setAttribute('placeholder', 'Digite a Placa do Veiculo');

    const entrada4 = document.createElement('input');
    entrada4.setAttribute('id', 'input4');
    entrada4.setAttribute('type', 'text');
    entrada4.setAttribute('placeholder', 'Digite a Cor do Veiculo');

    const botaoCadastrar = document.createElement('button');
    botaoCadastrar.textContent = 'Cadastrar';

    document.getElementById('adm').appendChild(entrada1);
    document.getElementById('adm').appendChild(entrada2);
    document.getElementById('adm').appendChild(entrada3);
    document.getElementById('adm').appendChild(entrada4);
    document.getElementById('adm').appendChild(botaoCadastrar);

    function adicionarVeiculo() {
        const idVeiculo = document.getElementById('input1').value;
        const nomeVeiculo = document.getElementById('input2').value;
        const placaVeiculo = document.getElementById('input3').value; // Corrigido
        const corVeiculo = document.getElementById('input4').value;
        
        if(idVeiculo === '' || nomeVeiculo === '' || placaVeiculo === '' || corVeiculo === '') {
            mensagem.innerText = 'Preencha todos os campos';
            mensagem.style.color = 'red';
        } else {
            veiculos[idVeiculo] = {
                nome: nomeVeiculo,
                placa: placaVeiculo, // Corrigido
                cor: corVeiculo
            };
            mensagem.innerText = `O veículo: ${nomeVeiculo} com ID: ${idVeiculo} foi cadastrado com sucesso`;
            mensagem.style.color = 'green';
            console.log(veiculos); // Mostrar veículos cadastrados
            
            // Limpar campos
            document.getElementById('input1').value = '';
            document.getElementById('input2').value = '';
            document.getElementById('input3').value = '';
            document.getElementById('input4').value = '';
        }
    }

    botaoCadastrar.addEventListener('click', adicionarVeiculo);
}

export function excluirVeiculo() {
    administrador.innerHTML = '';
    paragrafo.innerHTML = '';
    mensagem.innerHTML = '';

    const entrada1 = document.createElement('input');
    entrada1.setAttribute('id', 'input1');
    entrada1.setAttribute('type', 'number');
    entrada1.setAttribute('placeholder', 'Digite o ID do veículo a ser excluído:');

    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'EXCLUIR';

    document.getElementById('adm').appendChild(entrada1);
    document.getElementById('adm').appendChild(botaoExcluir);

    function excluir() {
        const id = document.getElementById('input1').value;
        if(veiculos[id]) {
            delete veiculos[id];
            mensagem.innerText = 'Veículo excluído com sucesso!';
            mensagem.style.color = 'green';
            document.getElementById('input1').value = '';
        } else {
            mensagem.innerText = 'Veículo não encontrado!';
            mensagem.style.color = 'red';
            document.getElementById('input1').value = '';
        }
    }

    botaoExcluir.addEventListener('click', excluir);
}
