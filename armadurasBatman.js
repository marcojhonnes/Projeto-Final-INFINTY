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
            mensagem.innerText = 'Situação da armaduara mudada com sucesso'
            mensagem.style.color = 'green'
            console.log(armaduraBatman[id])
            } else if(novaSituacao === 2) {
                armaduraBatman[id].situacao = 'insponivel'
                mensagem.innerText = 'Situação da armaduara mudada com sucesso'
                mensagem.style.color = 'green'
            } else {
                mensagem.innerText = 'Valor invalido para situação da armadura'
                mensagem.style.color = 'green'
            }
        } else {
            mensagem.innerText = 'ID Invalido'
            mensagem.style.color = 'red'
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
            mensagem.style.color = 'green'
            document.getElementById('input1').value = ''
        } else {
            mensagem.innerText = 'Armadura não encontrada!'
            mensagem.style.color = 'red'
            document.getElementById('input1').value = ''
        }
    }
    botaoEcluir.addEventListener('click', excluir)
}
