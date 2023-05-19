/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Filipe Neuwirth
DATA: 19/05/2023 
*/

const express = require('express');
const app = express();
app.use(express.json());

let agendas = [];

// Rota para cadastrar um novo evento na agenda
app.post('/agenda', (req, res) => {
  const { data, descricao } = req.body;
  const evento = { data, descricao };
  agendas.push(evento);
  res.status(201).json(evento);
});

// Rota para obter todos os eventos da agenda
app.get('/agenda', (req, res) => {
  res.json(agendas);
});

app.listen(3000, () => {
  console.log('API de Cadastro e Listagem de Agenda rodando na porta 3000');
});

/*
A API de cadastro de paciente possui rotas para cadastrar um novo paciente através da rota POST /pacientes e obter todos os pacientes cadastrados através da rota GET /pacientes.

A API de cadastro e listagem de agenda permite cadastrar um novo evento na agenda através da rota POST /agenda e obter todos os eventos cadastrados através da rota GET /agenda.
*/