
class arid_armadura():
    def __init__(self):
       self.funcionarios = {}
    def adicionarFuncionario(self):
        id_funcionario = int(input('Digite o numero do funcionario: '))
        nome_funcionario = input('Digite o nome do funcionario: ')
        nome_funcionario = input('Digite o nivel do funcionario: ')
        senha_funcionario = input('Digite o senha do funcionario: ')
        data_Admissao = input('Digite o senha do funcionario: ')
        self.funcionarios.append((id_funcionario))
        self.funcionarios.append((nome_funcionario))
        self.funcionarios.append((senha_funcionario))
        self.funcionarios.append((data_Admissao))
        print(self.funcionarios)
       

class ArmadurasBatman():
    def __init__(self):
        self.armaduras = []
    def adicionar_armadura(self):    
        id_armadura = int(input('Digite ID da armadura: '))
        nome_armadura = input('Digite o nome da armadura: ')
        situacao_armadura = input('Digite situação da armadura: ')
        ano_armadura = input('Digite o ano de fabricação da armadura: ')
        self.armaduras.append((id_armadura))
        self.armaduras.append((nome_armadura))
        self.armaduras.append((situacao_armadura))
        self.armaduras.append((ano_armadura))
        print(self.armaduras)
        
class Equipamentos():
    def __init__(self):
        equipamentos = []
    def adicionar_equipamento(self):    
        id_equipamento = int(input('Digite ID da equipamento: '))
        arma = input('Digite o nome do equipamento: ')
        municao = input('Digite a quantidade de munição:  ')
        self.equipamento.append((id_equipamento))
        self.equipamento.append((arma))
        self.equipamento.append((municao))
        print(self.armaduras)
        
class Veiculo():
    def __init__(self):
        veiculos = []
    def adicionar_veiculo(self):    
        id_veiculo = int(input('Digite ID da veiculo: '))
        nome_veiculo = int(input('Digite o nome do veiculo: '))
        placa_veiculo = input('Digite a placa do veiculo: ')
        cor_veiculo = input('Digite a cor do veiculo:  ')
        self.armaduras.append((id_veiculo))
        self.veiid_veiculos.append((nome_veiculo))
        self.veiid_veiculos.append((placa_veiculo))
        self.veiid_veiculos.append((cor_veiculo))
        print(self.veiculos)
        
class DispositivoSeguranca():
    def __init__(self):
        self.dispositivos = []
    def adicionarDispositivoSeguranca(self):
           
        id_dispositivo = int(input('Digite ID do dispositivo: '))
        nome_dispositivo = input('Digite o nome do dispositivo: ')
        situacao_dispositivo = input('Digite situação do dispositivo: ')
        disponibilidade_dispositivo = input('Digite o ano de fabricação do dispositivo: ')
        self.dispositivos.append((id_dispositivo))
        self.dispositivos.append((nome_dispositivo))
        self.dispositivos.append((situacao_dispositivo))
        self.dispositivos.append((disponibilidade_dispositivo))
        print(self.dispositivos)
        
class Tarefas():
    def __init__(self):
        self.tarefas = []
    def adicionartarefas(self):
        id_tarefa = int(input('Digite o ID da tarefa: '))
        nome_tarefa = input('Digite o nome da tarefas: ')
        prioridade_tarefa = input('Digite o nivel da tarefas: ')
        funcionario = input('Digite o nome do funcionario: ')
        situacao_tarefa = input('Digite a situacao da tarefa: ')
        
        self.tarefas.append((id_tarefa))
        self.tarefas.append((nome_tarefa))
        self.tarefas.append((prioridade_tarefa))
        self.tarefas.append((funcionario))
        self.tarefas.append((situacao_tarefa))
        print(self.tarefas)
        

    
            