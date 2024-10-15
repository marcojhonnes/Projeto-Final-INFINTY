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
    print('3. Pesquisar Funcionario por nome -Adiministrador-')
    print('4. Pesquisar Funcionario por ID -Adiministrador-')
    print('5. Pesquisar Funcionario por nome -Gerente-')
    print('6. Pesquisar Funcionario por ID -Gerente-')
    print('7. Excluir Funcionario por nome -Adiministrador-')

    print('8. Adicionar Armadura')
    print('9. Listar Armadura')
    print('10. Alterar Situação da Armadura')
    print('11. Excluir Armadura')

    print('12. Adicionar Equipamento')
    print('13. Listar Equipamento')
    print('14. Excluir Equipamento')

    print('15. Adicionar Veiculo')
    print('16. Listar Veiculo')
    print('17. Excluir Veiculo')

    print('18. Adicionar Dispositivo Seguranca')
    print('19. Listar Dispositivo Seguranca')
    print('20. Excluir Dispositivo Seguranca')

    print('21. Adicionar Tarefa')
    print('22. Listar Tarefa')
    print('23. Executar Tarefa')
    print('24. Excluir Tarefa')
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
        armadura.alterar_situacao_armadura()
    elif opcoes == 11:
        armadura.excluir_armadura()
    
    elif opcoes == 12:
        equipamento.adicionar_equipamento()
    elif opcoes == 13:
        equipamento.listar_equipamentos()
    elif opcoes == 14:
        equipamento.excluir_equipamento_seguranca()

    elif opcoes == 15:
        veiculo.adicionar_veiculo()
    elif opcoes == 16:
        veiculo.listar_veiculos()
    elif opcoes == 17:
        veiculo.excluir_veiculo()
        
    elif opcoes == 18:
       dispositivo.adicionarDispositivoSeguranca()
    elif opcoes == 19:
       dispositivo.listar_dispositivo_seguranca()
    elif opcoes == 20:
       dispositivo.excluir_dispositivo_seguranca()

    elif opcoes == 21:
        tarefa.adicionartarefas()
    elif opcoes == 22:
        tarefa.listar_tarefas()
    elif opcoes == 23:
        tarefa.executar_tarefa()
    elif opcoes == 24:
        tarefa.excluir_tarefa()
    