from flask import Flask, request

app = Flask(__name__)

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    # Realizar a busca no model para verificar as credenciais
    if check_credentials(username, password):
        return 'true'
    else:
        return 'false'

def check_credentials(username, password):
    # Implemente a lógica para verificar as credenciais no model
    # Aqui você pode comparar as credenciais com um banco de dados ou qualquer outra forma de armazenamento
    # Neste exemplo, estaremos usando credenciais estáticas apenas para fins de demonstração
    users = [
        User('admin', 'password123'),
        User('user', 'password456')
    ]

    for user in users:
        if user.username == username and user.password == password:
            return True

    return False

if __name__ == '__main__':
    app.run()
