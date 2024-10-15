
class Funcionario():
    def __init__(self):
        self.funcionarios = {}

    def adicionarFuncionario(self):
        id_funcionario = int(input('Digite o número do funcionário: '))
        nome_funcionario = input('Digite o nome do funcionário: ')
        cargo_funcionario = input('Digite o cargo do funcionário: ')
        senha_funcionario = input('Digite a senha do funcionário: ')
        data_Admissao = input('Digite a data de admissão do funcionário: ')

        self.funcionarios[id_funcionario] = {
            'nome': nome_funcionario,
            'cargo': cargo_funcionario,
            'senha': senha_funcionario,
            'data_admissao': data_Admissao
        }
        print(f"Funcionário {nome_funcionario} adicionado com sucesso!")

    def listar_funcionarios(self):
        for id_funcionario, dados in self.funcionarios.items():
            print(f"ID: {id_funcionario}, Nome: {dados['nome']}, Cargo: {dados['cargo']}, "
                  f"Data de Admissão: {dados['data_admissao']}")
            
    def pesquisar_funcionario_por_nome_administrador(self):
        nome = input("Digite o nome do funcionário que deseja pesquisar: ")
        for id_funcionario, dados in self.funcionarios.items():
            if dados['nome'].lower() == nome.lower():  
                print(f"Funcionário encontrado: ID: {id_funcionario}, Nome: {dados['nome']}, "
                      f"Cargo: {dados['cargo']}, Senha Fundiconario: {dados['senha']} Data de Admissão: {dados['data_admissao']}")
                return
        print(f"Nenhum funcionário encontrado com o nome: {nome}")

    def pesquisar_funcionario_por_nome_gerente(self):
        nome = input("Digite o nome do funcionário que deseja pesquisar: ")
        for id_funcionario, dados in self.funcionarios.items():
            if dados['nome'].lower() == nome.lower():
                print(f"Funcionário encontrado: ID: {id_funcionario}, Nome: {dados['nome']}, "
                      f"Cargo: {dados['cargo']}, Data de Admissão: {dados['data_admissao']}")
                return
        print(f"Nenhum funcionário encontrado com o nome: {nome}")  


    def pesquisar_funcionario_por_id_administrador(self):
        id_funcionario = int(input("Digite o ID do funcionário que deseja pesquisar: "))
        if id_funcionario in self.funcionarios: 
            dados = self.funcionarios[id_funcionario]
            print(f"Funcionário encontrado: ID: {id_funcionario}, Nome: {dados['nome']}, "
                f"Cargo: {dados['cargo']}, Senha Fundiconario: {dados['senha']} Data de Admissão: {dados['data_admissao']}")

        print(f"Nenhum funcionário encontrado com o ID: {id_funcionario}") 

    def pesquisar_funcionario_por_id_gerente(self):
        id_funcionario = int(input("Digite o ID do funcionário que deseja pesquisar: "))
        if id_funcionario in self.funcionarios: 
            dados = self.funcionarios[id_funcionario]
            print(f"Funcionário encontrado: ID: {id_funcionario}, Nome: {dados['id_funcionario']}, "
                      f"Cargo: {dados['cargo']}, Data de Admissão: {dados['id_funcionario']}")
        print(f"Nenhum funcionário encontrado com o ID: {id_funcionario}")  

    def excluir_funcionario_administrador(self):
        nome = input("Digite o nome do funcionário que deseja excluir: ")
        for id_funcionario, dados in list(self.funcionarios.items()):
            if dados['nome'].lower() == nome.lower():  
                del self.funcionarios[id_funcionario]  
                print(f"Funcionário {nome} Excluido com sucesso!")
                return
        print(f"Nenhum funcionário encontrado com o nome: {nome}")


class ArmadurasBatman():
    def __init__(self):
        self.armaduras = {}
    def adicionar_armadura(self):    
        id_armadura = int(input('Digite ID da armadura: '))
        nome_armadura = input('Digite o nome da armadura: ')
        situacao_armadura = input('Digite situação da armadura: ')
        ano_armadura = input('Digite o ano de fabricação da armadura: ')
        self.armaduras[id_armadura] = {
            'nome': nome_armadura,
            'situacao': situacao_armadura,
            'fabricacao': ano_armadura,
        }
        print(f"Armadura {nome_armadura} adicionado com sucesso!")
        print(self.armaduras)

    def listar_armaduras(self):

        for id_armadura, dados in self.armaduras.items():
            print(f"ID: {id_armadura}, Nome: {dados['nome']}, Situação: {dados['situacao']}, Data de Fabricação: {dados['fabricacao']}")

