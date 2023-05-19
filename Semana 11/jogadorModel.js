/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Filipe Neuwirth
DATA: 19/05/2023 
*/

const jogadorController = new JogadorController();

// Criar um jogador
const jogador1 = jogadorController.criarJogador("João", "Loud");
console.log(jogador1);

// Obter um jogador
const jogador2 = jogadorController.obterJogador(jogador1.id);
console.log(jogador2);

// Atualizar um jogador
const jogador3 = jogadorController.atualizarJogador(jogador1.id, "Pedro", "SKT");
console.log(jogador3);

// Excluir um jogador
const jogador4 = jogadorController.excluirJogador(jogador1.id);
console.log(jogador4);

// Listar jogadores
const jogadores = jogadorController.listarJogadores();
console.log(jogadores);
