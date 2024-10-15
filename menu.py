from main import *

funcionario = Funcionario()
armadura =ArmadurasBatman()
equipamento = Equipamentos ()
veiculo = Veiculo()
dispositivo = DispositivoSeguranca()
tarefa = Tarefas()
while True:
    print("Escolha a opção desejada: ")
    print("1. Adicionar Funcionario")
    print("2. Listar Funcionario")
    print('3. Adicionar Armadura')
    print('4. Listar Armadura')
    print('5. Adicionar Equipamento')
    print('6. Listar Equipamento')
    print('7. Adicionar Veiculo')
    print('8. Listar3 Veiculo')
    print('9. Adicionar Dispositivo Seguranca')
    print('10. Listar Dispositivo Seguranca')
    print('11. Adicionar Tarefa')
    print('12. Listar Tarefa')
    print('0. Sair')
    opcoes = int(input('  '))
    if opcoes == 0:
        print('ATÉ MAIS!!!')
        break
    elif opcoes == 1:
        funcionario.adicionarFuncionario()
    elif opcoes == 2:
        funcionario.listar_funcionarios()
    elif opcoes == 3:
        funcionario.pesquisar_funcionario_por_nome_administrador()
    elif opcoes == 4:
        funcionario.pesquisar_funcionario_por_id_administrador()
    elif opcoes == 5:
        funcionario.pesquisar_funcionario_por_nome_gerente()
    elif opcoes == 6:
        funcionario.pesquisar_funcionario_por_id_gerente()
    elif opcoes == 7:
        funcionario.excluir_funcionario_administrador()
    elif opcoes == 8:
        armadura.adicionar_armadura()
    elif opcoes == 9:
        armadura.listar_armaduras()
    elif opcoes == 10:
        equipamento.adicionar_equipamento()
    elif opcoes == 11:
        equipamento.listar_equipamentos()
    elif opcoes == 12:
        veiculo.adicionar_veiculo()
    elif opcoes == 13:
        veiculo.listar_veiculo()
    elif opcoes == 14:
       dispositivo.adicionarDispositivoSeguranca()
    elif opcoes == 15:
       dispositivo.listar_dispositivo()
    elif opcoes == 16:
        tarefa.adicionartarefas()
    elif opcoes == 18:
        tarefa.listar_tarefas()
    