/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Filipe Neuwirth
DATA: 19/05/2023 
*/

class JogadorController {
    constructor() {
      this.jogadores = [];
    }
  
    criarJogador(nome, equipe) {
      const jogador = new Jogador(nome, equipe);
      this.jogadores.push(jogador);
      return jogador;
    }
  
    obterJogador(id) {
      return this.jogadores.find((jogador) => jogador.id === id);
    }
  
    atualizarJogador(id, nome, equipe) {
      const jogador = this.obterJogador(id);
      if (jogador) {
        jogador.nome = nome;
        jogador.equipe = equipe;
        return jogador;
      }
      return null;
    }
  
    excluirJogador(id) {
      const index = this.jogadores.findIndex((jogador) => jogador.id === id);
      if (index !== -1) {
        return this.jogadores.splice(index, 1)[0];
      }
      return null;
    }
  
    listarJogadores() {
      return this.jogadores;
    }
  }
  