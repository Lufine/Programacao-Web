/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Filipe Neuwirth
DATA: 19/05/2023 
*/

const express = require('express');
const app = express();
app.use(express.json());

let pacientes = [];

// Rota para cadastrar um novo paciente
app.post('/pacientes', (req, res) => {
  const { nome, idade, email } = req.body;
  const paciente = { nome, idade, email };
  pacientes.push(paciente);
  res.status(201).json(paciente);
});

// Rota para obter todos os pacientes cadastrados
app.get('/pacientes', (req, res) => {
  res.json(pacientes);
});

app.listen(3000, () => {
  console.log('API de Cadastro de Paciente rodando na porta 3000');
});

/*
A API de cadastro de paciente possui rotas para cadastrar um novo paciente através da rota POST /pacientes e obter todos os pacientes cadastrados através da rota GET /pacientes.

A API de cadastro e listagem de agenda permite cadastrar um novo evento na agenda através da rota POST /agenda e obter todos os eventos cadastrados através da rota GET /agenda.
*/