class Equipamentos():
    def __init__(self):
        self.equipamentos = {}
    def adicionar_equipamento(self):    
        id_equipamento = int(input('Digite ID da equipamento: '))
        arma = input('Digite o nome do equipamento: ')
        municao = input('Digite a quantidade de munição:  ')
        self.equipamentos[id_equipamento] = {
            'nome': arma,
            'quantidade': municao
        }
        print(f"Funcionário {arma} adicionado com sucesso!")
        print(self.equipamentos)
        
    def listar_equipamentos(self):
        for id_equipamento, dados in self.equipamentos.items():
                print(f"ID: {id_equipamento}, Nome: {dados['nome']}, Quantidade de Munição: {dados['quantidade']}")
        
class Veiculo():
    def __init__(self):
        self.veiculos = []
    def adicionar_veiculo(self):    
        id_veiculo = int(input('Digite ID da veiculo: '))
        nome_veiculo = int(input('Digite o nome do veiculo: '))
        placa_veiculo = input('Digite a placa do veiculo: ')
        cor_veiculo = input('Digite a cor do veiculo:  ')
        self.veiculos[id_veiculo] = {
            'nome': nome_veiculo,
            'placa': placa_veiculo,
            'cor': cor_veiculo
        }
        print(f"Veiculo, {nome_veiculo} adicionado com sucesso!")
        print(self.veiculos)
        
def listar_veiculos(self):
    for id_veiculo, dados in self.veiculos.items():
        print(f"ID: {id_veiculo}, Nome: {dados['nome']}, Placa do veiculo: {dados['placa']}, "
              f"Cor do Veiculo: {dados['cor']}")

class DispositivoSeguranca():
    def __init__(self):
        self.dispositivos = {}
    def adicionarDispositivoSeguranca(self):
           
        id_dispositivo = int(input('Digite ID do dispositivo: '))
        nome_dispositivo = input('Digite o nome do dispositivo: ')
        situacao_dispositivo = input('Digite situação do dispositivo: ')
        disponibilidade_dispositivo = input('Digite sim para disponivel e não para indisponivel: ')
        self.dispositivos[id_dispositivo] = {
            'nome': nome_dispositivo,
            'situacao':situacao_dispositivo,
            'disponibilidade': disponibilidade_dispositivo
        }
        print(f"Dispositivo {nome_dispositivo} adicionado com sucesso!")
        print(self.dispositivos)

    def listar_dispositivo(self):
        for id_dispositivo, dados in self.dispositivos.items():
            print(f"ID: {id_dispositivo}, Nome: {dados['nome']}, Cargo: {dados['situacao']}, "
                  f"Disponibilidade: {dados['disponibilidade']}")
        
class Tarefas():
    def __init__(self):
        self.tarefas = {}
    def adicionartarefas(self):
        id_tarefa = int(input('Digite o ID da tarefa: '))
        nome_tarefa = input('Digite o nome da tarefas: ')
        prioridade_tarefa = input('Digite o nivel da tarefas: ')
        funcionario = input('Digite o nome do funcionario: ')
        situacao_tarefa = input('Digite a situacao da tarefa: ')
        self.tarefas[id_tarefa] = {
            'nome': nome_tarefa,
            'prioridade': prioridade_tarefa,
            'funcionario': funcionario,
            'situacao': situacao_tarefa
        }
        print(f"Tarefa {nome_tarefa} adicionado com sucesso!")
        print(self.tarefas)

    def listar_tarefas(self):
        for id_tarefa, dados in self.tarefas.items():
            print(f"ID: {id_tarefa}, Nome: {dados['nome']}, Prioridade: {dados['prioridade']}, Cargo: {dados['funcionario']} "
              f"Situação da tarefa: {dados['situacao']}")
        

    
            