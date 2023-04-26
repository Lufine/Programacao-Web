const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bem-vindo ao tema E-Sports!');
});

app.post('/inputs', (req, res) => {
  const inputs = req.body;
  res.json(inputs);
});

app.get('/lista', (req, res) => {
  const lista = [
    { nome: 'Counter-Strike: Global Offensive', desenvolvedora: 'Valve' },
    { nome: 'League of Legends', desenvolvedora: 'Riot Games' },
    { nome: 'Dota 2', desenvolvedora: 'Valve' },
    { nome: 'Call of Duty', desenvolvedora: 'Activision' },
    { nome: 'Fortnite', desenvolvedora: 'Epic Games' },
    { nome: 'PlayerUnknowns Battlegrounds (PUBG)', desenvolvedora: 'PUBG Corporation' },
    { nome: 'Street Fighter', desenvolvedora: 'Capcom' },
    { nome: 'Mortal Kombat', desenvolvedora: 'NetherRealm Studios' },
    { nome: 'FIFA', desenvolvedora: 'Electronic Arts' },
    { nome: 'NBA 2K', desenvolvedora: 'Visual Concepts' }
  ];
  res.json(lista);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
